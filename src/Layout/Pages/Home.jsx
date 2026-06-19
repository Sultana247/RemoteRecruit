import { FaCheckSquare, FaEdit, FaRegEnvelope, FaUser } from 'react-icons/fa';
import bungieJob from '../../assets/bungiejob.png'
import work from '../../assets/Work.png'
import Categories from '../../components/Categories';
import { IoIosArrowDown } from 'react-icons/io';
import Applicants from '../../components/Applicants';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdWorkOutline } from 'react-icons/md';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';
import PremiumAccess from '../../components/PremiumAccess';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router';
const Home = () => {
    return (
        <div className="p-2 md:pl-20 md:pr-10 w-full bg-base-200">
            {/* back button */}
            <button className='mt-10 px-5 py-3 md:hidden flex gap-2 text-white bg-[#1E3E85] poppins-semibold text-[10px] rounded-[5px]'><FaArrowLeftLong></FaArrowLeftLong>Back</button>
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


            <div className='flex md:gap-12  mt-5'>
                {/* applications */}
                <div className='w-full md:w-3/4 rounded-xl shadow-sm bg-white px-2 md:px-7 py-5'>

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
                    <div className='w-full mt-25 md:mt-3'>
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

                    {/* navbar items for mobile */}
                    <div className='block md:hidden mt-12 w-full'>
                        <div className='flex justify-center text-[#1E3E85]'>
                            <Link to={'/'}><button><GoSearch className='w-5 h-5 mr-8'></GoSearch></button></Link>
                            <Link to={'/'}><button><MdWorkOutline className='w-5 h-5 mr-8 text-[#52B4DA]'></MdWorkOutline></button></Link>
                            <Link to={'/'}><button><IoSettingsOutline className='w-5 h-5  mr-8'></IoSettingsOutline></button></Link>
                            <Link to={'/'}><button><FaRegEnvelope className='w-5 h-5  mr-8'></FaRegEnvelope></button></Link>
                            <Link to={'/'}><button><FaUser className='w-5 h-5  mr-8'></FaUser></button></Link>
                        </div>
                    </div>
                </div>
                {/* filter */}
                <div className='hidden md:block w-1/4 rounded-3xl shadow-sm bg-white px-7 py-10'>
                    <h3 className='poppins-semibold text-[18px] text-[#11142D]'>Filter</h3>

                    <div className='flex justify-between mb-5 mt-5'>
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
                    <div className='mt-8'>
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
                        <div className='flex flex-col lg:flex-row justify-between'>
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

                    <PremiumAccess></PremiumAccess>
                </div>
            </div>
        </div>
    );
};

export default Home;