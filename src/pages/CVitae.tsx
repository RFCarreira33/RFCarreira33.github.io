import { SITE_TITLE } from "../config";
import CvInfo from "../components/CvInfo";
import CvSection from "../components/CvSection";
import experiencesJson from "../data/experiences/experiences.json";
import educationsJson from "../data/education/education.json";
import React from "react";
import { IExperience } from "../data/experiences/IExperience";
import { IEducation } from "../data/education/IEducation";

const CVitae = () => {
  document.title = `${SITE_TITLE} Curriculum Vitae`;
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-12 gap-2 print:hidden">
        <div className="col-span-2">
          <a href="/">
            <span className="font-medium hover:underline underline-offset-3px">
              <i className="fa fa-home pr-2"></i>
              Home
            </span>
          </a>
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
                <div className="row-span-1 col-span-9 print-md">
                  <span className="font-medium">{exp.role}</span>, {exp.company}
                </div>
                <div className="row-span-1 col-span-3 text-end print-md">
                  <span className="font-medium text-end">{exp.date}</span>
                </div>
                <div className="row-span-3 col-span-full pb-2 text-sm print-rg">
                  <p className="font-medium">{exp.header}</p>
                  <div className="ps-3 pt-1">
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
                <div className="row-span-1 col-span-9 print-md">
                  <span className="font-medium">{edu.course}</span>,{" "}
                  {edu.institution}
                </div>
                <div className="row-span-1 col-span-3 text-end print-md">
                  <span className="font-medium text-end">{edu.date}</span>
                </div>
                <div className="row-span-3 col-span-full pb-2 text-sm print-rg">
                  <p>
                    <span className="font-medium">Grade {edu.grade}</span>,{" "}
                    {edu.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
        </CvSection>
        <CvSection title="Skills">
          <div className="row-span-1 col-span-3 text-end print-rg font-medium">
            Programming
          </div>
          <div className="row-span-1 col-span-9">
            <p>Python, PHP, Typescript, Java, C#, Rust, SQL</p>
          </div>
          <div className="row-span-1 col-span-3 text-end print-rg font-medium">
            Frameworks
          </div>
          <div className="row-span-1 col-span-9">
            <p>React, Django, .NET, Yii2, JQuery</p>
          </div>
          <div className="row-span-1 col-span-3 text-end print-rg font-medium">
            Tools
          </div>
          <div className="row-span-1 col-span-9">
            <p>Git, SQL, Linux, Agile, Scrum, AWS, Docker</p>
          </div>
          <div className="row-span-1 col-span-3 text-end print-rg font-medium">
            Languages
          </div>
          <div className="row-span-3 col-span-9">
            <p>Portuguese Native, English Fluent, Spanish Basic</p>
          </div>
        </CvSection>
      </div>
    </>
  );
};

export default CVitae;
