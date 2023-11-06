import Image from "next/image";

export const DashboardNotifications = () => {
  return (
    <>
      <NotificationsPreview />

      <DashboardPreview />
    </>
  )
}

const NotificationsPreview = () => {
  return (
    <>
    <div className="relative w-full grid-cols-2 overflow-hidden border border-yellow-300 md:grid md:translate-x-[5%]">
      <div className="flex flex-col justify-center w-full h-full gap-3 p-5">
        <Image src="/assets/Bell.svg" width={80} height={80} alt="Cohorts Dashboard" className="w-9 h-9" />

        <h3 className="text-3xl font-medium text-white">
          Get notified when a highly correlated whale makes a move
        </h3>

        <p className="text-gray-200 ">
          Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      <div className="rounded-xl bg-white/10"></div>
    </div>
    </>
  )
}

const DashboardPreview = () => {
  return (
    <>
    <div className="w-11/12 grid-cols-2 mx-auto overflow-hidden md:grid">
      <Image src="/assets/CohortsDashboard.svg" width={666} height={500} alt="Cohorts Dashboard" className="w-full h-auto scale-125" />

      <div className="flex flex-col items-end justify-center w-full h-full gap-6 tracking-wide">
        <Image src="/assets/Eye.svg" width={80} height={80} alt="Cohorts Dashboard" className="w-9 h-9" />

        <h3 className="text-3xl font-medium text-right text-white">
          Watch what the whales are doing
        </h3>

        <p className="text-right text-gray-200">
          All whales are not equal. Know exactly what whales imapcting YOUR portfolio are doing.
        </p>
      </div>
    </div>
    </>
  )
}
