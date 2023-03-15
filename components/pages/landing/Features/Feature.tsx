import { Image } from "@mantine/core";
function Feature({ title, description, color, image }) {
  return (
    <div
      style={{
        borderTopColor: color,
      }}
      className="bg-[#20202E] px-8 py-6 rounded-2xl w-[340px] max-w-[90vw] h-[500px] border-t-4"
    >
      <Image className="select-none pointer-events-none" src={image} alt="" />
      <div className="flex items-center mt-10">
        <div className="bg-white/20 w-2/3 rounded-full px-2 py-1">
        <h3>{title}</h3>
        </div>
        <div className="bg-white/20 w-2 rounded-full h-10 -rotate-45 ml-6  mr-3"></div>
        <div className="bg-white/20 w-2 rounded-full h-10 -rotate-45 mr-3"></div>
        <div className="bg-white/20 w-2 rounded-full h-10 -rotate-45 mr-3"></div>
      </div>
      <div className="px-4 py-2 text-start mt-5">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
