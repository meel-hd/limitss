import Link from "next/link";

function AlphaReleasePricing() {
  return (
    <div className="flex flex-col mt-20 justify-center items-center w-full mx-auto px-2 md:px-12 lg:px-16 max-w-7xl">
    <h1  className="font-bold mb-14 ">
         Pricing
    </h1>
      <div className="relative flex flex-col p-8 bg-violet-500/50 rounded-2xl transition-transform duration-500 hover:-translate-y-2">
        <div className="relative flex-1">
          <h3 className="text-xl font-semibold text-white">Startup</h3>
          <p className="flex items-baseline mt-4 text-white">
            <span className="text-5xl font-extrabold tracking-tight">$0</span>
            <span className="ml-1 text-xl font-semibold">/month</span>
          </p>
          <p className="mt-6 text-white text-solitud">
            A plan that scales with your rapidly growing business.
          </p>
          <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
            <span className="text-lg font-semibold text-white">
              {"What's included?"}
            </span>
            <li className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-white">Windows .msi native installer.</span>
            </li>
            <li className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-white">Plus native installers for Linus and Mac OS.</span>
            </li>
            <li className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-white">You can create unlimited apps. </span>
            </li>
            <li className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-white">2000 monthly build minutes at least.</span>
            </li>
            <li className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-white">Support.</span>
            </li>
          </ul>
        </div>
        <div className="z-50 mt-6 rounded-lg">
          <Link
            href="/signin"
            type="highlight"
            className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-violet-500 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AlphaReleasePricing;
