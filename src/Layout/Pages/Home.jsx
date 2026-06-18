import { FaCheckSquare, FaCrown, FaEdit, FaQuestionCircle } from 'react-icons/fa';
import bungieJob from '../../assets/bungiejob.png'
import Categories from '../../components/Categories';
import { IoIosArrowDown } from 'react-icons/io';
import Applicants from '../../components/Applicants';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
const Home = () => {
    return (
        <div className="pl-20 pr-10 w-full bg-base-200">
            <h3 className="text-2xl poppins-semibold font-medium mt-10">Welcome Bungie</h3>
            <h1 className="poppins-semibold font-semibold text-5xl">Job Applicants</h1>


            {/* your job post */}
            <div className="mt-3 py-5.75 bg-[#EDF6FABF] rounded-[14px] w-full flex justify-between items-center p-3 md:p-6">
                <div className='inter-font flex gap-3 md:gap-8'>
                    <img src={bungieJob} alt="Job Post" className="w-16 h-16" />
                    <div>
                        <p className='font-medium text-[13px]'>Your Job Post</p>
                        <h4 className='font-semibold text-[12px] md:text-[18px] w-[200px] md:w-[330px]'>Senior UI/UX Designer needed for ongoing support</h4>
                    </div>

                </div>
                <FaEdit className='w-6.25 h-6.25 text-[#52B4DA] md:mr-15'></FaEdit>
            </div>

            {/* key categories */}
            <div className='mt-3'>
                <p className='text-[#1E3E85] manrope-font text-[12px] font-bold'>Key Categories:</p>
                <Categories></Categories>
            </div>


            <div className='flex gap-12  mt-5'>
                {/* applications */}
                <div className='w-3/4 rounded-xl shadow-sm bg-white px-7 py-5'>

                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center  inter-font text-[14px] gap-2'>
                            <p className='text-[#808191]'>View</p>
                            <button className='flex items-center rounded-lg bg-[#E4E4E44D] px-4.75 py-2'><span className='text-[#1E3E85]'>25</span> <IoIosArrowDown className='text-[#11142D]'></IoIosArrowDown></button>
                        </div>
                        <div className='flex justify-center items-center  inter-font text-[14px] gap-2'>
                            <p className='text-[#808191]'>Sort by</p>
                            <button className='flex items-center  gap-8 rounded-lg bg-[#E4E4E44D] px-4.75 py-2'><span className='text-[#1E3E85]'>All</span> <IoIosArrowDown className='text-[#11142D]'></IoIosArrowDown></button>
                        </div>


                    </div>
                    {/* applicants info */}
                    <div className='mt-8 '>
                        <Applicants></Applicants>
                    </div>
                    {/* pagination */}
                    <div className='w-full'>
                        <div className="join gap-2 flex justify-center">
                            <button className="join-item btn rounded-[12px]"><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></button>
                            <button className="join-item btn rounded-[12px]">1</button>
                            <button className="join-item btn rounded-[12px] bg-[#52B4DA] text-white ">2</button>
                            <button className="join-item rounded-[12px] btn">3</button>
                            <button className="join-item rounded-[12px] btn">...</button>
                            <button className="join-item rounded-[12px] btn">7</button>
                            <button className="join-item btn rounded-[12px]"><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></button>
                        </div>
                    </div>
                </div>
                {/* filter */}
                <div className='w-1/4 rounded-3xl shadow-sm bg-white px-7 py-10'>
                    <h3 className='poppins-semibold text-[18px] text-[#11142D]'>Filter</h3>

                    <div className='flex justify-between mb-5 mt-2'>
                        <p className='inter-font font-bold text-[14px]'>Pay:</p>
                        <IoIosArrowDown className='w-5 h-5'></IoIosArrowDown>
                    </div>
                    <div className='flex gap-2'>
                        <div className='border-2 border-[#E1E1E1] rounded-[4px] w-5 h-5'>
                        </div>
                        <p className='inter-font text-[13px] font-normal'>Hourly</p>
                    </div>
                    <div className='w-full bg-[#E4E4E4] mt-5 h-12 rounded-lg'>
                        <input className=''></input>
                    </div>
                    <p className='mt-2 text-[#B2B3BD]'>Max Hourly Rate</p>
                    {/* sort pay by */}
                    <div className='mt-5'>
                        <p className='inter-font font-bold text-[14px]'>Sort Pay By:</p>
                        <div className='w-full bg-[#E4E4E4] mt-4 h-12 rounded-lg flex justify-end items-center p-5'>
                            <input className=''></input>
                            <IoIosArrowDown className='w-5 h-5'></IoIosArrowDown>
                        </div>
                    </div>
                    {/* annual salary */}
                    {/* sort pay by */}
                    <div className='mt-5'>
                        <div className='flex items-center gap-3'>
                            <FaCheckSquare className='w-5 h-5 text-[#1E3E85]'></FaCheckSquare>
                            <p className='inter-font text-[13px]'>Annual Salary</p>
                        </div>
                        <div className='w-full bg-[#E4E4E440] mt-4 h-14 rounded-lg'>
                            <input className=''></input>
                        </div>
                        <p className='mt-2 text-[#B2B3BD]'>Max Annual Salary</p>

                        <div className='flex items-center gap-3 mt-6 mb-6'>
                            <FaCheckSquare className='w-5 h-5 text-[#1E3E85]'></FaCheckSquare>
                            <p className='inter-font text-[13px]'>Both Hourly & Salary</p>
                        </div>
                        <div className='flex justify-between mb-5 mt-2'>
                            <p className='inter-font font-bold text-[14px]'>Sort Salary By:</p>
                            <IoIosArrowDown className='w-5 h-5'></IoIosArrowDown>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <div className='border-2 border-[#E1E1E1] rounded-[4px] w-5 h-5'>
                                </div>
                                <p className='inter-font text-[13px] font-normal'>Ascending</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='border-2 border-[#E1E1E1] rounded-[4px] w-5 h-5'>
                                </div>
                                <p className='inter-font text-[13px] font-normal'>Descending</p>
                            </div>
                        </div>
                        {/* language */}
                        <div className='mt-10 mb-10'>
                            <p className='inter-font font-bold text-[14px]'>Language:</p>
                            <div className='w-full bg-[#E4E4E440] mt-4 h-16 rounded-lg flex justify-end items-center p-5'>
                                <input className=''></input>
                                <IoIosArrowDown className='w-5 h-5'></IoIosArrowDown>
                            </div>
                        </div>
                        {/* countries */}
                        <div className=' mb-10'>
                            <p className='inter-font font-bold text-[14px]'>Countries:</p>
                            <div className='w-full bg-[#E4E4E440] mt-4 h-16 rounded-lg flex items-center p-5'>
                                <div className='bg-white p-2 rounded-[7px] flex items-center justify-center text-[12px] font-semibold'>
                                    <p>United States <button><IoClose></IoClose></button></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* premium access */}
                    
                    <div className=" rounded-xl p-6">
                        {/* Premium Text */}
                        <h3 className="text-[#F4B400] text-[16px] font-medium">
                            Upgrade to Premium to Access
                        </h3>

                        <div className="border-b border-gray-400 mt-2 mb-8"></div>

                        {/* AI Ranking */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <span className="text-[#1E2139] font-semibold text-[18px]">
                                    AI Ranking
                                </span>
                                <FaCrown className="text-[#F4B400] text-lg" />
                            </div>

                            {/* Toggle */}
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" disabled className="sr-only peer" />
                                <div className="w-12 h-7 bg-[#E8E8E8] rounded-full peer"></div>
                                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow"></div>
                            </label>
                        </div>

                        {/* English Proficiency */}
                        <div className="mb-10">
                            <h4 className="text-[#1E2139] font-bold text-[18px] mb-4">
                                English Proficiency
                            </h4>

                            <div className="relative">
                                <div className="h-2 rounded-full bg-[#D6DBE8]"></div>

                                <div className="absolute top-0 left-0 h-2 w-[60%] rounded-full bg-[#5B74B7]"></div>

                                <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#5B74B7] rounded-full border-4 border-white shadow"></div>

                                <span className="absolute -right-1 -top-2 text-[12px] font-semibold text-[#1E2139]">
                                    100%
                                </span>
                            </div>
                        </div>

                        {/* Premium Button */}
                        <button className="w-full bg-[#F8C524] hover:bg-[#F0BB10] text-[#1E2139] font-bold text-[18px] py-3 rounded-2xl mb-10 transition">
                            Customize Ranking Filter
                        </button>

                        {/* Experience Match */}
                        <div className="mb-16">
                            <h4 className="text-[#1E2139] font-bold text-[18px] mb-4">
                                Experience Match
                            </h4>

                            <div className="relative">
                                <div className="h-2 rounded-full bg-[#D6DBE8]"></div>

                                <div className="absolute top-0 left-0 h-2 w-[55%] rounded-full bg-[#5B74B7]"></div>

                                <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#5B74B7] rounded-full border-4 border-white shadow"></div>

                                <span className="absolute -right-1 -top-2 text-[12px] font-semibold text-[#1E2139]">
                                    100%
                                </span>
                            </div>
                        </div>

                        {/* Why AI Ranking */}
                        <button className="flex items-center gap-2 text-[#F4B400] text-[16px] font-medium mb-16">
                            Why Ai Ranking
                            <FaQuestionCircle className="text-[#F4B400]" />
                        </button>

                        {/* Reset */}
                        <button className="text-[#E53935] font-bold text-[18px]">
                            Reset all filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;