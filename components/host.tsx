import { Button } from "./ui/button";

export const Host = () => {
  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <div className="bg-[url('/host.png')] bg-cover bg-no-repeat w-full h-full rounded-[20px]">
        <div className="lg:p-[72px] py-10 px-5">
          <p className="max-w-[170px] text-[#FDF1C3] text-base font-bold">
            Earn income as a Venspace Host
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 px-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="text-white md:text-[56px] text-3xl md:leading-[74.09px] font-bold text-center">
              Put your space to work
            </h3>
            <p className="text-white md:text-[22px] text-base font-medium max-w-[503px] text-center leading-[29.11px]">
              Earn extra income by opening your doors to personal and
              professional gatherings in your area.
            </p>
          </div>
          <Button>Become a Host</Button>
        </div>
        <div className="flex justify-end lg:p-[72px] py-10 px-5">
          <p className="text-[#FDF1C3] text-base font-bold">
            Become a Venspace Host
          </p>
        </div>
      </div>
    </div>
  );
};

