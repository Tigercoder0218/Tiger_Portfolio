import React, { useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
      return script;
    };
    const web3FormsScript = loadScript(
      // "https://web3forms.com/client/script.js"
    );
    return () => {
      document.head.removeChild(web3FormsScript);
    };
  }, []);

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p className="justify">
          If you have any questions, suggestions, or want to contact, feel free
          to reach out!
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Telegram</h3>
                  <p className="justify">
                    @yuriisherehhicom
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>yuriisherehi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
