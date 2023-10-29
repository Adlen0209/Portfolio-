import { FunctionComponent, useEffect } from "react";
import '../Style/nav.scss'
import Aos from "aos";
import "aos/dist/aos.css";

export const AboutMe: FunctionComponent = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section  className="aboutMe" id="aboutMe">
            <div data-aos="fade-up"
            data-aos-duration="1500" className="presentation">
                <h2> About me</h2>
                <div className="presentation-wrapper">
                    <div className="presentation-txt">
                <p> Hello again! Thanks for scrolling that far! I obtained my professional title as a full-stack developer <span className="none">(equivalent to an two-year technical degree)</span> after intensive training at O'clock school. </p>
          <p>
          I exude positivity with a constant smile, staying highly motivated and
          forever eager to learn. My mission is to foster positive relationships
          and discover creative solutions for intricate challenges. I take
          pleasure in pair programming and thrive on being a team player,
          fostering a strong team spirit.</p>
          </div>
          <img src="src\assets\image.jpg" className="pic"></img>
          </div>
            </div>

            <div data-aos="fade-up"
            data-aos-duration="1500" className="skills">
                <h2>My Toolkit</h2>
                 <ul className="skills-ul">
                       <li className="skills-li">
                           <img src="src\assets\html.svg" ></img>
                          <h4 className="skills-txt">HTML5</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\css.svg" ></img>
                          <h4 className="skills-txt">CSS3</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\sass.svg" ></img>
                          <h4 className="skills-txt">SASS</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\javascript.svg" ></img>
                          <h4 className="skills-txt">Javascript</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\react.svg" ></img>
                          <h4 className="skills-txt">React</h4> 
                       </li>
                </ul>
                <ul className="skills-ul">
                       <li className="skills-li">
                           <img src="src\assets\github.svg" ></img>
                          <h4 className="skills-txt">Github</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\nodejs.svg" ></img>
                          <h4 className="skills-txt">NodeJS</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\postgresql.svg" ></img>
                          <h4 className="skills-txt">PostgreSQL</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\docker.svg" ></img>
                          <h4 className="skills-txt">Docker</h4> 
                       </li>
                       <li className="skills-li">
                           <img src="src\assets\typescript.svg" ></img>
                          <h4 className="skills-txt">Typescript</h4> 
                       </li>
                </ul>
            </div>
        </section>
    );
}
