import Button from "./Button"

const Footer = () => {
  return (
    <>
        <div className="footer-div">
            <div className="w-full  h-[28vh] flex flex-col items-center lg:inline-flex">
                <div className="h-full w-full gap-4  flex flex-col justify-center items-center">
                    <p className="title-text text-white text-3xl font-semibold">subscribe to updates</p>
                    <p className="text-white ">Stay informed bout community issues and solutions.</p>
                </div>
                <div className="h-full w-full gap-4 flex flex-col justify-center items-center">
                    <form action="" className="inline-flex w-full justify-evenly">
                        <input type="text" name="" id="" placeholder="Enter your Email" className="input lg:w-[30vh]" />
                        <Button className="footer-submit-button">
                            submit
                        </Button>
                    </form>
                    <p className="text-white text-center">By subscribing you agree to our Privacy Policies</p>
                </div>
            </div>

            <div className=" w-[90%] h-[30vh] inline-flex ml-5">
                <div className=" h-full w-[45vw] py-9 px-2 lg:w-[20vw]">
                    <h1 className="title-text text-white text-lg">Helpful resources</h1>
                    <ul className="text-gray-100 flex flex-col gap-1 mt-3 text-[13px]">
                        <li className="">Contact us</li>
                        <li className="">Feedback</li>
                        <li className="">Community guidlines</li>
                    </ul>
                </div>
                <div className=" h-full w-[45vw] py-9 px-2 lg:w-[20vw]">
                    <h1 className="title-text text-white text-lg">Stay connected</h1>
                    <ul className="text-gray-100 flex flex-col gap-1 mt-3 text-[13px]">
                        <li className="">Events</li>
                        <li className="">Newsletters</li>
                        <li className="">Blogs</li>
                        <li className="">Follow us</li>
                    </ul>
                </div>
                <div className=" h-full w-[45vw] py-9 px-2 lg:w-[20vw]">
                    <h1 className="title-text text-white text-lg">Contact information</h1>
                    <ul className="text-gray-100 flex flex-col gap-1 mt-3 text-[13px]">
                        <li className="">Email us</li>
                        <li className="">Call us</li>
                        <li className="">Visit us</li>
                        <li className="">Office hours</li>
                    </ul>
                </div>
            </div>

            <p className="text-white ml-35 mt-[-10%] lg:ml-250 lg:mt-[-1%]" > &copy; 2025 voice up. All rights reserved.</p>

        </div>
    </>
  ) 
}

export default Footer