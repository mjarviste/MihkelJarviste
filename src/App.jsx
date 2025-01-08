import { useEffect } from "react";
import instagramUrl from "./assets/instagram-logo.png";
import githubUrl from "./assets/github-logo.png";
import linkedInUrl from "./assets/linkedin-logo.png";
import cvURL from "./assets/Mihkel-Jarviste-CV-ENG.pdf";
import heroUrl from "./assets/PortfolioHeroImg.png";
import arrowDownUrl from "./assets/red-arrow-down.png";
import arrowUpUrl from "./assets/red-arrow-up.png";
import htmlUrl from "./assets/html5.png";
import cssUrl from "./assets/css.png";
import javascriptUrl from "./assets/javascript.png";
import reactUrl from "./assets/react.png";
import vueUrl from "./assets/vue.png";
import nodejsUrl from "./assets/nodejs.png";
import pythonUrl from "./assets/python.png";
import javaUrl from "./assets/java.png";
import nextjsUrl from "./assets/nextjs-logo.png";
import flagUrl from "./assets/estoniaFlag.png";

const App = () => {
  useEffect(() => {
    document.getElementById("instagram-logo").src = instagramUrl;
    document.getElementById("linkedIn-logo").src = linkedInUrl;
    document.getElementById("github-logo").src = githubUrl;
    document.getElementById("instagram-logo-2").src = instagramUrl;
    document.getElementById("linkedIn-logo-2").src = linkedInUrl;
    document.getElementById("github-logo-2").src = githubUrl;
    document.getElementById("cv-el").href = cvURL;
    document.getElementById("hero-img").src = heroUrl;
    document.getElementById("hero-img-mobile").src = heroUrl;
    document.getElementById("red-arrow-down").src = arrowDownUrl;
    document.getElementById("red-arrow-up").src = arrowUpUrl;
    document.getElementById("html-img").src = htmlUrl;
    document.getElementById("css-img").src = cssUrl;
    document.getElementById("javascript-img").src = javascriptUrl;
    document.getElementById("react-img").src = reactUrl;
    document.getElementById("vue-img").src = vueUrl;
    document.getElementById("nodejs-img").src = nodejsUrl;
    document.getElementById("python-img").src = pythonUrl;
    document.getElementById("nextjs-img").src = nextjsUrl;
    document.getElementById("est-flag-img").src = flagUrl;
  });

  const toHero = () => {
    const heroEl = document.querySelector("header");
    heroEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const toTechStack = () => {
    const techStackEl = document.querySelector("#tech-stack");
    techStackEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const toProjects = () => {
    const projectsEl = document.querySelector("#projects");
    projectsEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <header>
        <div id="header-wrapper">
          <h4 id="logo">mj.</h4>
          <ul id="header-links">
            <li onClick={toTechStack} className="header-link border-hover">
              Skills
            </li>
            <li onClick={toProjects} className="header-link border-hover">
              Projects
            </li>
            <li className="header-link border-hover">
              <a href="mailto:mjarviste@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section id="hero">
          <div id="hero-main-wrapper">
            <div id="hero-description-wrapper">
              <div id="hero-description">
                <div id="hero-heading-text">
                  <h3>
                    I'm <span>Mihkel Järviste</span>
                  </h3>
                  <h5>A Software Engineer</h5>
                </div>
                <div id="hero-btns-wrapper">
                  <a href="mailto:mjarviste@gmail.com">
                    <button id="contact-btn" className="btn">
                      Contact
                    </button>
                  </a>
                  <button
                    onClick={toProjects}
                    id="projects-btn"
                    className="btn border-hover"
                  >
                    Projects
                  </button>
                </div>
                <div id="hero-personal-info-wrapper">
                  <div id="personal-info">
                    <div id="age-wrapper">
                      <h5>24</h5>
                      <h6> Years Old</h6>
                    </div>
                    <div id="location-wrapper">
                      <img id="est-flag-img" alt=""></img>
                      <h6>Based in Estonia</h6>
                    </div>
                  </div>
                  <div id="contact">
                    <h5>Contact</h5>
                    <h6>mjarviste@gmail.com</h6>
                  </div>
                </div>
              </div>
              <div id="hero-image-wrapper-mobile">
                <div id="image-background">
                  <img id="hero-img-mobile" alt="Picture of Mihkel Järviste" />
                </div>
              </div>
            </div>
            <div id="hero-social-links-wrapper">
              <div id="cv-wrapper">
                <h5>Download my CV</h5>
                <a id="cv-el" download="Resume-Mihkel-Jarviste.pdf">
                  <button className="btn">Download CV</button>
                </a>
              </div>
              <div id="social-links-list">
                <ul id="social-links">
                  <li className="social-link">
                    <a
                      href="https://www.linkedin.com/in/mihkel-j%C3%A4rviste-0b3b99198/"
                      target="_blank"
                    >
                      LinkedIn
                      <img
                        alt=""
                        className="socials-icon"
                        id="linkedIn-logo"
                      ></img>
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="https://github.com/mjarviste" target="_blank">
                      Github<img alt="" id="github-logo"></img>
                    </a>
                  </li>
                  <li className="social-link">
                    <a
                      href="https://www.instagram.com/mihkeljarviste"
                      target="_blank"
                    >
                      Instagram<img alt="" id="instagram-logo"></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="hero-image-wrapper">
            <div id="image-background">
              <img id="hero-img" alt="Picture of Mihkel Järviste" />
            </div>
          </div>
          <div onClick={toTechStack} id="arrow-down-wrapper">
            <img id="red-arrow-down" alt=""></img>
          </div>
        </section>
        <section id="tech-stack">
          <div id="tech-stack-content">
            <h3>This is my tech stack</h3>
            <div id="tech-stack-wrapper">
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="html-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">HTML5</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="css-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">CSS</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="javascript-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">Javascript</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="python-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">Python</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="react-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">React</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="vue-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">Vue.js</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="nodejs-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">Node.js</span>
              </div>
              <div className="language">
                <figure className="language-img-wrapper">
                  <img id="nextjs-img" alt="" className="language-img" />
                </figure>
                <span className="language-name">Next.js</span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h3>Here are some of my projects</h3>
          <div id="projects-wrapper">
            <div id="project-1" className="project">
              <div className="project-description">
                <h6 className="project-heading">Inferno Restaurant</h6>
                <p className="project-paragraph">
                  A responsive one page website developed using React,
                  Javascript, HTML and CSS.
                </p>
                <div className="project-langs-links">
                  <div className="project-langs">
                    <i className="react-logo"></i>
                    <i className="javascript-logo"></i>
                    <i className="html-logo"></i>
                    <i className="css-logo"></i>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/mjarviste/InfernoRestaurant"
                      target="_blank"
                    >
                      <i className="github-logo"></i>
                    </a>
                    <a
                      href="https://infernorestaurant.onrender.com"
                      target="_blank"
                    >
                      <i className="open-link-logo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="project-2" className="project">
              <div className="project-description">
                <h6 className="project-heading">My Portfolio</h6>
                <p className="project-paragraph">
                  My portfolio page built using React, Javascript, HTML and CSS
                </p>
                <div className="project-langs-links">
                  <div className="project-langs">
                    <i className="react-logo"></i>
                    <i className="javascript-logo"></i>
                    <i className="html-logo"></i>
                    <i className="css-logo"></i>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/mjarviste/MihkelJarviste"
                      target="_blank"
                    >
                      <i className="github-logo"></i>
                    </a>
                    <a
                      href="https://mihkeljarviste.onrender.com"
                      target="_blank"
                    >
                      <i className="open-link-logo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="project-3" className="project">
              <div className="project-description">
                <h6 className="project-heading">AI Chatbot using OpenAI API</h6>
                <p className="project-paragraph">
                  A responsive AI Chatbot using OpenAI API and Vercel SDK. The
                  app was developed using Next.js, Typescript and Tailwind with
                  a custom UX design.
                </p>
                <div className="project-langs-links">
                  <div className="project-langs">
                    <i className="nextjs-logo"></i>
                    <i className="tailwind-logo"></i>
                    <i className="typescript-logo"></i>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/mjarviste/vestlusrobot"
                      target="_blank"
                    >
                      <i className="github-logo"></i>
                    </a>
                    <a href="https://vestlusrobot.vercel.app" target="_blank">
                      <i className="open-link-logo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="project-4" className="project">
              <div className="project-description">
                <h6 className="project-heading"></h6>
                <p className="project-paragraph"></p>
                <div className="project-langs-links">
                  <div className="project-langs"></div>
                  <div className="project-links"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div id="footer-content">
            <h6 onClick={toHero}>© Code by Mihkel</h6>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mihkeljarviste"
                  target="_blank"
                >
                  <img id="instagram-logo-2" className="socials-icon"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mihkel-j%C3%A4rviste-0b3b99198/"
                  target="_blank"
                >
                  <img id="linkedIn-logo-2" className="socials-icon"></img>
                </a>
              </li>
              <li>
                <a href="https://github.com/mjarviste" target="_blank">
                  <img alt="" id="github-logo-2" className="socials-icon"></img>
                </a>
              </li>
            </ul>
            <div onClick={toHero} id="arrow-up-wrapper">
              <img id="red-arrow-up" alt=""></img>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
