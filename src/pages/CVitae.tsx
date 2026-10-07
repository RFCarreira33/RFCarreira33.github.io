import { SITE_TITLE } from "../config";
import CvInfo from "../components/CvInfo";
import CvSection from "../components/CvSection";
import experiencesJson from "../data/experiences/experiences.json";
import educationsJson from "../data/education/education.json";
import React from "react";
import { IExperience } from "../data/experiences/IExperience";
import { IEducation } from "../data/education/IEducation";
import { Link } from "react-router-dom";

const CVitae = () => {
  document.title = `${SITE_TITLE} Curriculum Vitae`;
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-12 gap-2 print:hidden">
        <div className="col-span-2">
          <Link to="/">
            <span className="font-medium hover:underline underline-offset-3px">
              <i className="fa fa-home pr-2"></i>
              Home
            </span>
          </Link>
        </div>
        <div className="col-span-8"></div>
        <div className="col-span-2 flex justify-end">
          <a onClick={() => window.print()} className="cursor-pointer">
            <span className="font-medium hover:underline underline-offset-3px text-end">
              <i className="fa fa-print pr-2"></i>
              Print
            </span>
          </a>
        </div>
      </div>
      <br />
      <div className="print:block">
        <CvInfo />
        <CvSection title="Experience">
          {experiencesJson
            .sort((a: IExperience, b: IExperience) => b.id - a.id)
            .slice(0, 2)
            .map((exp: IExperience, index) => (
              <React.Fragment key={index}>
                <div className="mb-1">
                  <span className="font-medium">
                    {exp.role}, {exp.company}
                  </span>
                  <span> | {exp.date}</span>
                </div>
                <div className="pb-2 text-sm">
                  <p className="font-medium">{exp.header}</p>
                  <div className="pt-1">
                    {exp.description.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
        </CvSection>
        <CvSection title="Education">
          {educationsJson
            .sort((a: IEducation, b: IEducation) => b.id - a.id)
            .slice(0, 2)
            .map((edu: IEducation, index) => (
              <React.Fragment key={index}>
                <div>
                  <span className="text-sm">
                    {edu.course}, {edu.institution}
                  </span>
                  <span className="text-sm"> | {edu.date}</span>
                </div>
              </React.Fragment>
            ))}
        </CvSection>
        <CvSection title="Skills">
          <div>
            <p className="text-sm">
              <span className="font-medium">Languages:</span> Python, PHP,
              TypeScript, Java, C#, Rust
            </p>
            <p className="text-sm">
              <span className="font-medium">Frontend:</span> React, Vue,
              TypeScript
            </p>
            <p className="text-sm">
              <span className="font-medium">Backend:</span> Django,
              Laravel, Yii2, Node 
            </p>
            <p className="text-sm">
              <span className="font-medium">
                Tools & Infrastructure:
              </span>{" "}
              Git, SQL, Linux, Elasticsearch, AWS, Docker
            </p>
          </div>
        </CvSection>
        <CvSection title="Languages">
          <p className="text-sm">
            Portuguese (Native), English (Fluent), Spanish (Basic)
          </p>
        </CvSection>
      </div>
    </>
  );
};

export default CVitae;
