import { MdPeopleAlt } from 'react-icons/md';

import reject from '../../src/assets/reject.png'
import shortlist from '../../src/assets/shortlisted.png'
import invites from '../../src/assets/invites.png'

const Categories = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className=" bg-black   px-7 flex items-center gap-3 rounded-[7px]">
                <MdPeopleAlt className='text-white w-10 h-10'></MdPeopleAlt>
                <div>
                    <h2 className='text-white manrope-font text-[16px] font-bold'>New Applicants</h2>
                    <p className='text-[#35BE35] manrope-font text-[13px] font-bold'>+50 Individuals</p>
                </div>
            </div>
            <div className="bg-base-200 border border-[#979797] p-10 flex gap-3 rounded-[7px]">
                <img src={invites} className='text-[#979797] w-10 h-10' loading='lazy'/>
                <div>
                    <h2 className='manrope-font text-[16px] font-bold'>Invites</h2>
                    <p className='manrope-font text-[13px] font-bold text-[#B2B3BD]'>50 Individuals</p>
                </div>
            </div>
            <div className=" bg-base-200 border border-[#979797] p-10 flex gap-3 rounded-[7px]">
                <img src={shortlist} className='text-[#979797] w-10 h-10' loading='lazy'/>
                <div>
                    <h2 className='manrope-font text-[16px] font-bold'>Shortlisted</h2>
                    <p className='manrope-font text-[13px] font-bold text-[#B2B3BD]'>+50 Individuals</p>
                </div>
            </div>
            <div className=" bg-base-200 border border-[#979797] p-10 flex gap-3 rounded-[7px]">
                <img src={reject} className='text-[#979797] w-10 h-10' loading='lazy'/>
                <div>
                    <h2 className='manrope-font text-[16px] font-bold'>New Applicants</h2>
                    <p className='manrope-font text-[13px] font-bold text-[#B2B3BD]'>+50 Individuals</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;