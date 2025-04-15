export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#monials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I take pride in my work, and always strive to improve.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I have built large scale full stack applications used globally",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "my tech stack",
    description: "I constantly strive to strengthen",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I'm an eager and motivated software engineer looking for the next step in my career.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a full stack budgeting app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to have a chat?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zike, a mock ecommerce app",
    des: "Zike is a Nike clone built to inspire and motivate people to get in shape.",
    img: "/zike.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://zike.onrender.com/",
  },
  {
    id: 2,
    title: "BioStrive, a company homepage",
    des: "A website built to showcase the company and goals to improve the med tech space.",
    img: "/biostrive.png",
    iconLists: ["/re.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.biostrive.org/",
  },
  {
    id: 3,
    title: "A pixel perfect UI clone of the apple website",
    des: "A pixel perfect UI clone of the apple website used to show my skills with react and tailwind css.",
    img: "/apple.png",
    iconLists: ["/ts.svg", "/tail.svg"],
    link: "https://zachs-apple-ui-clone.onrender.com/",
  }

];

export const testimonials = [
  {
    quote:
      "Zach has been an exceptional asset to the BioStrive team, consistently delivering high-impact results across a range of projects. He led the development of the Biostrive website with creativity, precision, and a strong eye for design, setting a professional and engaging digital foundation for our brand. One of his standout contributions was his work on a client project for Egg Medical, where he built a robust, user-friendly webpage that now serves as the world’s largest global database of radiation reduction data. Zach brings a rare blend of technical talent and mission-driven passion that makes him an invaluable member of any team.",
    name: "Ruemon Bhattacharyya",
    title: "CEO of Biostrive",
  },
];

export const companies = [
  {
    id: 1,
    name: "BioStrive",
    nameImg: "/biostrivelogo.png",
  },
  {
    id: 2,
    name: "Egg Medical",
    nameImg: "/eggmedical.png",
  }
  
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - Biostrive",
    desc: "Contributed in the development of a company website using React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Engineer - Egg Medical",
    desc: "Designed and developed a full stack data management system for a medical device company.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Front end developer",
    desc: "Worked with multiple clients to develop and maintain their websites.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Zachary-Wood"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/zacharydavwood/"
  },
];