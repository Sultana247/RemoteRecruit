import { FaEdit } from 'react-icons/fa';
import bungieJob from '../../assets/bungiejob.png'
import Categories from '../../components/Categories';
const Home = () => {
    return (
        <div className="px-10 w-full">
            <h3 className="text-2xl poppins-semibold font-medium mt-10">Welcome Bungie</h3>
            <h1 className="poppins-semibold font-semibold text-5xl">Job Applicants</h1>


            {/* your job post */}
            <div className="mt-3 py-5.75 bg-[#EDF6FABF] rounded-[14px] w-full flex justify-between items-center p-6">
                <div className='inter-font flex gap-8'>
                    <img src={bungieJob} alt="Job Post" className="w-16 h-16" />
                    <div>
                        <p className='font-medium text-[13px]'>Your Job Post</p>
                        <h4 className='font-semibold text-[18px] w-[330px]'>Senior UI/UX Designer needed for ongoing support</h4>
                    </div>

                </div>
                <FaEdit className='w-6.25 h-6.25 text-[#52B4DA] mr-15'></FaEdit>
            </div>

            {/* key categories */}
            <div className='mt-3'>
                <p className='text-[#1E3E85] manrope-font text-[12px] font-bold'>Key Categories:</p>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;