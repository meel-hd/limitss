import { Image } from "@mantine/core";
import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";

function Walkthrought() {
  return (
    <>
      <section>
        <div className=" py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <h1 className="font-bold leading-normal md:leading-relaxed mb-2">
                Build Process
              </h1>
              <p className="text-sm md:text-base mb-4">
                Here is the guide to the complete setup of your desktop app.
              </p>
              <Link href="/setup">
                <PrimaryBtn>Explore Now</PrimaryBtn>
              </Link>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-violet-555 absolute h-full border"></div>
                  <div className="border-2-2 border-violet-555 absolute h-full border"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12">
                      <Image
                        alt="Setup icon and URL"
                        className="mx-auto  "
                        src="/images/icons.svg"
                      />
                    </div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-lg text-violet-400">First Step</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Setup icon and URL
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        Pick an appropriate icon, and select a URL that points
                        to the desired web application home screen.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12">
                      <Image
                        alt="Fill in the details"
                        className="mx-auto max-w-[90%] "
                        src="/images/form.gif"
                      />
                    </div>
                    <div className="order-1  w-5/12 py-4 text-left hover:shadow-md rounded-lg px-6  backdrop-blur-sm">
                      <p className="mb-3 text-base text-violet-400 ">
                        Second Step
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Fill in the details
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        Head over to the{" "}
                        <Link
                          className="text-violet-400 hover:underline"
                          href={"/setup"}
                        >
                          setup{" "}
                        </Link>
                        page enter the details and customize your app from the
                        many options available. Then build your app.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12">
                      <Image
                        alt="Download Artifacts"
                        className="mx-auto max-w-[90%] "
                        src="/images/downl.gif"
                      />
                    </div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-violet-400 ">
                        Third Step
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Download artifacts
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        When the build is complete, installer of your app for
                        Mac, Linux, and Windows will be available for download.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 py-4  hover:shadow-md rounded-lg px-6  backdrop-blur-sm">
                      <p className="mb-3 text-base text-violet-400 ">
                        Fourth Step
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        App Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug  text-opacity-100">
                        Distribute your app to your users, and they will be able
                        to install it on their desktops.
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  alt="Build Process"
                  className="mx-auto max-w-[90%] -mt-36 md:-mt-36"
                  src="/images/dist.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Walkthrought;
