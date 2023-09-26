import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "services",
    path: "/services",
    icon: <RiServerLine size="30" />,
  },
  {
    name: "work",
    path: "/works",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <RiChatPollLine size="30" />,
  },
];
