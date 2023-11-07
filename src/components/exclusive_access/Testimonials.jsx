import { TestimonialsData } from "@/utils/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// Image assets
import LochIcon from "@/assets/icon.svg";
import Reveal from "../animations/Reveal";

export const Testimonial = ({ name, position, content, className }) => {
  return (
    <>
      <div className="flex flex-col h-40 max-w-sm p-3 mx-2 bg-white rounded-xl md:p-5 w-96 ">
        <div className="flex flex-row items-baseline gap-2 mb-2">
          <span className="inline-flex font-semibold">{name}</span>
          <span className="inline-flex text-sm text-gray-500">{position}</span>
        </div>

        <p className="leading-5">“{content}”</p>
      </div>
    </>
  );
};

export const Testimonials = ({ children, className }) => {
  return (
    <>
      <Reveal from="right">
        <div className="flex flex-col w-11/12 gap-5 mx-auto mb-6 tracking-wide text-right text-white">
          <h2 className="w-full px-3 text-2xl">Testimonials</h2>

          <hr className="w-full h-px bg-white" />
        </div>
      </Reveal>

      <Reveal from="left">
        <div className="flex flex-col overflow-hidden">
          <div className="grid w-full grid-cols-5">
            <div className="hidden w-full h-40 md:flex">
              <Image
                src={LochIcon}
                width={80}
                height={80}
                alt="Loch Icon"
                className="w-16 h-16 mx-auto mt-24"
              />
            </div>

            <div className="relative flex w-auto col-span-5 gap-5 overflow-x-scroll md:col-span-4 shrink-0">
              <Marquee
                speed={30}
                pauseOnHover={true}
                className="rounded-l-lg shadow-inner h-fit"
                autoFill="true"
              >
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
              </Marquee>
            </div>
          </div>

          <Image
            src={LochIcon}
            width={80}
            height={80}
            alt="Loch Icon"
            className="w-16 h-16 mx-auto mt-10 md:hidden"
          />
        </div>
      </Reveal>
    </>
  );
};
