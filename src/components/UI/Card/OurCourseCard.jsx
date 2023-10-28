



import React from 'react';

const OurCourseCard = ({img, title}) => {
    return (
        <div className="w-[350px] text-white flex flex-col items-center">
            <span className="mb-[36px]">{img}</span>
            <h2 className="font-['RowdiesBold'] text-[25px] mb-[30px]">{title}</h2>
            <p className="text-[18px] font-['SairaRegular'] text-center w-[331px] leading-[27px]">Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.</p>
        </div>
    );
};

export default OurCourseCard;