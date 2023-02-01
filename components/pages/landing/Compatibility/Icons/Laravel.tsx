function Laravel(props) {
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
                d="M55.871 38.208c-.256-.25-3.552-4.291-4.109-4.958-.6-.667-.856-.542-1.241-.5-.386.042-4.538.75-5.009.792-.47.083-.77.25-.47.666.256.375 2.996 4.125 3.595 5L37.722 41.75l-8.647-14.125c-.343-.5-.428-.667-1.199-.625-.77.042-6.806.542-7.234.542-.428.041-.899.208-.47 1.208.427 1 7.276 15.333 7.447 15.75.172.417.685 1.083 1.841.833a993.777 993.777 0 0 0 7.577-1.916c1.198 2.083 3.596 6.333 4.066 6.958.6.833 1.028.667 1.927.417.727-.209 11.215-3.875 11.686-4.084.47-.208.77-.333.428-.791-.257-.334-2.997-3.959-4.452-5.834.984-.25 4.537-1.166 4.923-1.291.428-.125.513-.334.256-.584Zm-19.819 3.959c-.128.041-6.25 1.458-6.55 1.541-.341.084-.341.042-.341-.083-.086-.125-7.278-14.625-7.406-14.792-.086-.166-.086-.333 0-.333s5.779-.5 5.95-.5c.214 0 .171.042.257.167 0 0 8.005 13.458 8.133 13.666.171.209.086.292-.043.334Zm17.208 3.125c.086.166.214.25-.128.333-.3.125-10.316 3.417-10.53 3.5-.214.083-.343.125-.6-.25-.257-.375-3.51-5.833-3.51-5.833l10.659-2.709c.257-.083.342-.125.514.125.17.292 3.51 4.709 3.595 4.834Zm.685-7.334c-.257.042-4.152 1-4.152 1l-3.21-4.25c-.086-.125-.172-.25.042-.291.214-.042 3.853-.667 4.024-.709.171-.041.3-.083.514.209.214.25 2.954 3.666 3.082 3.791.128.125-.043.209-.3.25Z"
                fill="#FB503B"
            />
        </g>
        <defs>
            <clipPath id="b">
                <path fill="#fff" transform="translate(20 27)" d="M0 0h36v24H0z" />
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

export default Laravel;