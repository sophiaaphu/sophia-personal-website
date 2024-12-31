import {
  RiPushpin2Fill,
  RiFolder5Fill,
  RiCodeBoxFill,
  RiGitBranchLine,
  RiKeyboardBoxFill,
  RiBookMarkedFill,
} from "react-icons/ri";
import EventCard from "./eventCard";

const UpToList = () => {
  const currs = [
    {
      icon: <RiPushpin2Fill />,
      text: "President of the Engineering TA Organization",
      altText: "President of the ENGR TAO", // Alternative text for smaller screens
      date: "September 2024 - Present",
    },
    {
      icon: <RiFolder5Fill />,
      text: "TA for CSCE 120",
      date: "August 2024 - Present",
    },
    {
      icon: <RiKeyboardBoxFill />,
      text: "Projects Officer for the Aggie Coding Club",
      altText: "Projects Officer for ACC",
      date: "February 2024 - Present",
    },
    {
      icon: <RiBookMarkedFill />,
      text: "Developer for AggieSeek",
      date: "February 2024 - Present",
    },
  ];
  const prevs = [
    {
      icon: <RiCodeBoxFill />,
      text: "Web officer for the Engineering TA Organization",
      altText: "Web officer for the ENGR TAO",
      date: "Feburary 2024 - September 2024",
    },
    {
      icon: <RiGitBranchLine />,
      text: "SWE Intern at JP Morgan Chase",
      date: "June 2022 - August 2022",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-base md:text-lg">Currently I am a</p>
        <div className="flex flex-col gap-2">
          {currs.map((curr, index) => (
            <EventCard
              key={index}
              icon={curr.icon}
              text={curr.text}
              altText={curr.altText}
              date={curr.date}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base md:text-lg">Previously I was a</p>
        <div className="flex flex-col gap-2">
          {prevs.map((prev, index) => (
            <EventCard
              key={index}
              icon={prev.icon}
              text={prev.text}
              altText={prev.altText}
              date={prev.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpToList;
