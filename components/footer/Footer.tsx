import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { label: "GitHub", href: "https://github.com/Mbedobe", icon: faGithub },
  { label: "YouTube", href: "https://youtube.com/@Mbedev", icon: faYoutube },
  { label: "LinkedIn", href: "https://linkedin.com/in/danielmbedobe", icon: faLinkedin },
  { label: "X", href: "https://x.com/@kd_mbedobe", icon: faXTwitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-10">
        <div>
          <Link href="/" className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
            <Image src="/logo.webp" alt="dkmbedobe home" width={148} height={37} className="h-auto w-[140px]" />
          </Link>
          <p className="mt-2 text-sm text-slate-500">Responsive websites &amp; React interfaces.</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-3" aria-label="Social profiles">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                aria-label={`${social.label} (opens in a new tab)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-lg text-slate-600 transition-colors hover:border-orange-300 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
                <FontAwesomeIcon icon={social.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Daniel Mbedobe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
