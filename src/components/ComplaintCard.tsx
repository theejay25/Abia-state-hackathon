
interface complaincardProps {
    children?: React.ReactNode;
}


const ComplaintCard = ({ children }: complaincardProps) => {
  return (
    <>
    <div className="complaintcard-div">
        <img src="" alt="image for card" className="bg-red-400 h-[50%] w-full"/>
        <div className="px-2 h-[50%] bg-gray-100 flex flex-col justify-around items-start">
            {children}
        </div>
    </div>
    </>
  )
}

export default ComplaintCard