import Neo from "../assets/matrix.jpg";
import { AiFillGithub, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="section">
<div className="container mx-auto max-w-screen-sm">

<div>
        <h3 className="text-3xl font-black">Athenkosi Vinqi</h3>
      </div>
      <div>
        <p>
          Hi👋, my name is Athenkosi Vinqi I am a{" "}
          <span className="font-bold">Frontend Developer</span>.
        </p>
      </div>
      <div className="flex">
        <img className="rounded-full h-[100px]" src={Neo} alt="profile image" />
      </div>

      <div>
        <p className="lg:w-[900px]">
          I am an adaptable, innovative and fast learner with a number of
          skills. I am looking to develop my expertise in new concept
          development and validation within a forward thinking company. I am
          also a goal oriented, honest, friendly and a hardworking person who
          prides himself with fixed and uncompromised values. I am always open
          to learning new things and growing as an individual, this includes me
          going the extra mile to the best in every challenge that is thrown my
          way.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        <a href="">
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px]">
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
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px]">
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
          <div className="flex border-[1px] rounded-lg justify-between items-center h-[50px]">
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