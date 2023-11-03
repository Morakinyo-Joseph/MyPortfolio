import React from "react";
import { FcGraduationCap } from "react-icons/fc";
type EductionProps = {};

const Eduction: React.FC<EductionProps> = () => {
  return (
    <div className="education">
      <div className="title">
        <h2>
          Education <FcGraduationCap />
        </h2>
      </div>
      <div className="education-grid">
        <p className="education-grid-school">Landmark University</p>
        <p className="education-grid-year">2018 - 2022</p>
        <p className="education-grid-degree">BSc Computer Science</p>
      </div>
    </div>
  );
};
export default Eduction;
