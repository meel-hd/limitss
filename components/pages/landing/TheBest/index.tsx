import { Button, Image, Modal } from "@mantine/core";
import { useState } from "react";
import { PlayerPlay } from "tabler-icons-react";

Image;
function TheBest() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="min-h-screen mt-40">
        <div className="flex flex-col justify-around items-center">
          <h1 className="px-10 w-11/12 sm:w-2/3 text-center text-3xl sm:text-4xl font-bold mb-20">
            We are the best game distributors from the web.
          </h1>
          <div
            style={{
              backgroundImage: "url(images/Hero/cyberpunk.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=" relative flex justify-center items-center px-10 w-5/6 sm:w-2/3 h-[26vh] sm:h-[70vh] rounded-3xl"
          >
            <Button
              onClick={() => setOpen(true)}
              className="bg-gradient-to-r w-16 h-16 from-indigo-500 to-violet-400 hover:shadow-0xl"
            >
              <PlayerPlay />
            </Button>
          </div>
        </div>
      </section>
      <Modal radius={'lg'} centered opened={open} onClose={() => setOpen(false)}>
        <p>Video demo coming soon</p>
      </Modal>
    </>
  );
}

export default TheBest;
