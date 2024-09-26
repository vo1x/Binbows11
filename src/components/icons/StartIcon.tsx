type StartIconProps = {
  size?: number;
};

const StartIcon: React.FC<StartIconProps> = ({ size = 36 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48">
      <linearGradient
        id="RucpB_ahqt8VfTW7X2sDFa_gXoJoyTtYXFg_gr1"
        x1="9.703"
        x2="16.585"
        y1="26.119"
        y2="37.59"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1784d8"></stop>
        <stop offset="1" stopColor="#0864c5"></stop>
      </linearGradient>
      <path
        fill="url(#RucpB_ahqt8VfTW7X2sDFa_gXoJoyTtYXFg_gr1)"
        d="M20,25.026L5.011,25l0.001,11.002c0,0.999,0.737,1.844,1.726,1.981L20,39.818V25.026z"
      ></path>
      <linearGradient
        id="RucpB_ahqt8VfTW7X2sDFb_gXoJoyTtYXFg_gr2"
        x1="24.604"
        x2="44.545"
        y1="27.13"
        y2="40.895"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#31abec"></stop>
        <stop offset="1" stopColor="#1582d5"></stop>
      </linearGradient>
      <path
        fill="url(#RucpB_ahqt8VfTW7X2sDFb_gXoJoyTtYXFg_gr2)"
        d="M22,25.03v15.065l18.722,2.59c1.202,0.166,2.274-0.767,2.274-1.981L43,25.066L22,25.03z"
      ></path>
      <linearGradient
        id="RucpB_ahqt8VfTW7X2sDFc_gXoJoyTtYXFg_gr3"
        x1="8.142"
        x2="25.788"
        y1="11.699"
        y2="27.581"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#31abec"></stop>
        <stop offset="1" stopColor="#1582d5"></stop>
      </linearGradient>
      <path
        fill="url(#RucpB_ahqt8VfTW7X2sDFc_gXoJoyTtYXFg_gr3)"
        d="M20,8.256l-13.278,1.88c-0.987,0.14-1.721,0.985-1.72,1.982L5.014,23H20V8.256z"
      ></path>
      <linearGradient
        id="RucpB_ahqt8VfTW7X2sDFd_gXoJoyTtYXFg_gr4"
        x1="25.913"
        x2="56.031"
        y1="10.147"
        y2="30.618"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#54daff"></stop>
        <stop offset="1" stopColor="#25a2e5"></stop>
      </linearGradient>
      <path
        fill="url(#RucpB_ahqt8VfTW7X2sDFd_gXoJoyTtYXFg_gr4)"
        d="M22,7.973V23h20.995V7.303c0-1.216-1.076-2.151-2.28-1.98L22,7.973z"
      ></path>
    </svg>
  );
};

export default StartIcon;
