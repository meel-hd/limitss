function Squarespace(props) {
    return (<svg
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
                d="M42.64 31.383a1.644 1.644 0 0 0-2.32 0L29.88 41.785a3.289 3.289 0 0 1-4.64 0 3.26 3.26 0 0 1 0-4.623L35.48 26.959a3.288 3.288 0 0 0-4.64 0l-7.919 7.891a6.524 6.524 0 0 0 0 9.247 6.577 6.577 0 0 0 9.28 0l10.438-10.403c.64-.638.64-1.673 0-2.311Zm3.479-3.467a6.576 6.576 0 0 0-9.28 0L26.402 38.318a1.631 1.631 0 0 0 0 2.312c.64.638 1.68.638 2.32 0l10.44-10.403a3.287 3.287 0 0 1 4.638 0c.64.638 1.68.638 2.32 0a1.63 1.63 0 0 0 0-2.311Zm3.48 10.402a1.646 1.646 0 0 0-2.32 0L36.839 48.72a3.289 3.289 0 0 1-4.639 0 1.644 1.644 0 0 0-2.319 0 1.628 1.628 0 0 0 0 2.312 6.577 6.577 0 0 0 9.28 0L49.598 40.63c.64-.639.64-1.674 0-2.312Zm3.48-3.468a6.578 6.578 0 0 0-9.28 0L33.36 45.253a1.63 1.63 0 0 0 0 2.312c.641.639 1.68.639 2.32 0L46.12 37.162a3.288 3.288 0 0 1 4.64 0 3.261 3.261 0 0 1 0 4.623L40.52 51.989a3.29 3.29 0 0 0 4.64 0l7.919-7.89a6.523 6.523 0 0 0 0-9.248Z"
                fill="#1A1918"
            />
        </g>
        <defs>
            <clipPath id="b">
                <path fill="#fff" transform="translate(21 26)" d="M0 0h34v27H0z" />
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

export default Squarespace;