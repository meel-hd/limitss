import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";

function JoinInvitation() {
  return (
    <section className="w-full relative min-h-screen mt-20 flex flex-col overflow-hidden items-center">
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={"20%"}
        height={"20%"}
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(139.23, 161.509, 212.566, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(127.397, 31, 251, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M23,-18C27.5,-12.6,27.5,-3.1,24.3,3.3C21,9.8,14.6,13.4,6.7,19.2C-1.2,25.1,-10.5,33.2,-16.9,31.5C-23.3,29.8,-26.6,18.3,-28.2,7.5C-29.8,-3.3,-29.6,-13.4,-24.6,-18.9C-19.6,-24.4,-9.8,-25.4,-0.3,-25.1C9.2,-24.9,18.4,-23.4,23,-18Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      {/* beautiful card asking for joing the alpha */}
        <div className="w-1/2 h-1/2 p-2 sm:p-10 flex flex-col items-center justify-center">
            <h1  className="font-bold mb-14 ">
                Try Limitss Alpha
            </h1>
            <p className=" text-center my-6">
                Join us to try the alpha to get early and free access to Limitss and help us build the best product possible.
            </p>
            <div className="flex flex-row mt-4">
                <Link href={'/signin'}>
                    <PrimaryBtn >
                        Try it out
                    </PrimaryBtn>
                </Link>
            </div>
        </div>

      
      <svg
        width={"30%"}
        height={"40%"}
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <defs>
          
          <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
            
            <stop
              id="stop1"
              stop-color="rgba(41.306, 221.674, 218.924, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(31, 251, 38.205, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient2)"
          d="M11.5,-16.1C16.1,-9.9,21.8,-7.4,26,-1.9C30.2,3.7,33,12.1,29.9,17C26.8,21.8,17.8,23,9.5,26.1C1.1,29.1,-6.5,34,-11.6,32.1C-16.7,30.2,-19.3,21.4,-19.9,14.4C-20.5,7.4,-19.1,2.1,-17,-1.8C-14.9,-5.7,-12,-8.3,-9,-14.8C-6.1,-21.2,-3,-31.7,0.2,-31.9C3.5,-32.2,7,-22.3,11.5,-16.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          stroke="url(#sw-gradient2)"
        ></path>
      </svg>
    </section>
  );
}

export default JoinInvitation;
