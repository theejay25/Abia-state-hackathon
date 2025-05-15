import Button from './Button'

interface dropdownProps {
    className?: string;
}


const DropDown = ({className}: dropdownProps) => {
  return (
    <>
        <div className={className}>

            <div className="h-[10%] mt-3">
                    <ul className="ul-div">
                        <li className='list'><a href="#">home</a></li>
                        <li className='list'><a href="#">report issue</a></li>
                        <li className='list'><a href="#">track issue</a></li>
                        <li className='list'><a href="#">chat with xoi</a></li>
                    </ul>
                </div>

                <div className="w-full h-fit flex flex-col items-center mt-48 lg:w-fit lg:mt-[1.6%]">
                    {/* <Button className="header-emergency-btn">
                        emergency
                    </Button> */}
                    <Button className="header-login-btn">
                        log in
                    </Button>
                </div>
        </div>
    </>
  )
}

export default DropDown