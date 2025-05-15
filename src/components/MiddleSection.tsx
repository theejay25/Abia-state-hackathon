import Button from './Button'


const MiddleSection = () => {
  return (
    <>
    <div className="middle-section-div">
        <p className="title-text text-white text-4xl w-full lg:px-3">report your issues today</p>
        <p className="w-[90%] ml-[-8%] text-white">Your voice matters start reporting infrastructure, health, and security matters today!</p>

        <div className="w-[100vw] gap-6 px-5 items-start flex lg:w-[100%]">

            <Button className="report-btn">
                report
            </Button>
            <Button className="learn-more-btn  text-white bg-transparent ring-2 ring-white w-[28vw] lg:w-[18vw]">
                learn more
            </Button>

        </div>
    </div>


    </>
  )
}

export default MiddleSection