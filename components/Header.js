import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

const Header = ({ activeStep }) => {
  const progressPercentage = ((activeStep - 1) / 4) * 100;
  return (
    <header className="w-full h-12 flex px-5 py-2">
      <div className="flex h-full w-full items-center justify-center">
        <Link href="/" className="flex gap-2">
          <BriefcaseBusiness color="#0B6BBF" />
          <h2 className="font-semibold text-lg">MyJob</h2>
        </Link>
        <span className="grow"></span>
        <span className="flex flex-col ml-auto w-56 h-full gap-1">
          <span className="w-full flex justify-between text-[0.6rem] px-1">
            <span className="text-gray-400">
              Setup Progress
            </span>
            <span className="text-blue-500">
              {progressPercentage !== 0 ? `${progressPercentage}% Completed` : ''}
            </span>
          </span>
          <span className="w-full bg-[#E6EFF9] h-2 rounded-sm">
            <span className="h-full bg-blue-500 block rounded-sm"
              style={{ width: `${progressPercentage}%` }}>
            </span>
          </span>
        </span>
      </div>
    </header>
  )
}

export default Header