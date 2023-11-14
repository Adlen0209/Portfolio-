import { FunctionComponent, useEffect } from "react";
import {useState} from 'react';
import '../Style/main.scss'
import { useMediaQuery } from 'react-responsive';
import Aos from "aos";
import "aos/dist/aos.css";

export const Projects: FunctionComponent = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 992px)'});
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)
    const [isShown4, setIsShown4] = useState(false)

    
    useEffect(() => {
      Aos.init()
  }, [])
    return (
  <section  className="projects" id="projects">
    <p className="projects-title">Hover over any project to learn more !</p>
    <div className="firstRow">
        <div   data-aos={isMobile ? "flip-down": "fade-right"}
             data-aos-duration="1500"
     className="microscope" onMouseEnter={() => setIsShown1(true)}  onMouseLeave={() => setIsShown1(false)}>
        <div className="microscope-mockup">
          <img className="microscope-mockup" src="/microscope.PNG" />
        </div>
          
          {isShown1 && (
            <div className="isShown1">
            <h3> Microscope Web </h3>
            <p className="projects-paragraph">This project was carried out as part of my final training project
under professional conditions. It represents our minimum viable
product for the digital adaptation of Ben Robbins' collaborative
writing game "Microscope".</p>
              <ul className="toolsUsed">
                <li className="toolsUsed-li">Javascript</li>
                <li className="toolsUsed-li">NodeJS</li>
                <li className="toolsUsed-li">PostgreSQL</li>
                <li className="toolsUsed-li">Sqitch</li>
              </ul>
              <ul className="toolsUsed">
                
                <li className="toolsUsed-li">React</li>
                <li className="toolsUsed-li">Redux</li>
              </ul>
              <div className="redirect">
            <a href="https://github.com/Adlen0209/Microscope-web-front" className="projects-links"> Front-end </a>
            <a href="https://github.com/Adlen0209/Microscope-web-back" className="projects-links"> Back-end </a>
            </div>
            </div>
          )}
         
        </div>
        <div data-aos={isMobile ? "flip-left": "fade-down"}
     data-aos-easing="linear"
     data-aos-duration="1500"
     className="blog" onMouseEnter={() => setIsShown2(true)}  onMouseLeave={() => setIsShown2(false)}>
        <div className="blog-mockup">
          <img className="blog-mockup" src="/blog.jpg" />
        </div>
        {isShown2 && (
          <div className="isShown3">
            <h3> Simple blog </h3>
            <p className="projects-paragraph">This project is a simple blog, created with the purpose of practicing
the design of an API and its consumption on the front end.</p>
            <ul className="toolsUsed">
              <li className="toolsUsed-li">Typescript</li>
              <li className="toolsUsed-li">SASS</li>
              <li className="toolsUsed-li">NodeJS</li>
            </ul>
            <ul className="toolsUsed">
              <li className="toolsUsed-li">PostgreSQL</li>
              <li className="toolsUsed-li">React</li>
             
            </ul>
            <div className="redirect">
          <a href="https://github.com/Adlen0209/front-blogApi" className="projects-links"> Front-end </a>
          <a href="https://github.com/Adlen0209/BlogApi" className="projects-links"> Back-end </a>
          </div>
          </div>
          )}


        </div>
    
    </div>
    <div className="secondRow">
        <div data-aos={isMobile ? "flip-right": "fade-up"}
     data-aos-duration="1500"
     className="busuu" onMouseEnter={() => setIsShown3(true)}  onMouseLeave={() => setIsShown3(false)}>
        <div className="portfolio-mockup">
          <img className="portfolio-mockup" src="/portfolio.jpg" />
        </div>
        {isShown3 && (
          <div className="isShown2">
            <div className="project-wrapper">
            <h3> Portfolio </h3>
            <p className="projects-paragraph">  This project is a showcase of my skills and achievements as a
              full-stack developer. Feel free to explore my code to discover my
              programming methodology.</p>
            <ul className="toolsUsed">
              <li className="toolsUsed-li">Typescript</li>
              <li className="toolsUsed-li">SASS</li>
             
                     
            </ul>
            <div className="redirect">
          <a href="https://github.com/Adlen0209/Portfolio-" className="projects-links"> Front-end </a>
          
          </div>
          </div>
          </div>
          )}

            
        </div>
        <div data-aos={isMobile ? "flip-up": "fade-left"}
             data-aos-duration="1500"
             className="portfolio" onMouseEnter={() => setIsShown4(true)}  onMouseLeave={() => setIsShown4(false)}>
        <div className="busuu-mockup">
          <img className="busuu-mockup" src="/busuu.jpg" />
        </div>
        {isShown4 && (
          <div className="isShown4">
           <div className="project-wrapper">
           <h3> Busuu </h3>
           <p className="projects-paragraph"> [Under construction] Busuu is an application project designed to
 assist the user in their fitness routine.
I'm developing it to address the need for facilitating exercise
selection and tracking performance, but, of course, also with the
goal of practicing and improving my developer skills</p>
           <ul className="toolsUsed">
             <li className="toolsUsed-li">Typescript</li>
             <li className="toolsUsed-li">NodeJS</li>
             <li className="toolsUsed-li">PostgreSQL</li>          
           </ul>
           <div className="redirect">
         {/* <a href="" className="projects-links"> Front-end </a> */}
         <a href="https://github.com/Adlen0209/busuu3" className="projects-links"> Back-end </a>
         </div>
         </div>
         </div>
          )}

        </div>
    </div>

  </section>
    );
}
