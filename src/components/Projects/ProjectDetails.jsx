import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  React.useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const ImageSwiper = ({ images }) => (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      speed={600}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      }}
      className="portfolio-details-slider"
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
  const imagesGroup1 = [
    {
      src: "/image/BridlHorse.png",
      alt: "Image 1",
    },
  ];

  const imagesGroup2 = [
    {
      src: "/image/CareMagnus.png",
      alt: "Image 2",
    },
  ];

  const imagesGroup3 = [
    {
      src: "/image/CruiseBooking.jpg",
      alt: "Image 3",
    },
  ];

  const imagesGroup4 = [
    {
      src: "/image/RoccaBox.png",
      alt: "Image 4"
    },
  ]

  const imagesGroup5 = [
    {
      src: "/image/Superior.png",
      alt: "Image 5"
    },
  ]

  const imagesGroup6 = [
    {
      src: "/image/TabirAcademy.png",
      alt: "Image 6"
    },
  ]

  const projectInfo = [
    {
      name: "BridlHorse",
      category: "Website Project",
      webUrl: "https://https://www.bridl.co",
    },
    {
      name: "CareMagnus",
      category: "Website Project",
      webUrl: "https://www.caremagnus.com",
    },
    {
      name: "Cruise Booking System",
      category: "Website Project",
      webUrl: "https://grababoat.com",
    },
    {
      name: "RoccaBox- Real Estate Website & App",
      category: "Website Project",
      webUrl: "http://roccabox.com",
    },
    {
      name: "superior biologics",
      category: "Website Project",
      webUrl: "https://superiorbiologics.com",
    },
    {
      name: "Mobilityworkout",
      category: "Website Project",
      webUrl: "https://tabiracademy.com",
    },
  ];

  const projectDescriptions = [
    {
      title: "Bridl- Horse Booking Website",
      description:
        `BRIDL offers a simple, safe, and transparent sales experience, streamlining the process of trading elite competition horses and creating new industry standards with its top-tier investment and valorization program.
Skills: Angular, Node.js, MongoDB, MongoDB,AWS`
    },
    {
      title: "CareMagnus- Hospital And Nursing Home CRM",
      description:
        `This gives unmatched flexibility to care service provides.Multi-channel care enables the providers to offer their clients with greater accessibility and flexibility, allowing them to receive care in a way that best suits their needs and preferences.
Skills: React Native, MongoDB, ExpressJS, Node.js, React`,
    },
    {
      title: "Cruise Booking System",
      description:
        `This project involved the development of a comprehensive boat booking and management website from scratch.
Skills: React.js, PHP, Laravel, Node.js, MySQL`,
    },
    {
      title: "RoccaBox- Real Estate Website & App",
      description:
        `RoccaBox is a real estate mobile appltion that makes the property searching process a lot smoother. It helps in finding the best property on your fingertips in all over the world.
Skills: Laravel, Flutter, Swift, Kotlin, MySQL`,
    },
    {
      title: "Superior biologics",
      description:
        `At Superior Biologics, our pharmacies are dedicated to improving wellness through high-touch and high-tech personal services.
Skills: React, Node.js, Next.js, ExpressJS, CSS`,
    },
    {
      title: "Tabir Academy",
      description:
        `Tabir Academy provides extensive and to the point preparation of the test. The unique Learning Box feature helps in building the underlying concept in the question. You can save concepts in learning box to revise later.
Skills: Django, Python, Database Architecture, PostgreSQL, Stripe`,
    },
  ];

  return (
    <div>
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              onClick={() => navigate(-1)}
              className="me-2 d-flex align-items-center"
              role="button"
            >
              <i className="bi bi-arrow-left me-1 fs-4"></i>
            </Link>
            <h1 className="mb-2 mb-lg-0">Project Details</h1>
          </div>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Project Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {projectInfo.map((project, index) => {
        let selectedImageGroup;
        if (index % 6 === 0) {
          selectedImageGroup = imagesGroup1;
        } else if (index % 6 === 1) {
          selectedImageGroup = imagesGroup2;
        }else if (index % 6 === 2) {
          selectedImageGroup = imagesGroup3;
        } else if (index % 6 === 3) {
          selectedImageGroup = imagesGroup4;
        } else if (index % 6 === 4) {
          selectedImageGroup = imagesGroup5;
        } else {
          selectedImageGroup = imagesGroup6;
        }

        return (
          <section
            key={index}
            id="portfolio-details"
            className="portfolio-details section"
          >
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <ImageSwiper images={selectedImageGroup} />
                </div>
                <div className="col-lg-4">
                  <div
                    style={{whiteSpace: 'pre-wrap'}}
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>{projectDescriptions[index].title}</h2>
                    <p className="justify">
                      {projectDescriptions[index].description}
                    </p>
                  </div>
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Name</strong>: {project.name}
                      </li>
                      <li>
                        <strong>Category</strong>: {project.category}
                      </li>
                      <li>
                        <strong>Website URL</strong>:&nbsp;
                        <a
                          href={project.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectDetails;
