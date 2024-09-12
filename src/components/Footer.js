import React from 'react';

export const Footer = () => {
  return (
    <>
      <div className="b-example-divider"></div>
      <div className="row">
        <footer className="d-flex flex-lg-nowrap flex-wrap justify-content-center bg-info w-100 align-items-center py-4 px-5 mt-3 border-top">
          <div className="col-md-4 d-flex flex-item flex-column align-items-center">
            <h5>Dharmendra Prasad Sah Teli</h5>
            <p className='py-0'>deardharmendra.2567@gmail.com</p>
            <p className='py-0'>+91 8102841309</p>
          </div>

          <ul className="nav flex-item col-md-4 justify-content-end align-items-center list-unstyled d-flex fs-5">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/dharmendra-prasad-sah-teli-b46340254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.github.com/Dharmendra2567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.instagram.com/_dear_dharmendra/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.facebook.com/profile.php?id=100030435423176"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
