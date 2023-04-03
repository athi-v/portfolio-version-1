import Webstreet from '../assets/invertimage.svg'
import {GoLocation} from 'react-icons/go'
const Experience = () => {
    return (
    <div className="section">
   <div className="container mx-auto max-w-[90%] lg:max-w-screen-xl h-[70vh] flex items-center">

<div class="">
<div className='flex flex-row items-center gap-5'>
   <div>
      <img src={Webstreet}  className="h-[30px]"/>
   </div>
   <div className='font-semibold text-3xl'>Webstreet</div>
</div>

       <p className="lg:w-[900px]">
         <div className='flex flex-row items-center gap-4 pt-[10px]'>
         <div>
         <GoLocation />
         </div>
         <div className='font-medium'>         Remote
</div>
         
         </div>
         <div className='pt-[20px] font-medium'>
         <div>
         Webflow Developer
         </div>
         <div className='italic'>
         September 2022 - December 2022
         </div>
         </div>

         <div className='pt-[20px] font-medium'>
         <div>
         Lead Webflow Frontend Developer         </div>
         <div className='italic'>
         January 2022 - Present         </div>
         </div>


         <div> </div>

       </p>
     </div>  
     </div>
    </div>
    )
    };
    
    export default Experience;