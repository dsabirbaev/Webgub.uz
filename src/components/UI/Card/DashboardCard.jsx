

import "./style.scss";

const DashboardCard = ({title, logo, number, color}) => {

    return (
        <div className={`min-w-[260px] h-[180px] bg-white shadow-md font-["RowdiesBold"] ${color} rounded-md`}>
            <div className="p-4 border-b">
                <h3 className="text-[18px]">{title}</h3>
            </div>
            <div className='flex items-center justify-between p-4'>
                <span className="text-[70px] font-['SairaSemiBold']">{number}</span>
                <span>{logo}</span>
            </div>
        </div>
    );
};

export default DashboardCard;