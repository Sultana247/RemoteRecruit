import { FaCrown, FaQuestionCircle } from "react-icons/fa";

const PremiumAccess = () => {
    return (
        <div className=" rounded-xl p-6">
                        {/* Premium Text */}
                        <h3 className="text-[#F4B400] text-[16px] font-medium">
                            Upgrade to Premium to Access
                        </h3>

                        <div className="border-b border-gray-400 mt-2 mb-8"></div>

                        {/* AI Ranking */}
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
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
    );
};

export default PremiumAccess;