import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-primary text-black p-8 relative">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div>
          <a
            href="https://www.instagram.com/carlo.messere/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/Images/instagramWhite.png"
              alt="Instagram"
              width={40}
              height={40}
              className="rounded-lg fill-current text-white"
            />
          </a>
        </div>
        <div className="">
          <p className=" text-base-content text-lg leading-tight text-white">
            Journey to Fitness & Co.
          </p>
          <p className=" text-base-content text-lg leading-tight text-white">
            Making people fit since 2010
          </p>
        </div>
        <p className="text-sm text-white">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
}
