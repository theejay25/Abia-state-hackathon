import Button from './Button';
import { FaAngleRight } from "react-icons/fa";
import StepCard from './StepCard';



const PlanSection = () => {
  return (
    <>
        <div className="plan-section-div">
            <div className="w-full h-[20vh] flex flex-col justify-between lg:mt-[50%] ">
                
                <p className="title-text text-gray-500 text-2xl">process</p>
                <p className="title-text text-black text-3xl ">understanding the reporting process</p>

                     <div className="w-full justify-start gap-9 flex lg:w-[100%]">

                    <Button className="learn-more-btn  text-white bg-red-800 w-[31vw] lg:w-[18vw]">
                        learn more
                    </Button>
                    <Button className="report-btn flex flex-row justify-evenly items-center">
                        track <FaAngleRight className='mt-0.5'/>
                    </Button>

                </div>
            </div>

            <div className='mt-6 w-full h-[200vh] flex flex-col gap-6 lg:h-[330vh]'>
                <StepCard className='stepcard-div' title='issue reported' steps='step 1'>
                    <p>your complaint has successfully been submitted. You will receive a confirmation shortly</p>
                        <div className="w-full justify-start gap-9 flex lg:w-[100%]">

                    <Button className="learn-more-btn bg-white ring-1 ring-red-800 w-[31vw] lg:w-[18vw]">
                        learn more
                    </Button>
                    <Button className="update-btn flex flex-row justify-evenly items-center">
                        update <FaAngleRight className='mt-0.5'/>
                    </Button>
                </div>
                <img src="" alt="image placeholder" className='w-full bg-gray-300 h-[25vh] rounded-lg mt-1 lg:h-[40vh]' />
                </StepCard>

                <StepCard className='stepcard-div' title='in progress' steps='step 2'>
                    <p>Your issue is currently being handled by our team. We appreciate your patience.</p>
                        <div className="w-full justify-start gap-9 flex lg:w-[100%]">

                    <Button className="learn-more-btn bg-white ring-1 ring-red-800 w-[31vw] lg:w-[18vw]">
                        follow up
                    </Button>
                    <Button className="update-btn flex flex-row justify-evenly items-center">
                        notify <FaAngleRight className='mt-0.5'/>
                    </Button>
                </div>
                <img src="" alt="image placeholder" className='w-full bg-gray-300 h-[25vh] rounded-lg mt-1 lg:h-[40vh]' />
                </StepCard>

                <StepCard className='stepcard-div' title='resolved' steps='step 3'>
                    <p>Your complaint has been resolved. Thank you for bringing this to our attention</p>
                        <div className="w-full justify-start gap-9 flex lg:w-[100%]">

                    <Button className="learn-more-btn bg-white ring-1 ring-red-800 w-[31vw] lg:w-[18vw]">
                        feedback
                    </Button>
                    <Button className="update-btn flex flex-row justify-evenly items-center">
                        close <FaAngleRight className='mt-0.5'/>
                    </Button>
                </div>
                <img src="" alt="image placeholder" className='w-full bg-gray-300 h-[25vh] rounded-lg mt-1 lg:h-[40vh]' />
                </StepCard>

                <StepCard className='stepcard-div' title='follow up' steps='step 4'>
                    <p>We hope you are satisfied with the resolution. Your feedback is important to us!</p>
                        <div className="w-full justify-start gap-9 flex lg:w-[100%]">

                    <Button className="learn-more-btn bg-white ring-1 ring-red-800 w-[31vw] lg:w-[18vw]">
                        submit
                    </Button>
                    <Button className="update-btn flex flex-row justify-evenly items-center">
                        close <FaAngleRight className='mt-0.5'/>
                    </Button>
                </div>
                <img src="" alt="image placeholder" className='w-full bg-gray-300 h-[25vh] rounded-lg mt-1 lg:h-[40vh]' />
                </StepCard>
            </div>
        </div>    
    </>
  )
}

export default PlanSection