import { FunctionComponent, useEffect} from "react";
import '../Style/header.scss';
import { Scroll } from "./ScrollDown";
import Aos from "aos";
import "aos/dist/aos.css";

type HeaderProps = {
    title: string,
    paragraph: string
}

export const Header: FunctionComponent<HeaderProps> = () => {
    

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div  
        className="HeaderWrapper">
          
            <div  data-aos="fade-right"
             data-aos-duration="3000" className="HeaderText">
            <h1><span>Hello! I'm Adlen.</span></h1>
            <p>
               
                A <span>fullstack developer</span> with a passion for creating engaging, entertaining user experiences.
            </p>
            </div>
            <div  data-aos="fade-left"
             data-aos-duration="3000"  className="ImageContainer">
                <img className="ImageIllustration" src="/4401280.svg"></img>
            </div>
            <Scroll />
        </div>
    );
}
