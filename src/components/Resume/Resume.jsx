import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "yurrisherehi@gmail.com",
    "https://tigercoder0315.netlify.app",
    "github.com/tigercoder0218",
  ];
  const education = [
    {
      title: "Bachelor's Degree in Computer Science",
      duration: "2010 - 2014",
      institution: "Dnipropetrovs'kij Nacional'nij Universitet",
      description:
        "During my development, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
  ];
  const internships = [
    {
      company: "ITBrains, Kharkiv",
      duration: "May 2022 - Present",
      // location: "Montreal, Canada",
      responsibilities: [
        "Spearheaded the redesign of a cross-platform analytics tool that improved data processing speeds by 40%, utilizing Redux for the frontend and Node for the backend.",
        "Utilized Jira for managing and tracking progress which improved the team's efficiency by 15%.",
        "Incorporated cloud-based solutions with Azure services, resulting in a scalable infrastructure that supported a twofold increase in user traffic during peak transaction periods.",
        "Spearheaded the adoption of containerization using Docker and Kubernetes, reducing deployment time by 40% and improving scalability.",
        "Designed and implemented database schema using SQLAlchemy, ensuring data consistency and scalability across multiple micro-services.",
        "Mentored junior developers through pair programming and code review, boosting team performance and knowledge sharing.",
        "Created Blockchain Technology and Smart Contracts Programming Courseware.",
        "Instructed and motivated underprivileged communities students, mentoring new teachers and help opening professional paths in Kharkiv, Ukraine.",
      ],
    },
    {
      company: "Codeminders, Kyiv ",
      duration: "March 2020 - April 2022",
      // location: "Toronto, Canada",
      responsibilities: [
        "Developed an advanced user interface using React Native, enhancing user experience and boosting website traffic by 20%.",
        "Developed an advanced user interface using React Native, enhancing user experience and boosting website traffic by 20%.",
        "Designed a scalable cloud-based solution on AWS, reducing infrastructure costs by 25% while increasing performance.",
        "Fixed critical bugs and optimized MySQL queries, improving overall database performance by 15%."
      ],
    },
    {
      company: "Daxx, Kharkiv",
      duration: "September 2018 - March 2020",
      // location: "Burnaby, Canada",
      responsibilities: [
        "Designed and implemented modular Angular and React components to increase code reuse by 20%.",
        "Streamlined frontend-to-backend communication bringing uniformity and consistency to web application data, resulting in a 20% decrease in discrepancies.",
        "Enforced rate-limiting mechanisms as part of infrastructure management to ensure fair usage and maintain system performance.",
        "Pioneered the adoption of test-driven development (TDD) practices using Jest and Mocha, enhancing code quality and reducing the number of regression bugs by 35%.",
        "Engaged in integrating AI-driven analytics into cloud services, enhancing customer predictive capabilities by 20%."
      ],
    },
    {
      company: "SoftServe, Dnipro",
      duration: "April 2015 - September 2018",
      // location: "Burnaby, Canada",
      responsibilities: [
        "Developed over 25 highly responsive and user-friendly web interfaces using Laravel and jQuery.", 
        "Contributed in regular code reviews and executed best practices for GitFlow, increasing collaboration efficiency within the development team by 15%.",
        "Contributed to the development of client-side logic for various applications, ensuring smooth operation across different browsers.",
        "Collaborated with UX/UI designers to enhance user experience, increasing user engagement by 20%.",
        "Actively took part in sprint planning, stand-ups, and retrospectives to align with project goals.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="/Yurii_Sherehi.pdf"
          className="icon resume"
          target="_blank"
          download="Yurii Sherehi"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Yurri Sherehi</h4>
              <p className="justify">
              Expertise in modern frameworks, cloud platforms, and scalable architectures, with a proven track record of driving operational efficiency,
              reducing infrastructure costs, and delivering innovative solutions.
              Strong leadership skills in mentoring teams, optimizing workflows, and fostering collaboration.
              Passionate about building secure, user-friendly systems that empower businesses to achieve their strategic objectives.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Work Experience</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                {/* <p>
                  <em>{internship.location}</em>
                </p> */}
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
