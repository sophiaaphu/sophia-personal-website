import { RxInstagramLogo, RxGithubLogo, RxLinkedinLogo,RxHeart  } from "react-icons/rx";
export default function Footer() {
  return (
    <footer className="text-pink-500 pb-4">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex items-center gap-2">
          <p className="text-sm">Made with</p><RxHeart className="w-4 h-4" /><p className="text-sm">by Sophia Phu</p>
        </div>
        <div className="flex space-x-5 lg:space-x-10">
          <a href="https://www.instagram.com/sophiaaphu._/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200">
            <RxInstagramLogo className="w-5 h-5" />
          </a>
          <a href="https://github.com/sophiaaphu" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200">
            <RxGithubLogo className="w-5 h-5"  />
          </a>
          <a href="https://www.linkedin.com/in/sophiaphu/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200">
            <RxLinkedinLogo className="w-5 h-5"  />
          </a>
        </div>
      </div>
    </footer>
  );
}