import { ReactNode } from "react";

type EventCardProps = {
  icon: ReactNode;
  text: string;
  date: string;
};

const EventCard = ({ icon, text, date }: EventCardProps) => {
  return (
    <div className="flex justify-between bg-[#FEEDF5] p-4 rounded-lg shadow-md hover:-translate-y-1 duration-200">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm md:text-base">{text}</p>
      </div>
      <p className="hidden md:block">{date}</p>
    </div>
  );
};

export default EventCard;