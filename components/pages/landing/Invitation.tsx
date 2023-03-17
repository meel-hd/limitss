import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";

function JoinInvitation() {
  return (
    <section className="w-full relative mt-5 min-h-[60vh] sm:min-h-screen flex flex-col sm:flex-row overflow-hidden items-center">
      <div className="w-full lg:w-1/2 h-1/2 p-2 sm:p-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-center sm:text-start text-4xl mb-14 ">
          Ready to unlock your potentials in a world of fun
        </h1>
        <div className="flex flex-row mt-4">
          <Link href={"/signin"}>
            <PrimaryBtn>Join for Free</PrimaryBtn>
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/Features/CTA.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[25vh] sm:h-[70vh] w-full sm:w-2/3"
      ></div>
    </section>
  );
}

export default JoinInvitation;
