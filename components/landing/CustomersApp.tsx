import {Image} from '@mantine/core'
function CustomersApp() {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
          <div className="flex w-full ">
            <div className="relative overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <Image
                className="object-cover object-center h-96 w-full rounded-t-xl lg:h-48 md:h-36"
                src="https://picsum.photos/1300"
                alt="blog"
              />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                  <span className="">Entry</span>
                </h4>
                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                  Install Tailwind CSS without any Javascript Framewrok locally
                  with purgeCSS, enable the dark mode option, prefferences or
                  className is upt to you.
                </p>
              </div>
            </div>
          </div>
   

          <div className="flex w-full ">
            <div className="relative overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <Image
                className="object-cover object-center h-96 w-full rounded-t-xl lg:h-48 md:h-36"
                src="https://picsum.photos/1100"
                alt="blog"
              />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                  <span className="">Entry</span>
                </h4>
                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                  Install Tailwind CSS without any Javascript Framewrok locally
                  with purgeCSS, enable the dark mode option, prefferences or
                  className is upt to you.
                </p>
              </div>
            </div>
          </div>
   

          <div className="flex w-full ">
            <div className="relative overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <Image
                className="object-cover object-center h-96 w-full rounded-t-xl lg:h-48 md:h-36"
                src="https://picsum.photos/1500"
                alt="blog"
              />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                  <span className="">Entry</span>
                </h4>
                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                  Install Tailwind CSS without any Javascript Framewrok locally
                  with purgeCSS, enable the dark mode option, prefferences or
                  className is upt to you.
                </p>
              </div>
            </div>
          </div>
   
      </div>
    </section>
  );
}

export default CustomersApp;
