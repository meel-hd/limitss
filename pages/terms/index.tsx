import { useMantineTheme } from "@mantine/core";
import Header from "components/head";
import Footer from "components/landing/Footer";
import Head from "next/head";

function TermsAndConditions() {
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Limitss Terms and Conditions." />
      </Head>
      <Header />
      <div className="w-full flex justify-center items-center  pt-20 mb-20 relative">
        {/* First decoration svg */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="30%"
          id="blobSvg"
          className="absolute"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(238, 205, 163)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(239, 98, 159)" }}
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* Second decoration svg */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="30%"
          id="blobSvg"
          className="opacity-100 absolute top-[60vh] left-10 z-0"
          transform="rotate(-106)"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: " rgb(170, 165, 238)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(239, 98, 159)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient2)" className="opacity-100">
            <animate
              attributeName="d"
              dur="4800ms"
              repeatCount="indefinite"
              values="M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z"
            ></animate>
          </path>
        </svg>
        {/* Third decoration svg */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="30%"
          id="blobSvg"
          className="opacity-100 absolute top-20 right-14 z-0"
          transform="rotate(-106)"
        >
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(200, 159, 208)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 0, 111)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient3)" className="opacity-100">
            <animate
              attributeName="d"
              dur="10.8s"
              repeatCount="indefinite"
              values="M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z"
            ></animate>
          </path>
          <path id="blob" fill="url(#gradient3)" className="opacity-100">
            <animate
              attributeName="d"
              dur="4.8s"
              repeatCount="indefinite"
              values="M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z"
            ></animate>
          </path>
          <path id="blob" fill="url(#gradient)" className="opacity-100">
            <animate
              attributeName="d"
              dur="4.8s"
              repeatCount="indefinite"
              values="M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z"
            ></animate>
          </path>
        </svg>
        {/* Main content */}
        <div
          style={{
            color: theme.colorScheme === "dark" ? "white" : "black",
          }}
          className="px-2 sm:px-10 w-full sm:w-4/6 "
        >
          <div className="px-6 py-8  rounded-lg shadow-md  bg-white/10 backdrop-blur-xl">
            <h2 className="text-xl font-medium mb-6">Terms and Conditions</h2>
            <p className="text-base mb-6">
              Please read these Terms and Conditions carefully before using
              www.limitss.com operated by Limitss. Your access to and use of the
              website is conditioned on your acceptance of and compliance with
              these Terms. These Terms apply to all visitors, users, and others
              who access or use the website.
            </p>
            <h3 className="text-lg font-medium mb-4">Use of the Website</h3>
            <p className="text-base mb-6">
              By accessing or using the website, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the website.
            </p>
            <h3 className="text-lg font-medium mb-4">Intellectual Property</h3>
            <p className="text-base mb-6">
              The website and its original content, features, and functionality
              are owned by Limitss and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
            <h3 className="text-lg font-medium mb-4">
              Links to Other Websites
            </h3>
            <p className="text-base mb-6">
              Our website may contain links to third-party websites or services
              that are not owned or controlled by Limitss. Limitss has no
              control over, and assumes no responsibility for, the content,
              privacy policies, or practices of any third-party websites or
              services. You acknowledge and agree that Limitss shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with the
              use of or reliance on any such content, goods, or services
              available on or through any such websites or services.
            </p>
            <h3 className="text-lg font-medium mb-4">Termination</h3>
            <p className="text-base mb-6">
              We may terminate or suspend your access to the website
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>
            <h3 className="text-lg font-medium mb-4">
              Changes to the Terms and Conditions
            </h3>
            <p className="text-base mb-6">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will make
              reasonable efforts to provide at least 30 days notice prior to any
              new terms taking effect. What constitutes a material change will
              be determined at our sole discretion.
            </p>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>

            <p className="text-base mb-6">
              If you have any questions about these Terms, please contact us
              <a href="mailto:limitss.com@gmail.com"> limitss.com@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
