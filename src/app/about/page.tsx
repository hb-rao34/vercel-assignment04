import Image from "next/image";
import React from 'react'

const page = () => {
  return (
    
 <div className="first">
      

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" 
src="/02.jpg" alt="" width="1000" height="1000"></img>
    <div 

className="pt-6 text-center space-y-4">
    <blockquote>
    <p className="text-lrg font-medium text-sky-500 dark:text-sky-400">
              <b>About Us</b>
        </p>

     

   <p className="text-lg font-small">
   <br/>Welcome to Financial Empowerment Project. Your gateway to financial freedom and empowerment. 
   Our mission is to equip individuals with the knowledge  skills  and resources needed to take 
   control of their financial lives and build a brighter future.

Through our comprehensive programs and services we aim to:

- Educate and inform on personal finance  budgeting  and investing
- Provide access to financial tools and resources
- Foster a supportive community for financial growth and accountability
- Empower individuals to make informed financial decisions and achieve their goals

Join us today and start your journey towards financial empowerment.<br/><br/><br/>

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

