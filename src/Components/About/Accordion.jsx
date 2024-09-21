import  { useState } from 'react';
import accor from '../../../public/Accordions.json';
import { BsChevronDown } from "react-icons/bs";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='mt-28'>

            <div className='text-center justify-center my-12 text-4xl font-serif'>
                Frequently <span className='text-green-500'>Asked Questions</span>
            </div>
            <div className='max-w-[700px] mx-auto mt-12'>
                {accor.map((e, index) => (
                    <div className='pb-8' key={index}>
                        <div className='flex items-center justify-between cursor-pointer' onClick={() => handleClick(index)}>
                            <p className='sm:text-xl text-base font-bold'>{e.titile}</p>
                            <BsChevronDown className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                        </div>
                        {activeIndex === index && (
                            <div className='mt-4'>
                                <p className='text-sm leading-7 text-gray-500'>
                                  {e.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;