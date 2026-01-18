import React from "react";

const experiences = [
  {
    company: "Vodafone Intelligent Solutions (VOIS)",
    roles: [
      {
        position: "Senior Executive",
        tenure: "Jan 2026 - Present",
        description:
          "Leading UI development for internal PaaS platform, improving usability, performance, and design consistency across modules.",
        techStack: "React.js, TypeScript, MUI, Bootstrap",
      },
      {
        position: "Graduate Engineer Trainee",
        tenure: "Dec 2024 - Dec 2025",
        description:
          "Developed a fully functional and eye-catching UI for a PaaS platform, contributing to core features and reusable components.",
        techStack: "React.js, TypeScript, MUI, Bootstrap",
      },
    ],
  },
  {
    company: "PHN Technologies",
    roles: [
      {
        position: "Intern",
        tenure: "Jan 2023 - Mar 2023",
        description:
          "Worked on designing and developing a fully functional payment interface.",
        techStack: "React.js, JavaScript, Tailwind",
      },
    ],
  },
];

function Experience() {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <hr className="customHr" />

      <div className="experienceBox">
        {experiences.map((org, orgIndex) => (
          <div className="mb-4" key={orgIndex}>
            {/* Organization */}
            <h5 className="mb-2">{org.company}</h5>

            <div className="accordion" id={`accordion-${orgIndex}`}>
              {org.roles.map((role, roleIndex) => {
                const headerId = `heading-${orgIndex}-${roleIndex}`;
                const collapseId = `collapse-${orgIndex}-${roleIndex}`;

                return (
                  <div className="accordion-item" key={roleIndex}>
                    <h2 className="accordion-header" id={headerId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        <span className="flex-grow-1">{role.position}</span>

                        <span className="me-3 text-muted small">
                          {role.tenure}
                        </span>
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headerId}
                      data-bs-parent={`#accordion-${orgIndex}`}
                    >
                      <div className="accordion-body">
                        <p>{role.description}</p>
                        <p>
                          <strong>Tech Stack:</strong> {role.techStack}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
