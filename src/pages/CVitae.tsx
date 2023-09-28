import { SITE_TITLE } from "../config";
import CvInfo from '../components/CvInfo';
import CvSection from "../components/CvSection";
import experiencesJson from "../data/experiences/experiences.json";
import educationsJson from "../data/education/education.json";
import React from "react";

const CVitae = () => {
  document.title = `${SITE_TITLE} Curriculum Vitae`
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
          {
            experiencesJson
              .sort((a: IExperience, b: IExperience) => b.id - a.id)
              .slice(0, 2)
              .map((exp: IExperience, index) => (
                <React.Fragment key={index}>
                  <div className="row-span-1 col-span-3 text-end font-regular">
                    {exp.date}
                  </div>
                  <div className="row-span-1 col-span-9">
                    <span className="font-medium">{exp.role}</span>, {exp.company}
                  </div>
                  <div className="row-span-3 col-span-3" />
                  <div className="row-span-3 col-span-9 text-sm">
                    <p>{exp.description}</p>
                  </div>
                </React.Fragment>
              ))
          }
        </CvSection>
        <CvSection title="Education">
          {
            educationsJson
              .sort((a: IEducation, b: IEducation) => b.id - a.id)
              .slice(0, 2)
              .map((edu: IEducation, index) => (
                <React.Fragment key={index}>
                  <div className="row-span-1 col-span-3 text-end font-regular">
                    {edu.date}
                  </div>
                  <div className="row-span-1 col-span-9">
                    <span className="font-medium">{edu.course}</span>, {edu.institution}
                  </div>
                  <div className="row-span-3 col-span-3" />
                  <div className="row-span-3 col-span-9 text-sm">
                    <p>
                      Grade {edu.grade}, {edu.description}
                    </p>
                  </div>
                </React.Fragment>
              ))
          }
        </CvSection>
        <CvSection title="Skills">
          <div className="row-span-1 col-span-3 text-end font-regular">Languages</div>
          <div className="row-span-1 col-span-9">
            <p>PHP, Typescript, Go, Python, C#, Java, Rust</p>
          </div>
          <div className="row-span-1 col-span-3 text-end font-regular">Other</div>
          <div className="row-span-1 col-span-9">
            <p>Git, SQL, Linux, Android, React, Django, .NET, Agile, Scrum</p>
          </div>
        </CvSection>
        <CvSection title="Languages">
          <div className="row-span-3 col-span-3"></div>
          <div className="row-span-3 col-span-9">
            <p>Portuguese (native), English (fluent), Spanish (basic)</p>
          </div>
        </CvSection>
      </div>
    </>
  );
};

export default CVitae;
