function Php(props) {
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
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m19.6 47.791 2.575-13.248h5.955c2.575.163 3.863 1.472 3.863 3.762 0 3.925-3.058 6.215-5.795 6.051h-2.897l-.643 3.435h-3.059Zm4.345-5.888.805-4.907h2.092c1.127 0 1.932.49 1.932 1.472-.161 2.78-1.449 3.272-2.897 3.435h-1.932Zm7.45 2.453 2.575-13.248h3.058l-.644 3.435h2.897c2.576.163 3.542 1.472 3.22 3.107l-1.127 6.706h-3.22l1.128-6.051c.16-.818.16-1.309-.966-1.309H35.9l-1.448 7.36h-3.058Zm9.773 3.435 2.575-13.248H49.7c2.575.163 3.863 1.472 3.863 3.762 0 3.925-3.059 6.215-5.795 6.051H44.87l-.644 3.435h-3.058Zm4.346-5.888.804-4.907h2.093c1.127 0 1.931.49 1.931 1.472-.16 2.78-1.448 3.272-2.897 3.435h-1.931Z"
                fill="#232531"
            />
            <defs>
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

export default Php;