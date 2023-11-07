import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Marquee from "react-fast-marquee";
// Image assets
import BellIcon from "@/assets/Bell.svg";
import CohortsDashboardImage from "@/assets/CohortsDashboard.svg";
import EyeIcon from "@/assets/Eye.svg";
import WidgetBellIcon from "@/assets/WidgetBell.svg";
import BarChartIcon from "@/assets/BarChart.svg";
import ClockIcon from "@/assets/Clock.svg";

export const DashboardNotifications = () => {
  return (
    <>
      <NotificationsPreview />

      <DashboardPreview />
    </>
  );
};

const NotificationsPreview = () => {
  return (
    <>
      <div className="relative w-full grid-cols-2 overflow-hidden mb-8 md:grid md:translate-x-[5%]">
        <div className="flex flex-col justify-center w-full h-full gap-3 p-5">
          <Image
            src={BellIcon}
            width={80}
            height={80}
            alt="Cohorts Dashboard"
            className="w-9 h-9"
          />

          <h2 className="text-3xl font-medium text-white">
            Get notified when a highly correlated whale makes a move
          </h2>

          <p className="text-gray-200 ">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>

        <div className="flex flex-row gap-10 overflow-scroll shrink-0 grow">
          <Marquee
            speed={30}
            pauseOnHover={true}
            className="rounded-l-lg"
            autoFill="true"
          >
            <div className="flex flex-col justify-between gap-3 p-4 mx-3 bg-white border border-red-400 h-52 rounded-xl w-72">
              <div className="flex flex-row items-start justify-between">
                <Image
                  src={WidgetBellIcon}
                  width={80}
                  height={80}
                  alt="Cohorts Dashboard"
                  className="w-9 h-9"
                />

                <Button variant="ghost" size="sm">
                  Save
                </Button>
              </div>

              <p className="w-full">
                We&apos;ll be sending notifications to you here
              </p>

              <Input type="email" placeholder="hello@gmail.com" />
            </div>

            <div className="flex flex-col justify-between gap-3 p-4 mx-3 bg-white border border-red-400 h-52 rounded-xl w-72">
              <div className="flex flex-row items-start justify-between">
                <Image
                  src={BarChartIcon}
                  width={80}
                  height={80}
                  alt="Cohorts Dashboard"
                  className="w-9 h-9"
                />

                <input
                  type="checkbox"
                  name="bell"
                  checked={true}
                  className="outline-none w-[14px] h-[14px] rounded scale-125"
                />
              </div>

              <p className="w-full">
                Notify me when any wallets move more than
              </p>

              <div className="flex">
                <span className="p-1 text-xs flex items-center font-medium rounded-[2.8px] text-gray-800 bg-gray-200">
                  <span>$1,000.00 </span>
                  <Image
                    src="/assets/Triangle.svg"
                    alt="dropdown"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 p-4 mx-3 bg-white border border-red-400 h-52 rounded-xl w-72">
              <div className="flex flex-row items-start justify-between">
                <Image
                  src={ClockIcon}
                  width={80}
                  height={80}
                  alt="Cohorts Dashboard"
                  className="w-9 h-9"
                />

                <input
                  type="checkbox"
                  name="bell"
                  checked={true}
                  className="outline-none w-[14px] h-[14px] rounded scale-125"
                />
              </div>

              <p className="w-full">Notify me when any wallet dormant for</p>

              <div className="flex">
                <span className="p-1 text-xs flex items-center font-medium rounded-[2.8px] text-gray-800 bg-gray-200">
                  <span> &gt; 30 days</span>
                  <Image
                    src="/assets/Triangle.svg"
                    alt="dropdown"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </span>
              </div>

              <p className="w-full">becomes active</p>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

const DashboardPreview = () => {
  return (
    <>
      <div className="w-11/12 grid-cols-2 mx-auto overflow-hidden md:grid">
        <Image
          src={CohortsDashboardImage}
          width={500}
          height={500}
          alt="Cohorts Dashboard"
          className="w-full h-auto scale-125"
        />

        <div className="flex flex-col items-end justify-start w-full h-full gap-6 py-8 tracking-wide">
          <Image
            src={EyeIcon}
            width={80}
            height={80}
            alt="Cohorts Dashboard"
            className="w-9 h-9"
          />

          <h2 className="text-3xl font-medium text-right text-white">
            Watch what the whales are doing
          </h2>

          <p className="text-right text-gray-200">
            All whales are not equal. Know exactly what whales imapcting YOUR
            portfolio are doing.
          </p>
        </div>
      </div>
    </>
  );
};
