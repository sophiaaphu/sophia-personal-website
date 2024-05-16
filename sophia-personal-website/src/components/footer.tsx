import { RxInstagramLogo, RxGithubLogo, RxLinkedinLogo,RxHeart  } from "react-icons/rx";
export default function Footer() {
  return (
    <footer className="text-pink-500 pb-4 w-full">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex items-center gap-2">
          <p className="text-sm md:text-base">Made with</p><RxHeart className="w-6 h-6" /><p>by Sophia Phu</p>
        </div>
        <div className="flex space-x-5 lg:space-x-10">
          <a href="https://www.instagram.com/sophiaaphu._/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <RxInstagramLogo className="w-6 h-6" />
          </a>
          <a href="https://github.com/sophiaaphu" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <RxGithubLogo className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sophiaphu/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <RxLinkedinLogo className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}