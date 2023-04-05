import Webstreet from "../assets/invertimage.svg";
import {AiOutlineFilePdf} from 'react-icons/ai'
const Experience = () => {
  return (
    <div className="section">
      <div className="container mx-auto max-w-[90%] lg:max-w-screen-xl pt-[80px]">
        <div class="">
<div className="grid grid-cols-5 lg:grid-cols-9 gap-5 lg:gap-2 border-b-2 pb-[10px]">
<a href="https://www.webstreet.co.za/" target="_blank"  rel="noreferrer">
<div className=" bg-black flex items-center justify-center h-[70px] w-[70px] lg:w-[70px] lg:h-[50px]">
              <img src={Webstreet} className="h-[60px] w-[50px] lg:h-[50px] invert" alt="webstreet logo"/>
            </div>
</a>

            <div className="grid grid-cols-1 col-span-4 lg:col-span-8">
            <div className="text-xl font-semibold">Frontend Developer </div>

            <div className="font-normal">Webstreet · Fulltime</div>
            <div className="flex flex-row items-center gap-5 ">
              <div className="font-normal"> Remote</div>
            </div>
            <div className="font-normal">
              <div className="">September 2022 - Present </div>
            </div>

<a  className="hidden" href="www.webflow.com" >
<div className=" pt-2 flex items-center gap-3">
<div className="font-normal">  Recommendation Letter
</div>
<div><AiOutlineFilePdf/></div>
</div>
</a>

            

<div className="pt-[20px]">
<div className="font-medium">Tech Stack:</div>
            <div className="text-sm text-gray-500">HTML</div>
            <div className="text-sm text-gray-500">CSS</div>
            <div className="text-sm text-gray-500">TailwlindCSS</div>
            <div className="text-sm text-gray-500">Bootstrap</div>
            <div className="text-sm text-gray-500">Javascript</div>
            <div className="text-sm text-gray-500">JQuery</div>
            <div className="text-sm text-gray-500">Pinegrow</div>
            <div className="text-sm text-gray-500">Webflow</div>
            <div className="text-sm text-gray-500">Git</div>
            <div className="text-sm text-gray-500">BitBucket</div>


</div>

            </div>

</div>

         

        </div>
      </div>
    </div>
  );
};

export default Experience;
