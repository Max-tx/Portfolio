import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and coded with ❤️ by Mohit <br/>
          Powered by coffee and late-night coding.
        </p>
        <p>Driven by Curiosity, Defined by Results.<br/>
        <div className="social-media">
                    <a href="https://github.com/Max-tx"
                        target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/mohitparmar_4g08/" target="_blank" rel="noopener noreferrer"><i
                            className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/mohit-parmar-b34932240" target="_blank" rel="noopener noreferrer"><i
                            className='bx bxl-linkedin'></i></a>
                </div>
        </p>
        <p>
          <i className="bx bx-envelope"></i> mohitparmar2429@gmail.com  <br/>
          <i className="bx bx-copyright"></i>2024 Mohit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
