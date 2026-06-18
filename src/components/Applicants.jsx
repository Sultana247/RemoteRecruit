import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import swiper from '../../src/assets/videos/swiper3.mp4'
const Applicants = () => {
    return (
        <div className="grid grid-cols-2 gap-5 gy-5 p-12">
            {/* card 1 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 2 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-2">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-6">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 3 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-2">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-6">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 4 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-2">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-6">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 5 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-4">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-12">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
            {/* card 6 */}
            <div className="rounded-[12px] bg-[#F7F8FC]  shadow-sm p-4">
                <p className="inter-font font-semibold text-[12px] mb-4 text-[#1E3E85]">Cover Letter Video</p>
                <figure>
                    <video
                        src={swiper}
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="rounded-sm "
                    />

                </figure>


                <div className="flex justify-between mt-3">
                    <div className="">
                        <p className="text-[12px] font-bold inter-font text-[#1E3E85]">Joel Diamond</p>
                        <h3 className="text-[16px] font-semibold text-[#11142D] poppins-semibold mt-[2px]">Software Engineer</h3>
                    </div>
                    <div className="border border-[#E0E5F9] rounded-lg p-[5px] text-center flex flex-col justify-center">
                        <p className="inter-font font-bold text-[11px] text-[#52B4DA]">$120 - $234</p>
                        <p className="inter-font font-semibold text-[10px]">per hour</p>
                    </div>
                </div>
                {/* skills */}
                <div className="mt-2 flex gap-2">
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Photoshop</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">Figma</button>
                    <button className="btn rounded-[6px] bg-[#1E3E85] text-white poppins-semibold text-[10px]">illustration</button>
                </div>
                {/* buttons */}
                <div className="mt-3 flex gap-6">
                    <button className="btn bg-[#35BE35] rounded-[8px] text-white inter-font text-[16px] font-bold flex justify-between"><FaCheck></FaCheck> Shortlist</button>
                    <button className="btn bg-[#C83F3F] rounded-[8px] text-white inter-font text-[16px] font-bold flex gap-5.25 justify-between"><IoCloseOutline></IoCloseOutline> Reject</button>

                </div>
            </div>
        </div>
    );
};

export default Applicants;