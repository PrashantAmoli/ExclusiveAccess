import { TestimonialsData } from "@/utils/constants";
import Image from "next/image";

export const Testimonial = ({ name, position, content, className }) => {
  return (
    <>
      <div className="p-3 bg-white rounded-xl md:p-5 w-96">
        <div className="flex flex-row items-baseline gap-2">
          <span className="block font-semibold">{name}</span>
          <span className="block text-sm text-gray-500">{position}</span>
        </div>

        <p className="">“{content}”</p>
      </div>
    </>
  );
};

export const Testimonials = ({ children, className }) => {
  return (
    <>
      <div className="flex flex-col w-11/12 gap-5 mx-auto text-right text-white">
        <h2 className="w-full px-3 text-2xl">Testimonials</h2>

        <hr className="w-full h-px bg-white" />
      </div>

      <div className="flex flex-row overflow-hidden">
        <div className="grid w-full grid-cols-4">
          <Image
            src="/assets/icon.svg"
            width={80}
            height={80}
            alt="Loch Icon"
            className="w-9 h-9"
          />

          {/* <div className="w-full col-span-3 bg-white/5" /> */}

          <div className="relative flex w-auto col-span-3 gap-5 overflow-x-scroll shrink-0">
            {!TestimonialsData
              ? null
              : TestimonialsData.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    name={testimonial.name}
                    position={testimonial.position}
                    content={testimonial.content}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};
