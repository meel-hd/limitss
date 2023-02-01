import Logo from "components/layout/head/lib/Logo";
import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex mt-20 flex-col sm:flex-row justify-between items-center px-5 py-10 bg-white/5 gap-3 rounded-md">
      <div className="flex flex-col  items-center">
        <Logo />
        <small className="ml-10">All rights reserved</small>
      </div>
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Join the Limitss Alpha</h1>
            <p className="text-sm text-gray-500 mb-5">Get early access to Limitss</p>
            <Link href="/setup">
                <PrimaryBtn>
                    Get Started
                </PrimaryBtn>
            </Link>
        </div>      
      <div className="flex flex-row  items-center">
        <Link className="hover:underline mr-10" href="/privacy">Privacy Policy</Link>
        <Link className="hover:underline" href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;
