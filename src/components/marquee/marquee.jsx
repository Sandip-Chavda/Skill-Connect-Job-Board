import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <div className="flex overflow-hidden space-x-16 group">
      <div className="flex space-x-16 animate-loop-scroll">
        <Image
          src="/microsoft.svg"
          className="max-w-none"
          alt="Image 1"
          height={100}
          width={100}
        />
        <Image
          src="/amazon.svg"
          className="max-w-none"
          alt="Image 2"
          height={100}
          width={100}
        />
        <Image
          src="/accenture.svg"
          className="max-w-none"
          alt="Image 3"
          height={100}
          width={100}
        />
        <Image
          src="/cisco.svg"
          className="max-w-none"
          alt="Image 5"
          height={100}
          width={100}
        />
        <Image
          src="/ey.svg"
          className="max-w-none"
          alt="Image 6"
          height={100}
          width={100}
        />
        <Image
          src="/deisney.svg"
          className="max-w-none"
          alt="Image 7"
          height={100}
          width={100}
        />
        <Image
          src="/airbus.svg"
          className="max-w-none"
          alt="Image 8"
          height={100}
          width={100}
        />
        <Image
          src="/delloite.svg"
          className="max-w-none"
          alt="Image 9"
          height={100}
          width={100}
        />
        <Image
          src="/accenture.svg"
          className="max-w-none"
          alt="Image 3"
          height={100}
          width={100}
        />
      </div>

      <div className="flex space-x-16 animate-loop-scroll " aria-hidden="true">
        <Image
          src="/microsoft.svg"
          className="max-w-none"
          alt="Image 1"
          height={100}
          width={100}
        />
        <Image
          src="/amazon.svg"
          className="max-w-none"
          alt="Image 2"
          height={100}
          width={100}
        />
        <Image
          src="/accenture.svg"
          className="max-w-none"
          alt="Image 3"
          height={100}
          width={100}
        />
        <Image
          src="/cisco.svg"
          className="max-w-none"
          alt="Image 4"
          height={100}
          width={100}
        />
        <Image
          src="/ey.svg"
          className="max-w-none"
          alt="Image 6"
          height={100}
          width={100}
        />
        <Image
          src="/deisney.svg"
          className="max-w-none"
          alt="Image 7"
          height={100}
          width={100}
        />
        <Image
          src="/airbus.svg"
          className="max-w-none"
          alt="Image 8"
          height={100}
          width={100}
        />
        <Image
          src="/delloite.svg"
          className="max-w-none"
          alt="Image 9"
          height={100}
          width={100}
        />
        <Image
          src="/accenture.svg"
          className="max-w-none"
          alt="Image 3"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Marquee;
