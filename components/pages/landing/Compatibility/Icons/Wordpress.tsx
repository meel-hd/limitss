function Wordpress(props) {
    return ( 
        <svg
    width={89}
    height={89}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={5} y={7} width={65} height={65} rx={20} fill="#fff" />
    </g>
    <g clipPath="url(#b)" fill="#464342">
      <path d="M21.63 39.5c0 6.281 3.65 11.71 8.944 14.283l-7.57-20.742A15.81 15.81 0 0 0 21.63 39.5ZM48.215 38.699c0-1.962-.705-3.32-1.31-4.377-.804-1.308-1.558-2.415-1.558-3.722 0-1.459 1.107-2.817 2.665-2.817.07 0 .137.009.206.013a15.813 15.813 0 0 0-10.717-4.166c-5.545 0-10.423 2.844-13.26 7.153.372.011.722.02 1.02.02 1.66 0 4.23-.202 4.23-.202.856-.05.957 1.206.102 1.307 0 0-.86.101-1.817.151l5.78 17.19 3.473-10.416-2.473-6.774a28.89 28.89 0 0 1-1.664-.152c-.855-.05-.755-1.357.1-1.307 0 0 2.622.201 4.18.201 1.66 0 4.23-.2 4.23-.2.857-.051.957 1.205.102 1.306 0 0-.861.102-1.816.152l5.735 17.06 1.583-5.29c.687-2.195 1.209-3.772 1.209-5.13Z" />
      <path d="m37.779 40.888-4.762 13.836a15.872 15.872 0 0 0 9.754-.253 1.39 1.39 0 0 1-.113-.218l-4.879-13.365ZM51.427 31.885c.068.506.106 1.049.106 1.632 0 1.61-.3 3.421-1.206 5.685l-4.848 14.016c4.718-2.752 7.892-7.863 7.892-13.718 0-2.76-.705-5.354-1.944-7.615Z" />
      <path d="M37.5 21C27.3 21 19 29.299 19 39.5 19 49.701 27.3 58 37.5 58c10.201 0 18.502-8.298 18.502-18.5 0-10.201-8.3-18.5-18.501-18.5Zm0 36.152c-9.733 0-17.652-7.919-17.652-17.653 0-9.732 7.92-17.65 17.653-17.65 9.733 0 17.651 7.918 17.651 17.65 0 9.734-7.919 17.653-17.651 17.653Z" />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" transform="translate(19 21)" d="M0 0h37v37H0z" />
      </clipPath>
      <filter
        id="a"
        x={0}
        y={0}
        width={89}
        height={89}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_0_1"
        />
        <feOffset dx={7} dy={5} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
     );
}

export default Wordpress;