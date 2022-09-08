import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconPlus(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 18.75V5.25M19.125 12H4.875"
        stroke="#F7F9FC"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default IconPlus;
