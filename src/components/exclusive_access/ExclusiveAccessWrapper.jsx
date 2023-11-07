import { cn } from "@/lib/utils";

export const ExclusiveAccessWrapper = ({ children, className }) => {
  return (
    <>
      <section
        className={cn(
          "w-full relative min-h-screen bg-transparent overflow-x-hidden overflow-y-scroll",
          className
        )}
      >
        <div className="flex flex-col w-full min-h-screen p-1 py-10 overflow-x-hidden overflow-y-scroll md:pr-0 md:gap-6">
          {children}
        </div>

        {/* Background SVG Image Gradient */}
        <div className="fixed inset-0 bg-black lg:absolute -z-20 gradient_bg3 "></div>

        {/* CSS Gragient BG */}
        {/* <div className="fixed inset-0 -translate-x-1/3  w-[150vw]  -z-20 gradient_bg "></div> */}
      </section>
    </>
  );
};
