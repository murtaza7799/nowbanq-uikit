import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      
            <image width="130" height="130" y="30" href='/images/nowbanq/LogoDark.png'/>

    </Svg>
  );
};

export default Icon;
