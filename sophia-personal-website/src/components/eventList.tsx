import {
  RiPencilFill,
  RiTerminalBoxFill,
  RiPushpin2Fill,
  RiFolder5Fill,
} from "react-icons/ri";
import EventCard from "./eventCard";

const EventList = () => {
  const events = [
    {
      icon: <RiPencilFill />,
      text: "Released AggieSeek",
      date: "November 2024",
    },
    {
      icon: <RiTerminalBoxFill />,
      text: "Went to JPMC Code for Good",
      date: "October 2024",
    },
    {
      icon: <RiPushpin2Fill />,
      text: "Became president of the ENGR TAO",
      date: "September 2024",
    }
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
