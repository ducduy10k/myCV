import * as React from 'react';

export interface ISpinnerProps {
}

export default function Spinner (props: ISpinnerProps) {
  return (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );
}
