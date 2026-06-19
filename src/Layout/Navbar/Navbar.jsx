import logo from '../../assets/logo.png'
import { GoSearch } from "react-icons/go";
import work from '../../assets/Work.png'
import logoMb from '../../assets/LogoMobile.png'
import { FaRegEnvelope, FaUser } from 'react-icons/fa';
import badge from '../../assets/Frame 37347.png'
import { IoClose, IoHelpCircleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuChevronsUpDown } from 'react-icons/lu';
import { FaCirclePlay } from 'react-icons/fa6';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { NavLink } from 'react-router';


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const navitems =
        <>
            {/* find canditates */}
            <li>
                <NavLink to={'/'} className='hover:bg-[#52B4DA63] flex rounded-xl py-5 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]'>
                <a className='flex'>
                    <GoSearch className='w-5 h-5 mr-2'></GoSearch>
                    Find Candidates
                </a>
                </NavLink>

            </li>
            {/* your job posts */}
            <li>
                <NavLink to={'/'} className="hover:bg-[#52B4DA63] rounded-xl py-5 px-2 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]">
                    <a className='flex'>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={work} alt="Work Icon" className="w-5 h-5" loading='lazy' />
                                <span>Your Job Posts</span>
                            </div>

                            <div className="bg-[#52B4DA63] ml-7 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                8
                            </div>
                        </div>
                    </a>
                </NavLink>

            </li>
            {/* profile */}
            <li>
                <NavLink to={'/'} className='hover:bg-[#52B4DA63] flex rounded-xl py-5 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]'>
                    <a className='flex'>
                        <FaUser className='w-5 h-5  mr-2'></FaUser>
                        Profile
                    </a></NavLink>
            </li>
            {/* Messages */}
            <li>
                <NavLink to={'/'} className="hover:bg-[#52B4DA63] rounded-xl py-5 px-3 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]">
                    <a className='flex'>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaRegEnvelope className='w-5 h-5  mr-2'></FaRegEnvelope>
                                <span>Messages</span>
                            </div>

                            <div className="bg-[#52B4DA63] ml-12 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                23
                            </div>
                        </div>
                    </a>
                    </NavLink>
            </li>
            {/* settings */}
            <li>
                <NavLink to={'/'} className='hover:bg-[#52B4DA63] flex rounded-xl py-5 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]'>
                    <a className='flex'>
                        <IoSettingsOutline className='w-5 h-5  mr-2'></IoSettingsOutline>
                        Settings
                    </a>
                </NavLink>
            </li>
            {/* help*/}
            <li>
                <NavLink to={'/'} className='hover:bg-[#52B4DA63] flex rounded-xl py-5 manrope-font font-semibold text-[14px] text-[#E1E3F2CC]'>
                    <a className='flex'>
                        <IoHelpCircleOutline className='w-5 h-5  mr-2'></IoHelpCircleOutline>
                        Help
                    </a>
                </NavLink>
            </li>
        </>
    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden bg-[#1E3E85] text-white">
                <div className="flex items-center justify-between px-4 py-4">

                    {/* Logo */}
                    <img
                        src={logoMb}
                        alt="Logo"
                        className="w-28 navbar-start"
                        loading='lazy'
                    />

                    {/* Button */}
                    <div className='navbar-end flex gap-5'>
                        <button className="bg-[#FFC700] inter-font text-black px-4 py-2 rounded-[7px] font-semibold text-sm">
                            Go Premium
                        </button>

                        {/* Menu Icon */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="text-3xl"
                        >
                            {mobileMenu ? <IoClose /> : <HiOutlineMenuAlt3 />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="px-4 pb-4 border-t border-white/10">
                        <ul className="space-y-2 mt-4">

                            {navitems}

                        </ul>
                    </div>
                )}
            </div>



            {/* desktop menu */}
            <div className="hidden  bg-[#1E3E85]  text-white pt-7 px-5 md:flex md:flex-col ">
                <div className='px-8 mb-5'>
                    <img src={logo} alt="Logo" className="w-38 h-auto" />
                </div>

                {/* menu with icon */}
                <ul className="menu  w-56">
                    {navitems}


                </ul>

                <div className=' mt-auto'>
                    {/* why you should try premium */}
                    <div className=" w-[220px] mb-7 rounded-[12px] py-6 px-7 bg-linear-to-br from-[#4A8FDE] via-[#346CB8] to-[#234C8C] shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-white">
                        <div className='relative -mt-12 ml-36 w-16 h-10'>
                            <img src={badge} alt="Premium Feature" className="" loading='lazy'/>
                        </div>
                        {/* Title */}
                        <h2 className="text-xl mb-3 poppins-semibold font-semibold text-center">Why you should try Premium</h2>
                        {/* Watch video Button */}
                        <button className="w-full flex justify-center items-center gap-3 bg-[#1E3E85] py-3 text-white poppins-font font-normal  text-[16px]  rounded-full transition">
                            <div className=' '>
                                <FaCirclePlay className='w-8 h-8 text-white '></FaCirclePlay>
                            </div>
                            Watch Video
                        </button>

                    </div>

                    {/* plan */}
                    <div className="w-[220px] rounded-[28px] py-6 px-7 bg-linear-to-br from-[#4A8FDE] via-[#346CB8] to-[#234C8C] shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-white">

                        {/* Title */}
                        <h2 className="text-2xl mb-5 poppins-semibold">Basic</h2>

                        {/* Free Messages */}
                        <div className="mb-3 inter-font">
                            <p className="font-bold text-[14px] mb-4">Free Messages</p>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-[#20498B] rounded-full overflow-hidden">
                                    <div className="h-full w-[28%] bg-[#D9E8FF]" />
                                </div>

                                <span className="font-bold text-[14px]">1/5</span>
                            </div>
                        </div>

                        {/* Free Invites */}
                        <div className="mb-7 inter-font">
                            <p className="font-semibold text-[14px] mb-4">Free Invites</p>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-[#20498B] rounded-full overflow-hidden">
                                    <div className="h-full w-[28%] bg-[#D9E8FF]" />
                                </div>

                                <span className="font-bold text-[14px]">1/5</span>
                            </div>
                        </div>

                        {/* Upgrade Button */}
                        <button className="w-full bg-[#FFC700] py-3 inter-font hover:bg-[#FFB800] text-black font-bold text-[14px]  rounded-2xl transition">
                            Upgrade
                        </button>

                        {/* Footer Link */}
                        <button className="mt-5 text-[#FFC628] underline  text-[12px] manrope-font ">
                            Why you should try premium?
                        </button>
                    </div>


                    {/* account info */}
                    <div tabIndex={0} role="button" className=" btn-circle avatar pt-7 pb-0 flex justify-center items-center inter-font">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                loading='lazy' />
                        </div>
                        <div className='ml-3'>
                            <h3 className="font-bold text-sm text-[#FFFFFF]">Bungie</h3>
                            <p className="text-xs opacity-50 text-[#E1E3F2CC]">Premium</p>
                        </div>
                        <div className='flex items-center ml-12 -mt-2'>
                            <LuChevronsUpDown className='text-[#E1E3F2CC] opacity-50 w-5 h-5'></LuChevronsUpDown>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Navbar;