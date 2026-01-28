import React from 'react'

function About() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted w-75 mx-auto">
          I'm a passionate & focused on building modern, clean and
          user-friendly web applications.
        </p>
      </div>

      {/* Main Section */}
      <div className="row align-items-center">
        {/* Left image */}
        <div className="col-md-6 mb-4">
          <img
            src="./binodimg.jpg"
            alt="about"
            className="img-fluid rounded pl-7 w-70 shadow"
          />
        </div>

        {/* Right content */}
        <div className="col-md-6" >
          <h3 className="fw-semibold mb-3">Who I'm?</h3>
          <p className="text-muted">
            I'm Binod Sharma from Nepal currently pursuing my Bachelor's degree in Electronics and Communication Engineering. I have a strong passion for web development and love creating beautiful, functional, and user-friendly websites and applications.
          </p>

          <div className="row mt-4">
            <div className="col-sm-6 mb-3">
              <div className="p-3 border rounded text-center h-100">
                <h5 className="fw-bold">My Mission</h5>
                <p className="text-muted small">
                  Build reliable and user-focused digital products.
                </p>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="p-3 border rounded text-center h-100">
                <h5 className="fw-bold">My Vision</h5>
                <p className="text-muted small">
                  Make technology simple and accessible for everyone.
                </p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
