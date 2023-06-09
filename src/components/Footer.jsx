import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <div className="section bg-black absolute bottom-0 top-auto left-auto right-auto w-[100%]">
    <div className=" container mx-auto max-w-[90%] lg:max-w-screen-xl flex flex-col justify-center items-end h-[5vh] lg:h-[10vh]">
<div className="text-white font-light text-[10px]">
    <Link to="/" >Copyright &#9400; 2023</Link>
</div>
    </div>
    </div>
    )
    };
    
    export default Footer;