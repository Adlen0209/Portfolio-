import { FunctionComponent } from "react";

import '../Style/main.scss'
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";


export const Main: FunctionComponent = () => {
    return (
    <div className="main">
        <Projects />
        <AboutMe />
        

    </div>
    );
}
