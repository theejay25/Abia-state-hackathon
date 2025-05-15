import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='bg-[#404040] h-[100vh] w-[100vw] flex flex-col gap-10 justify-center items-center text-3xl text-white font-bold'>
        404 Page does not exist

        <Link className='text-blue-400' to= '/'>Go back to home</Link>
    </div>
  )
}

export default ErrorPage