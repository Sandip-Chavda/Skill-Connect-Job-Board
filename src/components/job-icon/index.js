// import React, { Fragment } from "react";

// const JobIcon = () => {
//   return <Fragment></Fragment>;
// };

// export default JobIcon;

import React, { Fragment } from "react";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { SiLibreofficebase } from "react-icons/si";

const JobIcon = () => {
  const icons = [
    {
      icon: <BsFillSuitcaseLgFill className="w-12 h-12 mb-4 text-gray-900" />,
      key: "suitcase",
    },
    {
      icon: <IoIosRocket className="w-12 h-12 mb-4 text-gray-900" />,
      key: "rocket",
    },
    { icon: <FaFire className="w-12 h-12 mb-4 text-gray-900" />, key: "fire" },
    {
      icon: <SiLibreofficebase className="w-12 h-12 mb-4 text-gray-900" />,
      key: "libreoffice",
    },
  ];

  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  const { icon, key } = getRandomIcon();

  return <Fragment key={key}>{icon}</Fragment>;
};

export default JobIcon;
