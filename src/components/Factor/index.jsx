
import { useState, useRef } from "react";
import video from "../../assets/video/video.mp4";
import poster from "../../assets/images/poster.png";
import phone from "../../assets/images/phone.png";
import {Play, Pause} from "../../components/Icons";

import "./style.scss";
const index = () => {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
  
    const handlePlayClick = () => {
      const videoElement = videoRef.current;
    
      if (videoElement.paused) {
        videoElement.play();
        setPlay(true);
        
      } else {
        videoElement.pause();
        setPlay(false);
      }
    };

    
    return (
        <section className="pt-[87px]">
            <div className="container">
                <div className="flex flex-col gap-y-[72px]">
                    <div className="bg-factor flex items-center gap-x-[146px]">
                      
                        <img src={phone} alt="phone" className="object-contain" />
                 

                        <div>
                            <h2 className="mb-[52px] text-[#1D1D45] w-[775px] text-[45px] leading-[60px] font-['RowdiesBold']">The number one factor in <span className="text-[#2AAA94]">relevance drives out resistance.</span></h2>
                            <p className="text-[#4E596B] font-['SairaRegular'] leading-[28px] w-[754px] text-[18px] mb-[48px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button className="btn-factor py-[16px] px-[30px] rounded-[10px] text-white hover:ring hover:ring-indigo-400">Learn More</button>
                        </div>
                    </div>

                    <div className="relative  rounded-[68px]">
                        <span  onClick={() => handlePlayClick()} className="absolute right-10 top-10 cursor-pointer z-10">
                             { play ? <Pause/> : <Play/> }
                        </span>
                        <video className="w-full h-full"  poster={poster} ref={videoRef} controls >
                            <source src={video}  type="video/mp4" />
                        </video>

                    </div>
                </div>
            </div>      
        </section>
    );
};

export default index;