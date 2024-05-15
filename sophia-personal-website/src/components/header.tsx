'use client';
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";

const components = [
    {
      title: "About Me",
      href: "/about",
      description: "Learn more about me here.",
    },
    {
      title: "Resume",
      href: "/resume",
      description: "View and download my resume.",
    },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FBD0DE] w-full">
      <nav className="flex items-center justify-between p-4 w-full" aria-label="Global">
        <div className="flex justify-start">
          <a href="/" className="-m-1.5 p-1.5">
            <Image src='/sophia-phu-logo.png' alt="sophia logo" width={125} height={50} />
          </a>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleDrawer} className="p-2 text-gray-700">
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:flex justify-end gap-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-[#FBD0DE] grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
  <div className="fixed top-0 right-0 w-64 h-full bg-[#FEEDF5] p-4 shadow-lg z-50">
    <div className="flex justify-end">
      <button onClick={toggleDrawer} className="p-2 text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div className="mt-4">
      <div className="text-right hover:underline duration-200">
        <a href="/about" className="block px-4 py-2 text-gray-700" onClick={toggleDrawer}>About</a>
      </div>
      <div className="text-right hover:underline duration-200">
        <a href="/resume" className="block px-4 py-2 text-gray-700" onClick={toggleDrawer}>Resume</a>
      </div>
      <div className="text-right hover:underline duration-200">
        <a href="/projects" className="block px-4 py-2 text-gray-700" onClick={toggleDrawer}>Projects</a>
      </div>
      <div className="text-right hover:underline duration-200">
        <a href="/contact" className="block px-4 py-2 text-gray-700" onClick={toggleDrawer}>Contact</a>
      </div>
    </div>
  </div>
</div>
      )}
    </header>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"