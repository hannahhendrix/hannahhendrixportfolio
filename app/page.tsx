"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  img: string;
  title: string;
  description: string;
  code: string;
  live: string;
};

   const projects: Project[] = [
      {
        img: '/assets/bento-1.jpg',
        title: 'Project One',
        description: 'A more detailed description of Project One.',
        code: 'https://github.com/hannahhendrix/project-one',
        live: 'https://project-one.demo.com'
      },
      {
        img: '/assets/bento-2.jpg',
        title: 'Project Two',
        description: 'Detailed description for Project Two.',
        code: 'https://github.com/hannahhendrix/project-two',
        live: 'https://project-two.demo.com'
      },
      {
        img: '/assets/bento-3.jpg',
        title: 'Project Three',
        description: 'Detailed description for Project Three.',
        code: 'https://github.com/hannahhendrix/project-two',
        live: 'https://project-two.demo.com'
      },
      {
        img: '/assets/bento-4.jpg',
        title: 'Project Four',
        description: 'Detailed description for Project Four.',
        code: 'https://github.com/hannahhendrix/project-two',
        live: 'https://project-two.demo.com'
      },
      {
        img: '/assets/bento-5.jpg',
        title: 'Portfolio Website - Personal Branding & Responsive Web Design',
        description: `<br>This custom-built portfolio website (the one you are viewing now!) was developed from scratch using 
        HTML5, CSS3 (with nested SCSS styling), and vanilla JavaScript. The site showcases a fully 
        responsive, mobile-first layout and includes dynamic features such as a project modal viewer, 
        smooth navigation, a collapsible mobile menu, and custom-styled scrollbars. I designed and 
        implemented a modular bento-grid layout to highlight projects, each with interactive overlays 
        and descriptive modals featuring live demo and codebase links.This project not only reflects my ability to write clean, maintainable frontend code but also
        demonstrates my attention to detail, UX design sensibilities, and commitment to creating 
        visually engaging and technically sound web experiences.<br><br>
        <b>Project Highlights:</b><br>
        <ul>
          <li>Mobile-first design: Built using modern CSS grid and media queries to ensure <br>full responsiveness across devices.</li>
          <li>Custom JavaScript functionality: Includes dynamic modal project loading using <br>structured data for scalability.</li>
          <li>Accessibility and UX: Integrated keyboard-accessible navigation, ARIA labeling, and<br> intuitive layout to enhance user experience.</li>
          <li>Code organization: Maintained clean, readable SCSS with nesting and variables <br>for theming and future maintainability.</li>
          <li>Professional polish: Features custom branding, consistent typographic hierarchy <br>using Google Fonts, and optimized image rendering.</li>
        </ul>
        `.trim(),
        code: 'https://github.com/hannahhendrix/project-two',
        live: 'https://project-two.demo.com'
      },
      {
        img: '/assets/bento-6.jpg',
        title: 'Project Six',
        description: 'Detailed description for Project Six.',
        code: 'https://github.com/hannahhendrix/project-two',
        live: 'https://project-two.demo.com'
      },
    ];

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }



  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };


  return (
    <>
    <div id="top"></div>
    <a href="#top" className="back-to-top" aria-label="Back to top">↑</a>

      <header>
          <a href="#top" className="title-holder">
              <div className="title-text">Hannah Hendrix</div>
          </a>
          <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#skills">Skills & Certifications</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="mailto:hannah.e.hendrix@outlook.com">Contact Me</a></li>
              </ul>
              <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                  <svg 
                    className="w-6 h-6 text-gray-800 dark:text-white" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24">
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeWidth="2" 
                        d="M5 7h14M5 12h14M5 17h14"/>
                  </svg>

              </a>
          </nav>
      </header>

      <main>
          <section className="hero container">
              <div className="hero-overlay"></div>
              <div className="hero-content">
                  <h1>CODE MEETS CIRCUIT</h1>
                  <p>Software Engineer with a foundation in embedded systems and hands-on experience in areospace and electronics repair.</p>
              </div>
          </section>

          <section id="about-me" className="about-me">
              <div className="about-container">
                  <h2>Hi, I'm Hannah Hendrix</h2>
                  <p>I'm a passionate and versatile software engineer currently earning my Bachelor's in Computer Science 
                      with a concentration in Software Engineering. My academic path has fueled my interest in 
                      microcontrollers and embedded systems, where I enjoy bridging the gap between low-level 
                      hardware and high-level software solutions.</p>
                  <p>With hands-on experience building wire harnesses systems for aerospace and defense 
                      applications, I've developed a meticulous attention to industry standards and precision
                      under pressure. Before that, I specialized in consumer electronics repair—particularly 
                      game consoles and smartphones—where I became known for expert-level soldering and 
                      circuit-level diagnostics</p>
                  <p>This combination of real-world hardware troubleshooting and deep software understanding
                      gives me a unique edge as an engineer. I bring strong, structured development practices 
                      to every project, whether it's a firmware-driven embedded solution or a full-stack web 
                      application.</p>
                  <div className="call-to-action">
                      <a href="/assets/resume.pdf" className="button" target="blank">
                          View Resume
                      </a>
                      <a href="mailto:hannah.e.hendrix@outlook.com" className="button">
                          Contact Me
                      </a>
                  </div>
              </div>
          </section>

          <section id="skills" className="skills-certs">
              <h2>Skills</h2>

              <div className="skills-grid">
                  <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <ul>
                      <li>C / C++</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                  </ul>
                  </div>
                  <div className="skill-category">
                  <h3>Embedded Systems</h3>
                  <ul>
                      <li>Microcontrollers (AVR, ARM)</li>
                      <li>UART / SPI / I2C</li>
                      <li>RTOS basics</li>
                  </ul>
                  </div>
                  <div className="skill-category">
                  <h3>Tools & Platforms</h3>
                  <ul>
                      <li>STM32CubeIDE, VS Code</li>
                      <li>Git, Docker</li>
                      <li>Oscilloscopes, Logic Analyzers</li>
                  </ul>
                  </div>
              </div>

              <h2>Certifications</h2>
              <div className="cert-grid">
                  <div className="cert-category">
                      <h3>Hardware</h3>
                      <ul>
                          <li><a href="https://whma.org/ipcwhma-a-620/">IPC/WHMA 620</a></li>
                          <li><a href="https://www.protoexpress.com/blog/ipc-j-std-001-standard-soldering-requirements/">J-STD-001</a></li>
                      </ul>
                  </div>
                  <div className="cert-category">
                      <h3>Microcontroller Courses</h3>
                      <ul>
                          <li>Microcontroller Basics</li>
                          <li>AVR Embedded C – Udemy</li>
                      </ul>
                  </div>
                  <div className="cert-category">
                      <h3>Academic</h3>
                      <ul>
                          <li>AT&T 2023 Technology Academy</li>
                          <li>FreeRTOS Essentials</li>
                      </ul>
                  </div>
              </div>
          </section>

          <section id="projects" className="bento">
          <h2>Projects</h2>
          <div className="bento-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bento-item" 
                onClick={() => {
                  console.log("Clicked:", project.title);
                  handleProjectClick(project);
                }}>

                <Image 
                  src={project.img} 
                  alt={project.title} 
                  width={400} 
                  height={300} />
                <div className="overlay"></div>
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p>{project.description.split("\n")[0]}</p> {/* short line */}
                </div>
              </div>
            ))}
          </div>

        </section>

        {modalOpen && activeProject && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close" onClick={handleCloseModal}>&times;</button>
              <Image src={activeProject.img} alt={activeProject.title} width={800} height={400} />
              <h3>{activeProject.title}</h3>
              <div
                style={{ textAlign: "left" }}
                dangerouslySetInnerHTML={{ __html: activeProject.description }}
              ></div>

              <div className="modal-links">
                <a href={activeProject.code} target="_blank" className="button">View Code</a>
                <a href={activeProject.live} target="_blank" className="button">Live Demo</a>
              </div>
            </div>
          </div>
        )}


      </main>

      <footer>
        <div className="social-links">
            <a href="mailto:hannah.e.hendrix@outlook.com">
                <img src="/assets/email.png" alt="Email" width="34" />
            </a>
            <a href="https://github.com/hannahhendrix" target="_blank">
                <img src="/assets/github.png" alt="GitHub" width="34" />
            </a>
            <a href="https://www.linkedin.com/in/hannah-e-hendrix/" target="_blank">
                <img src="/assets/linkedin.png" alt="LinkedIn" width="34" />
            </a>
        </div>
        <a href="https://www.flaticon.com/free-icons/api" title="api icons">Api icons created by Tanah Basah - Flaticon</a>
      </footer>
    </>
  );
}
