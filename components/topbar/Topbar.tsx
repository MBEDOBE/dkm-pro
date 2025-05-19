"use client";

import {
  faLinkedin,
  faSquareGithub,
  faSquareXTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  const githubProfile = "https://github.com/Mbedobe";
  const youtubeProfile = "https://youtube.com/@Mbedev";
  const linkedinProfile = "https://linkedin.com/in/danielmbedobe";
  const twitterProfile = "https://x.com/@kd_mbedobe";

  return (
    <header className="z-50 flex flex-col items-center py-2 mt-2 rounded-md  md:px-8 lg:px-4 md:flex-row md:justify-between md:w-full shadow bg-gray-50">
      <Link href="/">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={160} // or your preferred width
          height={40} // or your preferred height
          className="w-40"
        />
      </Link>

      <div className="flex flex-col items-center space-y-1 md:items-end">
        <div className="flex space-x-6 text-black text-[32px]">
          <a href={githubProfile} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="hover:text-orange-500"
            />
          </a>
          <a href={youtubeProfile} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faSquareYoutube}
              className="hover:text-orange-500"
            />
          </a>
          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-orange-500"
            />
          </a>
          <a href={twitterProfile} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="hover:text-orange-500"
            />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Daniel Mbedobe
        </p>
      </div>
    </header>
  );
};

export default Topbar;
