import {
  RiPencilFill,
  RiTerminalBoxFill,
  RiPlaneFill,
  RiCarFill
} from "react-icons/ri";
import EventCard from "./eventCard";

const EventList = () => {
  const events = [
    {
      icon: <RiCarFill />,
      text: "Started SWE Internship @ Uber",
      date: "May 2025",
    },
    {
      icon: <RiTerminalBoxFill />,
      text: "Became Projects Chair @ ACC",
      date: "April 2025",
    },
    {
      icon: <RiPlaneFill />,
      text: "Placed Second Overall @ TAMUHack 25",
      date: "January 2025",
    },
    {
      icon: <RiPencilFill />,
      text: "Released AggieSeek",
      date: "November 2024",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {events.map((event, index) => (
        <EventCard
          key={index}
          icon={event.icon}
          text={event.text}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventList;
