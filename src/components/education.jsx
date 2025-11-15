import React from "react";

const educationData = [
  {
    institute: "Bharati Vidyapeeth's College of Engineering",
    className: "BE Computer",
    duration: "Dec 2020 - June 2024",
    grades: "First Class with Distinction",
    image: "/bvcoel.png",
  },
  {
    institute: "Atma Malik Junior College",
    className: "XI - XII",
    duration: "June 2018 - May 2020",
    grades: "82.62% in XII",
    image: "/amjc.png",
  },
  {
    institute: "Atma Malik Educational & Sports Complex",
    className: "I - X",
    duration: "June 2008 - May 2018",
    grades: "93.80% in X",
    image: "/amis.jpg",
  },
];

function Education() {
  const carouselId = "educationCarousel";

  return (
    <div className="education">
      <h3>Education</h3>
      <hr className="customHr" />

      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {educationData.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={item.image}
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
                alt={item.institute}
              />

              <div className="carousel-caption d-block bg-dark bg-opacity-50 rounded p-3">
                <h5>{item.institute}</h5>
                <p>
                  <strong>{item.className}</strong>
                </p>
                <p>{item.duration}</p>
                <p>{item.grades}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default Education;
