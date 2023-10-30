
import  {ServiceCard} from "../UI/Card";
import "./style.scss";
const index = () => {
    return (
        <section id="services" className="pt-[132px] pb-[72px] bg-[#DBEDFF]">
            <div className="container">
                <div className="flex flex-col">
                    <h2 className="text-[#2AAA94] font-['RowdiesBold'] text-[45px] mb-[42px] text-center">Services</h2>
                    <h4 className="text-[#4E596B] text-[25px] font-['InterMedium'] text-center mb-5">What our student say about us</h4>
                   
                    <div className="flex justify-between gap-x-[67px]">
                        {/* <ServiceCard/>
                        <ServiceCard/>
                        <ServiceCard/> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;