import { CodeOff, EyeCheck, MoodCrazyHappy } from "tabler-icons-react";
function CustomersApp() {
  return (
    <section
      className="w-full min-h-screen flex justify-between overflow-hidden
     items-center"
    >
      <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
        <div className="flex w-full mt-5">
          <div className="relative bg-white/5 overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform backdrop-blur-xl shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <EyeCheck className="ml-10 mt-6" size={40} color="#00b4d8" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-violet-400">
                <span className="">Small Bundle</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-400 leading-relax">
                The resulted app is a small bundle of 5MB-, which is a lot less
                than the 100MB+ of the browser with better performance and a lot
                more security. It allows users to download the app faster and
                try it.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full mt-5">
          <div className="relative bg-white/5 overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform backdrop-blur-xl shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <MoodCrazyHappy className="ml-10 mt-6" size={40} color="#ece69d" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-violet-500">
                <span className="">User satisfaction</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-400 leading-relax">
                Having a desktop app for your webapp gives the users more trust
                in you, and also saves them from the clustered tabs in the
                browser with a minimalistic experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full mt-5">
          <div className="relative bg-white/5 overflow-hidden flex flex-col items-start m-1 sm:ml-20 transition duration-300 ease-in-out delay-150 transform backdrop-blur-xl shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <CodeOff className="ml-10 mt-6" size={40} color="#80ed99" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-violet-300">
                <span className="">No Code</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-400 leading-relax">
                Building the app requires zero interaction with the code, with
                LimitsS everything from the start to the end is done through
                graphical interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomersApp;
