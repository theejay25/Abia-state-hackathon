import StepCard from "./StepCard"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiStepsFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import Button from './Button';
import { FaAngleRight } from "react-icons/fa";

const ResolutionSection = () => {
  return (
    <>
        <div className="resolution-section-div">
            <h1 className="title-text text-white text-2xl lg:w-[650px]">understanding the complaint reporting and resolution process made simple</h1>
                
                <div className=" w-full flex flex-col lg:flex-row lg:justify-around">
                <StepCard
                className="resolutionCards"
                >

                <IoPhonePortraitOutline className="h-[38vh] w-[38vw] lg:h-[14vh] lg:w-[14vw]" />

                <p className="title-text text-2xl lg:text-xl">your voice matters: report issues effectively and efficiently</p>
                <p className="title-text text-lg lg:text-[12px]">our platform streamlines the process of reporting and tracking complaints</p>
                 <Button className="update-btn flex flex-row justify-evenly items-center">
                        learn more <FaAngleRight className='mt-0.5'/>
                </Button>
                
            </StepCard>

            <StepCard
                className="resolutionCards"
                >

                <PiStepsFill className="h-[38vh] w-[38vw] lg:h-[14vh] lg:w-[14vw]" />

                <p className="title-text text-2xl lg:text-xl">step-by-step guidance throungh reporting and resolution</p>
                <p className="title-text text-lg lg:text-[12px]">follow your complaint from report to resolution using our status tracker</p>

                  <Button className="update-btn flex flex-row justify-evenly items-center">
                        sign up <FaAngleRight className='mt-0.5'/>
                </Button>
                
            </StepCard>

            <StepCard
                className="resolutionCards"
                >

                <FaLanguage className="h-[38vh] w-[38vw] lg:h-[14vh] lg:w-[14vw]" />

                <p className="title-text text-2xl lg:text-xl">multi languagev support for all users </p>
                <p className="title-text text-lg lg:text-[12px] lg:w-[300px] lg:ml-[-19%]">access our services in multiple languages for all users</p>

                  <Button className="update-btn flex flex-row justify-evenly items-center">
                        get start <FaAngleRight className='mt-0.5'/>
                </Button>
                
            </StepCard>
                </div>

        </div>
    </>
  )
}

export default ResolutionSection