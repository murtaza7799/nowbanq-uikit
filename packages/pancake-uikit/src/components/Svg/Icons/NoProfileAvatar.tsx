import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      
           <image width="30" height="30" x="1" href='https://swap.nowbanq.com/images/nowbanq/LogoDark.png'/>
           
    </Svg>
  );
};

export default Icon;
