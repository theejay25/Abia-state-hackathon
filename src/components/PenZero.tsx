import Button from './Button';

const PenZero = () => {
  return (
    <>
    <div className="pen-zero-div">
        <div className='lg:h-full lg:flex lg:flex-col gap-5 lg:mt-20'>
        <p className="title-text text-2xl w-[250px]">stay informed on community issues</p>
        <p>Join our newsletter to receive timely updates on reported issues and their resolutions. Stay enngaged and informed about changesin your community</p>
        </div>
        <form action="" className="w-full h-[7vh] py-2 flex justify-between mt-2 lg:mt-30">
            <input type="text" name="" id="" placeholder="Enter your Email" className="input"/>

               <Button className="learn-more-btn  text-white bg-red-800 w-[20vw] lg:w-[18vw]">
                        sign up
                </Button>
        </form>
    </div>
    </>
  )
}

export default PenZero