import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
     <image width="50" height="50" href='https://swap.nowbanq.com/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'/>
    </Svg>
  );
};

export default Icon;
