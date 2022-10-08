import { Text, useMantineTheme } from "@mantine/core";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
function HeroSection({
  children,
}: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const theme = useMantineTheme();
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-full -z-20 hidden sm:flex max-w-lg">
              <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72  filter  opacity-70 animate-blob"></div>

              <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72  filter  opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <span className="mb-8 text-xs font-bold tracking-widest text-violet-600 uppercase">
            Deliever for more
          </span>
          <Text
            className={`mb-8 text-4xl font-bold leading-none tracking-tighter -600 md:text-7xl lg:text-5xl 
            ${theme.colorScheme == "dark" ? "text-white" : "text-neutral"}
          `}
          >
            Your Webapp to native desktop app.
          </Text>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
            {
              "Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js"
            }
            .
          </p>
          <div className="flex flex-wrap w-full mt-2 -mx-4 text-left">
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M16 32.076L30 24.065V8.05701L16 16.067V32.076Z"
                    fill="#000001"
                  ></path>
                  <path
                    d="M19 24.5556V27L25 23.4444V21L19 24.5556Z"
                    fill="white"
                  ></path>
                  <path
                    d="M16 0.076004L2 8.057V24.065L16 32.076V16.067L30 8.057L16 0.076004Z"
                    fill="url(#paint0_linear)"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="2.18"
                    y1="23.255"
                    x2="30.041"
                    y2="8.782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.043" stopColor="#FF8618"></stop>
                    <stop offset="0.382" stopColor="#FF246E"></stop>
                    <stop offset="0.989" stopColor="#AF1DF5"></stop>
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" fill="#FF3366"></circle>
                <path
                  d="M11.3594 10.8594C12.3259 10.8594 13.1094 10.0759 13.1094 9.10938C13.1094 8.14288 12.3259 7.35938 11.3594 7.35938C10.3929 7.35938 9.60938 8.13088 9.60938 9.10938C9.60938 10.0759 10.3929 10.8594 11.3594 10.8594Z"
                  fill="white"
                ></path>
                <path
                  d="M7.70312 12.3594L7.09375 14.5938H9.09375C8.69271 16.224 7.85312 19.6531 7.70312 20.3281C7.51562 21.1719 7.48433 23.5781 10.0156 23.5781C11.7824 23.5781 12.9093 22.4368 13.5379 21.5048L13.0625 23.4062H15.9062L17.3906 17.3981C17.6016 16.3984 18.0981 14.4688 19.8906 14.4688C22.0225 14.4688 21.2404 16.9933 20.8571 18.2305C20.8415 18.2809 20.8266 18.3291 20.8125 18.375C20.525 19.3125 20.2188 20.4062 20.2188 21.1562C20.2188 22 20.6094 23.5781 22.7969 23.5781C24.9844 23.5781 25.9167 21.4115 26.1094 20.3281L25 19.875C24.9219 20.4531 24.2188 21.7031 23.5625 21.7031C22.6641 21.7031 23.1154 20.1885 23.597 18.5721C23.8106 17.8551 24.0302 17.1181 24.1406 16.4844C24.4198 14.8821 24.1406 12.1562 21.3594 12.1562C19.632 12.1562 18.2756 13.6955 17.6303 14.7641L18.1719 12.3594H13.8438L13.25 14.5938H15.2656C15.2656 14.5938 14.0695 19.4683 13.9922 19.6211C13.1797 21.2266 11.9508 21.7655 11.0312 21.7031C10.2938 21.6531 10.3802 20.7656 10.5156 20.3281L12.5156 12.3594H7.70312Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                  fill="#1ABCFE"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                  fill="#0ACF83"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                  fill="#FF7262"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                  fill="#F24E1E"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                  fill="#A259FF"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full mt-4 flex justify-end items-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
