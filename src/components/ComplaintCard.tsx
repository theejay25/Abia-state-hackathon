import pupils from '../assets/images/pupils.png'


interface complaincardProps {
    children?: React.ReactNode;
    image?: string;
}


const ComplaintCard = ({ children, image }: complaincardProps) => {
  return (
    <>
    <div className="complaintcard-div">
      <div className='h-[50%] bg-blue-50'>
          <img src={image} alt="image for card" className="bg-red-400 h-full w-full"/>
      </div>
        <div className="px-2 h-[50%] bg-gray-100 flex flex-col justify-around items-start">
            {children}
        </div>
    </div>
    </>
  )
}

export default ComplaintCard