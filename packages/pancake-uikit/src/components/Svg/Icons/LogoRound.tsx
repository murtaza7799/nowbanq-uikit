import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
  
      <image width="90" height="90" y="5" href='https://swap.nowbanq.com/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'/>
     
    </Svg>
  );
};

export default Icon;
