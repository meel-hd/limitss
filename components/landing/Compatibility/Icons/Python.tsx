function Python(props) {
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
                    d="M37.343 21.01c-9.37 0-8.785 4.08-8.785 4.08l.01 4.226h8.942v1.27H25.017s-5.996-.683-5.996 8.808c0 9.492 5.233 9.155 5.233 9.155h3.124v-4.404s-.169-5.254 5.15-5.254h8.868s4.983.08 4.983-4.835V25.93s.757-4.919-9.036-4.919Zm-4.93 2.843a1.601 1.601 0 0 1 1.486.996 1.62 1.62 0 0 1-.87 2.111 1.603 1.603 0 0 1-1.754-.35 1.615 1.615 0 0 1-.349-1.76 1.615 1.615 0 0 1 .871-.875c.195-.08.405-.123.616-.122Z"
                    fill="url(#c)"
                />
                <path
                    d="M37.61 57.873c9.37 0 8.785-4.08 8.785-4.08l-.01-4.225h-8.943v-1.27h12.494s5.996.683 5.996-8.809c0-9.491-5.234-9.155-5.234-9.155h-3.123v4.405s.168 5.254-5.15 5.254h-8.869s-4.982-.081-4.982 4.834v8.128s-.757 4.918 9.035 4.918Zm4.93-2.842a1.603 1.603 0 0 1-1.487-.996A1.618 1.618 0 0 1 42.54 51.8a1.601 1.601 0 0 1 1.486.997 1.618 1.618 0 0 1-1.486 2.233Z"
                    fill="url(#d)"
                />
            </g>
            <defs>
                <linearGradient
                    id="c"
                    x1={22.568}
                    y1={24.326}
                    x2={40.931}
                    y2={42.434}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#387EB8" />
                    <stop offset={1} stopColor="#366994" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1={33.796}
                    y1={36}
                    x2={53.511}
                    y2={54.566}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE052" />
                    <stop offset={1} stopColor="#FFC331" />
                </linearGradient>
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
        </svg>);
}

export default Python;