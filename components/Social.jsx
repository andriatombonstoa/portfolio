import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/andriatombonstoa",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/andriatombontsoa",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/andriatombontsoa/",
  },
  {
    icon: <FaFacebook />,
    href: "https://web.facebook.com/fani.ry.1806",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.href} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
