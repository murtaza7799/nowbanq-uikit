import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
  
      <image width="90" height="90" y="5" href='https://swap.nowbanq.com/images/tokens/0x5b7fFe8BAFB420e413fd928CDc22AD3554f14c67.png'/>
     
    </Svg>
  );
};

export default Icon;
