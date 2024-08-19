import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-5"
      style={{
        backgroundColor: "#bce8d2",
      }}
    >
      <div className="container py-3">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-7 mb-4" id="about-us">
            <h5>About Us</h5>
            <p className="mb-0 footer-about">
              At relyNrelax, we understand the importance of staying ahead with
              your vehicle's documentation. We are dedicated to ensure that you
              never miss an expiry date again. Our innovative reminder service
              alerts you promptly when your vehicle's documents, including
              registration, insurance, and licenses, are due for renewal.
            </p>
            <p className="mb-0 footer-about">
              Driven by a passion for simplifying your life and enhancing your
              peace of mind, relyNrelax leverages cutting-edge technology to
              deliver timely notifications via Phone call, SMS or Whatsapp
              message, email, etc. Our team is committed to provide reliable and
              personalized service, tailored to meet the unique needs of each of
              our valued customers.
            </p>
            <p className="mb-0 footer-about">
              Join thousands of satisfied clients who rely on us and relax, to
              keep them informed and compliant. Whether you're a busy
              professional, a fleet manager, or a conscientious vehicle owner,
              our goal is to make document management effortless and efficient.
            </p>
            <p className="mb-0 footer-about">
              Discover the difference with relyNrelax. Let us handle the details
              so you can focus on what matters most—safely enjoying the road
              ahead.
            </p>
          </div>

          <div className="col"></div>
          {/* Contact Us Section */}
          <div className="col-md-4 mb-4 " id="contact-us">
            <h5>Contact Us</h5>
            <a
              className="mb-0 d-block text-dark"
              href="mailto:helpdesk.relynrelax@gmail.com"
            >
              <FaEnvelope /> helpdesk.relynrelax@gmail.com
            </a>
            <a className="mb-0 d-block text-dark" href="tel:+91 9395783957">
              <FaPhone /> +91 9395783957
            </a>
            <div className="mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=61558344111424&mibextid=ZbWKwL"
                className="text-dark me-3"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href=" https://wa.me/919395783957"
                className="text-dark me-3"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/rely-n-relax-872a29323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-dark me-3"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/relynrelax?igsh=MXRxZDA0djQyeGEzbA=="
                className="text-dark me-3"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@RelyNRelax"
                className="text-dark"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            <b>
              Copyright &copy; 2024{" "}
              <a href="https://relynrelax.com">relynrelax.com</a>. All rights
              reserved.
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
