import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="lg:px-[72px] mt-[50px] bg-[#1D0207]">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div
          className="flex flex-col justify-center items-center text-[#FFFFFF99] border-r"
          style={{
            borderImage:
              "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            height: "180px",
          }}
        >
          <div className="flex items-center gap-1 mb-3">
            <Phone className="size-5 text-white" />
            <p className="text-base text-white font-semibold">Contact</p>
          </div>
          <p className="md:text-base leading-6 text-sm">Email Address: @venspacework@gmail.com</p>
        </div>
        <div
          className="flex flex-col justify-center items-center text-[#FFFFFF99] border-r"
          style={{
            borderImage:
              "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            height: "180px",
          }}
        >
          <div className="flex items-center gap-1 mb-3">
            <Image
              src="/lock.svg"
              alt="secure payment"
              width={20}
              height={20}
            />
            <p className="text-base text-white font-semibold">Secure Payment</p>
          </div>
          <Image
            src="/paystack.png"
            alt="secure payment"
            width={31}
            height={30.49}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-[#FFFFFF99]">
          <div className="flex items-center gap-1 mb-3">
            <Image
              src="/location.png"
              alt="social media"
              width={20}
              height={20}
            />
            <p className="text-base text-white font-semibold">
              Find us on social media
            </p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <Link href="/">
              <div className="flex justify-center items-center w-10 h-10 border-[1.67px] border-[#FFFFFF40] rounded-full hover:border-white">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={14}
                  height={14}
                />
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center items-center w-10 h-10 border-[1.67px] border-[#FFFFFF40] rounded-full hover:border-white">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={8}
                  height={14}
                />
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center items-center w-10 h-10 border-[1.67px] border-[#FFFFFF40] rounded-full hover:border-white">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={14}
                  height={14}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/line.png"
        alt="line"
        width={1440}
        height={0}
        className="lg:-mt-5 mt-10"
      />
      <div className="lg:p-[72px] p-5 text-white">
        <div className="flex lg:flex-row flex-col justify-start gap-[72px]">
          <div>
            <h4 className="text-[27px] font-bold">VENSPACE</h4>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 w-full lg:gap-[80px] gap-20">
            <div className="space-y-6 text-base font-medium leading-6">
              <p>Explore</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Location
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                  Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-base font-medium leading-6">
              <p>Host</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    List Your Space
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Hosting Responsibly
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-base font-medium leading-6">
              <p>Areas</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Ikeja
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Ikoyi
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Victoria Island
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Yaba
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Lekki
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Gbagada
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Ogudu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-base font-medium leading-6">
              <p>Support</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Trust and Safety
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#FFFFFF99] hover:text-white">
                    Report a Listing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-sm leading-5 lg:px-[72px] px-5 py-[50px]">
          © 2024 VenSpace. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
