import Button from "./Button"
import SideText from "./SideText"

const HeroSection = () => {
  return (
    <>
        <div className="hero-section">
            <SideText className='side-div'>
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
        </div>
    </>
  )
}

export default HeroSection