import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
           <image width="130" height="130" href='https://swap.nowbanq.com/images/nowbanq/LogoDark.png'/>

    </Svg>
  );
};

export default Icon;
