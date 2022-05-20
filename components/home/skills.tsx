import * as React from 'react';

export interface ISkillsProps {
}

export default function FeaturedSkill (props: ISkillsProps) {
  return (
    <div>
       <div className="skills__data">
                <div className="skills__names">
                    <i ></i>
                    <span className="skills__name">anc</span>
                </div>
                <div className="skills__percentage">10</div>
                <div className="skill__bar" ></div>
            </div>
    </div>
  );
}
