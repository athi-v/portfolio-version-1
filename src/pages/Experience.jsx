import Webstreet from '../assets/invertimage.svg'
import {GoLocation} from 'react-icons/go'
const Experience = () => {
    return (
    <div className="section">
   <div className="container mx-auto max-w-[90%] lg:max-w-screen-xl">

<div class="py-[50px]">
<div className='flex flex-row items-center gap-5'>
   <div>
      <img src={Webstreet}  className="h-[30px]"/>
   </div>
   <div>Webstreet</div>
</div>

       <p className="lg:w-[900px]">
       <div><p></p></div>
         <div className='flex flex-row items-center gap-4 pt-[10px]'>
         <div>
         <GoLocation />
         </div>
         <div>         Remote
</div>
         
         </div>
         <div className='pt-[20px]'>
         <div>
         Webflow Developer
         </div>
         <div>
         September 2022 - December 2022
         </div>
         </div>

         <div className='pt-[20px]'>
         <div>
         Lead Webflow Frontend Developer         </div>
         <div>
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