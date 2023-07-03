import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import stacks from "../data/stack.js";

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

{stacks.map((stack, index) => (
<div key={index} className="flex flex-cols gap-[20px] justify-center items-center">
            <div className="flex justify-center">{stack.icons}</div>
            <div><p className="text-md font-bold text-center">{stack.name}</p></div>
          </div>
))}
        </Slider>
      );
    };
    
    export default SliderComponent;

