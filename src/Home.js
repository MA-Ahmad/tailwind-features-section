import React from "react";

const features = [
  {
    id: 1,
    title: "Photography",
    description: `
      <ul class="mb-2 ml-4 font-semibold list-disc marker:text-[#D2AD81]">
       <li>Drone Photography</li>
       <li>Interiors</li>
       <li>Exteriors / Architectural </li>
      </ul>
      Every photograph we produce finds the beauty in your property while serving as a profitable asset.`,
    images: ["features/photography1.png", "features/photography2.png"]
  },
  {
    id: 2,
    title: "Virtual Staging",
    description: `Our staging will help you sell the potential of your space. <br />
    We can work off of our own photography or photos you provide.`,
    images: ["features/virtual-staging.png"]
  },
  {
    id: 3,
    title: "Renderings",
    description: `
     <ul class="mb-2 ml-4 font-semibold list-disc marker:text-[#D2AD81]">
       <li>Interiors</li>
       <li>Exteriors</li>
      </ul> 
      Renderings are the gold standard in pre-construction marketing.`,
    images: ["features/renderings.png"]
  },
  {
    id: 4,
    title: "Interactive Tours",
    description: `
     <ul class="mb-2 ml-4 font-semibold list-disc marker:text-[#D2AD81]">
       <li>Matterport</li>
       <li>Video Walkthroughs</li>
      </ul>
      Give your audience the ability to explore your property without requiring in-person travel.`,
    images: ["features/interactive-tours.png"]
  },
  {
    id: 5,
    title: "Floor Plans",
    description: `
     <ul class="mb-2 ml-4 font-semibold list-disc marker:text-[#D2AD81]">
       <li>On-site Measure </li>
       <li> 2D Floor Plans </li>
       <li> 3D Floor Plans </li>
      </ul>
      We produce laser-precise floor plans faster than any other service.`,
    images: ["features/floor-plans.png"]
  },
  {
    id: 6,
    title: "Video",
    description: `
      <ul class="mb-2 ml-4 font-semibold list-disc marker:text-[#D2AD81]">
       <li> Drone Cinematography </li>
       <li> Interiors </li>
       <li> Exteriors / Architectural </li>
      </ul>
      Video content has higher engagement and will help your property stand out online.`,
    images: ["features/video.png"]
  }
];

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center bg-gray-100 py-16 font-nunitoSans">
      <div className="mb-3">
        <p className="max-w-[550px] font-extrabold text-5xl text-center my-0 mx-auto text-[#1B264F]">
          We make creative media that{" "}
          <span className="text-[#506BCA]">adds value</span>
        </p>
      </div>
      <div className="p-10 grid gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-around my-0 mx-auto">
        {features.map(data => (
          <div
            key={data.id}
            className="max-w-md flex rounded-lg bg-white h-[336px]"
          >
            {data.images.length > 1 ? (
              <div className="h-full relative flex-none overflow-hidden rounded-l-lg">
                <div
                  style={{
                    background: `url(${data.images[0]}) no-repeat`,
                    width: "183.5px",
                    height: "100%"
                  }}
                  title={data.title}
                ></div>
                <div
                  className="absolute top-[176px]"
                  style={{
                    background: `url(${data.images[1]}) no-repeat`,
                    width: "183.5px",
                    height: "100%"
                  }}
                  title={data.title}
                ></div>
              </div>
            ) : (
              //   <div className="h-full">
              //     <img src={data.images[0]} className="w-[183.5px]" />
              //     <img src={data.images[1]} className="w-[183.5px]" />
              //   </div>
              // <img src={data.images[0]} />
              <div
                className="flex-none overflow-hidden rounded-l-lg"
                style={{
                  background: `url(${data.images[0]})`,
                  width: "183.5px"
                }}
                title={data.title}
              ></div>
            )}
            <div className="bg-red p-6 flex flex-col leading-normal overflow-y-scroll">
              <div className="text-gray-900 font-bold text-2xl mb-2">
                {data.title}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: data.description }}
                className="text-gray-700 text-base leading-relaxed"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center">
        <button className="w-[215px] bg-blue-500 bg-[#1B264F] text-white font-medium py-2 px-2 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
