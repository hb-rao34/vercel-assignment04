import Image from "next/image";
import React from 'react'

const page = () => {
  return (
    
 <div className="first">
      

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" 
src="/03.jpeg" alt="" width="1000" height="1000"></img>
    <div 

className="pt-6 text-center space-y-4">
    <blockquote>
    <p className="text-lrg font-medium text-sky-500 dark:text-sky-400">
              <b>Address</b>
        </p>

     

   <p className="text-lg font-small">
   <br/>
            
                    Location <br/> Rahim Yar Khan
                  

            
   
   
   <br/><br/><br/>

        </p>
      </blockquote>
      <figcaption className="font-

medium">
        <div className="text-sky-500 dark:text-blue-400">
          
        </div>
  

      <div className="text-sky-700 dark:text-blue-500">
          Generative Artificial Intelligence
        

</div>
      </figcaption>
    </div>
</figure>


</div>

  )
}

export default page

