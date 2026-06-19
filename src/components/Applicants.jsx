import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import swiper from '../../src/assets/videos/swiper3.mp4'
import VideoCard from "../Shared Component/VideoCard";
const Applicants = () => {
    return (
        <div className="grid grid-cols-2  md:gap-5 gy-5 p-2 md:p-12">
            {/* card 1 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 2 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
               <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 3 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 4 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 5 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 6 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <VideoCard></VideoCard>

                </figure>


                <div className="flex flex-row justify-between mt-3">
                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-[8px] md:text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <div className="flex flex-row gap-1 md:hidden">
                        <p className="inter-font font-bold text-[10px] text-[#52B4DA]">$120-$234</p>
                        <p className="inter-font font-semibold text-[7px] text-[#808191]">/hour</p>
                    </div>
                        </div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                        <p className="manrope-font text-[7px] block md:hidden">Building Solutions, One Line of Code at a Time</p>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center md:flex hidden flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                    
                </div>
                {/* skills */}
                <div className="mt-2 md:flex hidden flex-col lg:flex-row gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex md:gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
        </div>
    );
};

export default Applicants;