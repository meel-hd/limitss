function Vue(props) {
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
          <g clipPath="url(#b)">
            <path
              d="M48.6 28H56L37.5 59.971 19 28h14.153l4.347 7.414L41.755 28H48.6Z"
              fill="#41B883"
            />
            <path
              d="m19 28 18.5 31.971L56 28h-7.4L37.5 47.183 26.308 28H19Z"
              fill="#41B883"
            />
            <path
              d="M26.308 28 37.5 47.275 48.6 28h-6.845L37.5 35.414 33.153 28h-6.845Z"
              fill="#35495E"
            />
          </g>
          <defs>
            <clipPath id="b">
              <path fill="#fff" transform="translate(19 28)" d="M0 0h37v32H0z" />
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
        </svg> );
}

export default Vue;