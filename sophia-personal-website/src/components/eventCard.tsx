import { ReactNode } from "react";

type EventCardProps = {
  icon: ReactNode;
  text: string;
  altText?: string; // Alternative text for smaller screens
  date: string;
};

const EventCard = ({ icon, text, altText, date }: EventCardProps) => {
  return (
    <div className="flex justify-between bg-[#FEEDF5] p-4 rounded-lg shadow-md hover:-translate-y-1 duration-200">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0">{icon}</div> {/* Icon container */}
        <p className="text-sm md:text-base">
          <span className="block md:hidden">{altText || text}</span>
          <span className="hidden md:block">{text}</span>
        </p>
      </div>
      <p className="hidden md:block">{date}</p>
    </div>
  );
};

export default EventCard;
