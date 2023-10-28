


const CategoryCard = ({ img, title, text, bgColor }) => {

    return (
        <div className="w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
            <div className={`mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[${bgColor}]`}>

                {img}


            </div>
            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">{title}</p>

            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">{text}</p>
        </div>
    );
};

export default CategoryCard;