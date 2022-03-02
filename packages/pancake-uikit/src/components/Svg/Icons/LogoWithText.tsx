import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
 
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
       <image width="450" height="210"  x="60"  href={isDark ? '/images/pixel/LogoDark.png' : '/images/pixel/LogoWhite.png'}/>
       <image width="800" height="210"  x="550"  href= '/images/pixel/nowbanq.png'/>
   
    


    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
