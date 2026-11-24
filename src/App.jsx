import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>KL University</h1>
        <p>Knowledge, Innovation and Excellence</p>
      </header>

      {/* Navigation Bar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Banner */}
      <section className="banner" id="home">
        <h2>Welcome to KL University</h2>
        <p>
          Empowering Students Through Quality Education
          and Innovation.
        </p>
        <button>Explore More</button>
      </section>

      {/* Main Content */}
      <main className="container">

        {/* About Section */}
        <section className="section" id="about">
          <h2>About Us</h2>
          <p>
            KL University is committed to providing quality
            education, research opportunities and
            innovation for students.
          </p>
        </section>

        {/* Courses Table */}
        <section className="section" id="courses">
          <h2>Our Courses</h2>

          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>B.Tech CSE</td>
                <td>4 Years</td>
              </tr>
              <tr>
                <td>B.Tech ECE</td>
                <td>4 Years</td>
              </tr>
              <tr>
                <td>B.Tech EEE</td>
                <td>4 Years</td>
              </tr>
              <tr>
                <td>MBA</td>
                <td>2 Years</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Contact Form */}
        <section className="section" id="contact">
          <h2>Contact Us</h2>

          <form>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Message:</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer>
        <h3>KL University</h3>
        <p>Vaddeswaram, Guntur, Andhra Pradesh</p>
        <p>Email: info@kluniversity.in</p>
        <p>© 2026 KL University. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;