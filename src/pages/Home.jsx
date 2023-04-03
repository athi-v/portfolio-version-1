import Neo from "../assets/matrix.jpg";
import { AiFillGithub, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import SliderComponent from "../components/SliderComponent";

const Home = () => {
  return (
    <div className="section pb-8">
<div className="container mx-auto max-w-[90%] lg:max-w-screen-xl">

<div className="pb-[20px]">
        <h3 className="text-3xl font-black">Athenkosi Vinqi</h3>
      </div>
      <div className="flex py-[25px]">
        <img className="rounded-full h-[100px]" src={Neo} alt="profile image" />
      </div>

      <div className="pb-[15px]">
        <p>
          Hi👋, my name is Athenkosi Vinqi I am a{" "}
          <span className="font-bold">Frontend Developer</span>.
        </p>
      </div>
    
      <div class="pb-[50px]">
        <p className="lg:w-[900px]">
          I am an adaptable, innovative and fast learner with a number of
          skills. I am looking to develop my expertise in new concept
          development and validation within a forward thinking company. <br /><br />I am
          also a goal oriented, honest, friendly and a hardworking person who
          prides himself with fixed and uncompromised values. I am always open
          to learning new things and growing as an individual, this includes me
          going the extra mile to the best in every challenge that is thrown my
          way.
        </p>
      </div>

      <div className="h-[100px] items-center overflow-hidden">
        <SliderComponent/>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
        <a href="">
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px] px-[20px] lg:px-[10px]">
            <div className="flex justify-center items-center gap-2">
              <div>
                <AiFillGithub />
              </div>
              <div className="font-semibold"> Github</div>
            </div>
            <div>
              <BsArrowUpRight />
            </div>
          </div>
        </a>

        <a href="">
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px] px-[20px] lg:px-[10px]">
            <div className="flex justify-center items-center gap-2">
              <div>
                <AiOutlineDownload />
              </div>
              <div className="font-semibold"> Download CV</div>
            </div>
            <div>
              <BsArrowUpRight />
            </div>
          </div>
        </a>

        <a href="">
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px] px-[20px] lg:px-[10px]">
            <div className="flex justify-center items-center gap-2">
              <div>
                <AiOutlineMail />
              </div>
              <div className="font-semibold"> Contact me</div>
            </div>
            <div>
              <BsArrowUpRight />
            </div>
          </div>
        </a>
</div>

     
      </div>
    </div>
  );
};

export default Home;
