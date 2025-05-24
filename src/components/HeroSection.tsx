import Button from "./Button"
import SideText from "./SideText"
import cover from '../assets/images/HeroBg2.jpeg'

const HeroSection = () => {
  return (
    <>
        <div className="hero-section inline-flex">
            <SideText className='side-div z-50'>
                <p className="title-text text-4xl text-white">Your concerns count: share them without effort</p>
                <p className="subtitle-text">Welcome to our Citizen complaint Web App, where your concerns about infastructure, health, and security can be addressed swiftly.
                     <br /> Join us in making your community safer and more efficient by reporting issues today! 
                </p>

                <div className="w-[70%] justify-around flex lg:w-[100%]">

                    <Button className="report-btn">
                        report
                    </Button>
                    <Button className="learn-more-btn  text-white bg-red-800 ring-2 ring-white w-[28vw] lg:w-[18vw]">
                        learn more
                    </Button>

                </div>
            </SideText>

            <div className="h-full w-full z-0 absolute lg:relative lg:w-[50%]">
                <img src={cover} alt="" className=" h-full lg:w-full lg:h-full" />
            </div>
        </div>
    </>
  )
}

export default HeroSection