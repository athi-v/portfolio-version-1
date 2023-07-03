import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiFillHtml5} from 'react-icons/ai'
import {SiTailwindcss, SiChakraui, SiJavascript, SiWebflow, SiFirebase} from 'react-icons/si'
import {FaCss3Alt, FaBootstrap, FaReact} from 'react-icons/fa'



const SliderComponent = () => {
    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "ease",
            
          }
        },
    ]
      };
      return (
        <Slider {...settings}>
          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><AiFillHtml5 /></div>
            <div><p className="text-md font-bold text-center">HTML</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><FaCss3Alt/></div>
            <div><p className="text-md font-bold text-center">CSS</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><FaBootstrap /></div>
            <div><p className="text-md font-bold text-center">Bootstrap</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><SiTailwindcss /></div>
            <div><p className="text-md font-bold text-center">TailwindCSS</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><SiChakraui /></div>
            <div><p className="text-md font-bold text-center">Chakra UI</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><SiJavascript/></div>
            <div><p className="text-md font-bold text-center">JavaScript</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><SiWebflow/></div>
            <div><p className="text-md font-bold text-center">Webflow</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><FaReact/></div>
            <div><p className="text-md font-bold text-center">ReactJS</p></div>
          </div>

          <div className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center"><SiFirebase/></div>
            <div><p className="text-md font-bold text-center">Firebase</p></div>
          </div>

        </Slider>
      );
    };
    
    export default SliderComponent;

