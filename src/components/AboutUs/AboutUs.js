import React from "react";
// import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      style={{
        backgroundColor: "#fff",
        padding: "80px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <div className="row">
        <div className="col" />

        {/* Image Section */}
        <div
          className="image-section col-md-4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="About Us"
            style={{
              borderRadius: "10px",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col" />

        {/* Text Section */}
        <div
          className="text-section col-md-6"
          style={{
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            ABOUT US
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            At relyNrelax, we understand the importance of staying ahead with
            your vehicle's documentation. Our innovative reminder service
            ensures that you never miss an expiry date again. We provide timely
            notifications for all your vehicle's documents, including
            registration, insurance, and licenses.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Driven by a passion for simplifying your life, relyNrelax uses
            advanced technology to deliver notifications via phone calls, SMS,
            WhatsApp, and email. Our goal is to offer reliable and personalized
            service, making document management effortless for our valued
            customers.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Join thousands of satisfied clients who trust us to keep them
            informed and compliant. Let us take care of the details so you can
            focus on what matters most—safely enjoying the road ahead.
          </p>
          {/* <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FaTwitter style={{ marginRight: "15px", fontSize: "20px" }} />
            <FaFacebookF style={{ marginRight: "15px", fontSize: "20px" }} />
            <FaInstagram style={{ marginRight: "15px", fontSize: "20px" }} />
          </div> */}
        </div>
        <div className="col" />
      </div>
    </section>
  );
};

export default AboutUs;
