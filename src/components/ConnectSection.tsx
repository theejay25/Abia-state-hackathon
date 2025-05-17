import StepCard from "./StepCard"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ConnectSection = () => {
  return (
    <>
        <div className="connect-section-div">
            <div className="w-full h-[12vh] flex-col flex justify-between items-center">
                <p className="title-text text-gray-200 text-xl">connect</p>
                <p className="title-text text-white text-4xl">get in touch</p>
                <p className="text-white">We are here to assist with your inquires</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 h-[37vh] lg:grid-cols-4 lg:mt-18 lg:gap-1">

                <StepCard className="resolution-div bg-transparent h-[17vh] w-[100%] flex flex-col items-center">
                    <MdOutlineMailOutline className="h-[10vh] w-[10vw] text-white" />
                    <p className="title-text text-white">email</p>
                    <p className="text-[12px] text-white text-center">Reach out to us via email for support</p>
                    <p className="text-[12px] text-white text-center">support@citizencomplaint.gov</p>
                </StepCard>

                <StepCard className="resolution-div bg-transparent h-[17vh] w-[100%] flex flex-col items-center">
                    <FaPhoneAlt className="h-[10vh] w-[10vw] text-white" />
                    <p className="title-text text-white">email</p>
                    <p className="text-[12px] text-white text-center">Reach out to us via email for support</p>
                    <p className="text-[12px] text-white text-center">support@citizencomplaint.gov</p>
                </StepCard>

                <StepCard className="resolution-div bg-transparent h-[17vh] w-[100%] flex flex-col items-center">
                    <IoChatboxEllipsesOutline className="h-[10vh] w-[10vw] text-white" />
                    <p className="title-text text-white">phone</p>
                    <p className="text-[12px] text-white text-center">+234 7089293913</p>
                </StepCard>

                <StepCard className="resolution-div bg-transparent h-[17vh] w-[100%] flex flex-col items-center">
                    <CiLocationOn className="h-[10vh] w-[10vw] text-white" />
                    <p className="title-text text-white">office</p>
                    <p className="text-[12px] text-white text-center">visit us at our main office for <br /> in-person support</p>
                    <p className="text-[12px] text-white text-center">No.10 Calabar Street</p>
                </StepCard>

            </div>
        </div>
    </>
  )
}

export default ConnectSection