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
        <div className="flex flex-col w-full min-h-screen p-1 overflow-x-hidden overflow-y-scroll py-14 md:gap-10">
          {children}
        </div>

        <div className="fixed inset-0 -translate-x-1/3  w-[150vw]  -z-20 gradient_bg "></div>
      </section>
    </>
  );
};
