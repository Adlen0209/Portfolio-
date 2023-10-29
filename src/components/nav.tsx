import { FunctionComponent } from "react";
import '../Style/nav.scss'

export const Nav: FunctionComponent = ({toggle}: any ) => {
    return (
        <nav role="navigation" className="menu-toggle">
           
            <ul className="toggle-ul">
                
                <a className="toggle-li" onClick={toggle} href="#projects">Projects</a>
                <a className="toggle-li" onClick={toggle} href="#aboutMe">About me</a>
                <a className="toggle-li" onClick={toggle} href="#contact">Contact</a>
            </ul>
    
                
        </nav>
    );
}
