function Anuglar(props) {
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
                    d="M23.013 27.858 39.23 22.09l16.655 5.665-2.697 21.418L39.23 56.89l-13.739-7.613-2.478-21.418Z"
                    fill="#E23237"
                />
                <path
                    d="M55.885 27.755 39.23 22.09v34.8l13.958-7.704 2.697-21.43Z"
                    fill="#B52E31"
                />
                <path
                    d="M39.256 26.153 29.151 48.597l3.775-.065 2.029-5.063h9.065l2.221 5.127 3.608.065-10.593-22.508Zm.026 7.19 3.415 7.127h-6.42l3.005-7.126Z"
                    fill="#fff"
                />
            </g>
            <defs>
                <clipPath id="b">
                    <path fill="#fff" transform="translate(23 22)" d="M0 0h33v35H0z" />
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
        </svg>);
}

export default Anuglar;