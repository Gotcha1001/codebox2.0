import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionWrapperDelay from "../components1/FramerMotion/MotionWrapperDelay";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "JavaScript",
    desc: "Understand the core language of the web and learn modern ES6+ features",
    path: "/course/4/detail",
  },
  {
    id: 5,
    name: "Next.js",
    desc: "Build powerful full-stack applications with the Next.js React framework",
    path: "/course/5/detail",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    desc: "Style modern UIs rapidly using the utility-first Tailwind CSS framework",
    path: "/course/6/detail",
  },
  {
    id: 7,
    name: "Node.js",
    desc: "Learn backend development with Node.js and build server-side applications",
    path: "/course/7/detail",
  },
  {
    id: 8,
    name: "TypeScript",
    desc: "Write safer, scalable JavaScript using TypeScript and strong typing",
    path: "/course/8/detail",
  },
];

function Header() {
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Image src={"/crown.png"} alt="Logo" height={40} width={40} />
        <h2 className="font-bold text-3xl font-game">CodeBox</h2>
      </div>
      {/* Navbar */}

      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 p-4 sm:w-[400px] md:w-[500px] lg-:w-600px">
                {courses.map((course, index) => (
                  <div
                    className="p-2 hover:bg-accent rounded-xl cursor-pointer"
                    key={index}
                  >
                    <h2 className="font-medium">{course.name}</h2>
                    <p className="text-sm text-gray-500">{course.desc}</p>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/contact-us"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Sign up button */}
      <MotionWrapperDelay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Button className="font-game text-2xl" variant={"pixel"}>
          Signup
        </Button>
      </MotionWrapperDelay>
    </div>
  );
}

export default Header;
