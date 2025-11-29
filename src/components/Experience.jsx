import React from "react";

const experiences = [
  {
    company: "Vodafone Intelligent Solutions (VOIS)",
    position: "Graduate Engineer Trainee",
    tenure: "Dec 2024 - Present",
    Description:
      "Developed a fully functional and eye-catching UI of PaaS platform",
    techStack: "React.js, TypeScript, MUI, Bootstrap",
  },
  {
    company: "PHN Technologies",
    position: "Intern",
    tenure: "Jan 2023 - Mar 2023",
    Description:
      "Worked on designing and developing fully functional payment interface",
    techStack: "React.js, Javascript, Tailwind",
  },
];

function Experience() {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <hr className="customHr" />

      <div className="experienceBox">
        <div className="accordion" id="experienceAccordion">
          {experiences.map((exp, index) => {
            const headerId = `expHeader-${index}`;
            const collapseId = `expCollapse-${index}`;

            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={headerId}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0}
                    aria-controls={collapseId}
                  >
                    {exp.company} • {exp.position}
                  </button>
                </h2>

                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={headerId}
                  data-bs-parent="#experienceAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      <strong>Tenure:</strong> {exp.tenure}
                    </p>
                    <p>{exp.Description}</p>
                    <p>
                      <strong>Tech Stack:</strong> {exp.techStack}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
