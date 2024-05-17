import Image from "next/image";

export default function Banner() {
    const cards = [
        {
          title: "TamuHackX",
          imagealt: "TamuHack 2024",
          image: "/tamuhack.jpg", // Adjust according to your public folder path
        },
        {
          title: "Senior Trip",
          imagealt: "Senior Trip",
          image: "/senior_trip.jpg", // Adjust according to your public folder path
        },
        {
            title: "Graduation",
            imagealt: "Graduation",
            image: "/graduation.jpeg", // Adjust according to your public folder path
        },
        {
            title: "Disney Trip",
            imagealt: "Disney",
            image: "/disney_world.jpg", // Adjust according to your public folder path
        },
        {
          title: "Prom",
          imagealt: "Prom 2024",
          image: "/prom_group.jpg", // Adjust according to your public folder path
        },
        {
            title: "Prom",
            imagealt: "Prom Photo 2",
            image: "/prom_small_group.jpg", // Adjust according to your public folder path
        },
        {
            title: "Homecoming",
            imagealt: "Hoco 2024",
            image: "/hoco_group.jpg", // Adjust according to your public folder path
        },
        {
            title: "Homecoming",
            imagealt: "Hoco 2024",
            image: "/hoco_small_group.jpg", // Adjust according to your public folder path
        },
        {
            title: "State Solo and Ensemble",
            imagealt: "State s&e",
            image: "/state_se.jpg", // Adjust according to your public folder path
        },
        {
            title: "JPMC Internship",
            imagealt: "Hoco 2024",
            image: "/JPMC_Internship.jpg", // Adjust according to your public folder path
        },
        // Repeat other card objects as needed
    ];
    
    return(
        <div className="flex my-4 items-center justify-center">
        <div className="relative w-full overflow-hidden">
        <div className="mx-auto grid h-[450px] w-[300px] animate-skew-scroll grid-cols-1 gap-5 sm:w-[750px] sm:grid-cols-2">
          {cards.map((card, index) => (
            <a key={index} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-[#FBD0DE] p-4 shadow-md hover:-translate-y-1 hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <Image
                  src={card.image}
                  alt={card.imagealt}
                  width={350}
                  height={200}
                  className="mb-4"
                />
                <h3 className="text-black">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
        </div>
        </div>
    );
}
