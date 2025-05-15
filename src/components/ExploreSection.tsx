import Button from "./Button"
import ComplaintCard from "./ComplaintCard"
import { FaAngleRight } from "react-icons/fa";

const ExploreSection = () => {
  return (
    <>
    <div className="explore-div">
        <h1 className="title-text capitalize text-3xl text-black lg:w-[540px]">Experience different ways for reporting your current problems.</h1>        
        
        <div className="card-holster-div">

            <ComplaintCard>
                <p className="title-text capitalize">your voice matters: report issues in your community</p>
                <p>Our platform allows you to report complaints in Infastructure, Health, and Security </p> 
                <Button className="learn-more-btn text-left w-32 items-center  flex flex-row justify-between lg:w-[40%">
                    learn more   <FaAngleRight className="mt-1" /> 
                </Button>       
            </ComplaintCard>

            <ComplaintCard>
                <p className="title-text capitalize">Infrasctucture: report issues affectin roads, bridges, and public spaces</p>
                <p>Help us improve your community's infrastructure by submitting your concern</p> 
                <Button className="learn-more-btn text-left w-32 items-center  flex flex-row justify-between lg:w-[40%]">
                    learn more   <FaAngleRight className="mt-1" /> 
                </Button>       
            </ComplaintCard>

            <ComplaintCard>
                <p className="title-text capitalize">Health: share concerns about local healthcare service and facilities</p>
                <p>Your feedback can help enhance the quality of health services in your area</p> 
                <Button className="learn-more-btn text-left w-32 items-center flex flex-row justify-between lg:w-[40%]">
                    learn more   <FaAngleRight className="mt-1" /> 
                </Button>       
            </ComplaintCard>
            
        </div>

    </div>
    </>
  )
}

export default ExploreSection