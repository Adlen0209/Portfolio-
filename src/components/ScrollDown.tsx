import { FunctionComponent } from "react";
import ScrollDown from "../assets/ScrollDown.svg";
import '../Style/header.scss'

export const Scroll: FunctionComponent = () => {
    return (
        <div className="arrow">
              <img
              src={ScrollDown}
              className="scroll bounce"
              alt="scroll-down arrow"
              
            />
        </div>

    );
}
