// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    return new Promise((resolve) => {
      const cookies = new Cookies(req, res);
      const accessToken = cookies.get('access_token');
      if (accessToken) {
        req.headers['x-auth-token'] = accessToken;
      }
      // Don't send cookei to api server
      req.headers.cookie = '';
      proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false, // có nghĩa là khi proxy nhận đc data nó chả ra luôn cho client lên ta k cần  res để trả về cho người dùng nữa
      });
      //   res.status(200).json({ name: 'Nguyễn Đức Duy' });
      proxy.once('proxyRes', () => {
        resolve(true);
      });
    });
  } else if (req.method === 'POST') {
    return new Promise((resolve) => {
      // Don't send cookei to api server
      req.headers.cookie = '';
      const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
        let body = '';
        proxyRes.on('data', function (chunk) {
          body += chunk;
        });
        proxyRes.on('end', function () {
          try {
            const { token } = JSON.parse(body);
            // Convert token to cookies
            const cookies = new Cookies(req, res, {
              secure: process.env.NODE_ENV !== 'development',
            });
            cookies.set('access_token', token, {
              httpOnly: true,
              sameSite: 'lax',
            });
            (res as NextApiResponse).status(200).json({
              msg: 'Login successfully',
            });
          } catch (error) {
            (res as NextApiResponse).status(500).json({
              msg: 'Something went wrong',
            });
          }
          resolve(true);
        });
      };
      proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: true, // có nghĩa là khi proxy nhận đc data nó chả ra luôn cho client lên ta k cần  res để trả về cho người dùng nữa
      });
      //   res.status(200).json({ name: 'Nguyễn Đức Duy' });
      proxy.once('proxyRes', handleLoginResponse);
    });
  } else {
    return res.status(404).json({ message: 'Method not supported' });
  }
}
