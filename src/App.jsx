import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Apple from './Apple';


const App = () => {
  return ( <>

  <div className=' h-full w-screen'>
    <div className='flex justify-between items-center sm:flex sm:items-center sm:justify-between sticky  '>


      {/* This is hamburger and flipkart logo section */}

      <div className='flex justify-center items-center gap-[-10px]'>
        <GiHamburgerMenu  className='ml-3 sm:hidden'/>

        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" className='h-[44px] w-[120px]
        sm:h-[66px] sm:w-150[150px]' />

      </div>

        {/* This is vector down arrow ,account and kart section */}


        <div className=' hidden sm:flex  sm:items-center sm:w-[584px] sm:h-[40px]   sm:border sm:rounded-lg 
      sm:gap-2 p-3 bg-gray-300' >
    <IoSearchSharp   className='sm:white  sm:text-2xl'/>
      <input type="text" placeholder='Search for Products,Brands and More ' className='sm:border-none sm:outline-none sm:h-[40px] sm:w-[300px] text-xl bg-gray-300 border rounded-lg  ' />
    </div>





      <div className='flex items-center justify-center gap-10 mr-3'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNE7lfyUz4-on4uR7qaIWGu4zAkJ1Lv8-aBuzMUCmpsBJBcLD6" className='h-6 w-4 sm:hidden' />

        <span className='flex justify-center items-center  gap-1 text-xl'> <RiAccountCircleLine  className='sm:order-4'/><span className='sm:hidden'>you</span> <span className='hidden sm:block'>Vishal</span></span>

        <IoCartOutline className='font-bold text-2xl ' />
         <label
          className='hidden sm:flex sm:justify-center sm:items-center gap-2 '>
        <FaBox  className=''/>
          Become a best seller

         </label>
         <BsThreeDotsVertical className='hidden sm:block sm:mr-7' />

      </div>

    </div>

      {/* This is serach section */}
    <div className='flex justify-between items-center w-[354x] h-[40px]  mt-2 ml-3 mr-3 border rounded-lg 
    pl-4 pr-32 sm:hidden' >
    <IoSearchSharp   className=' '/>
      <input type="text" placeholder='Search for Products,Brands and More ' className='border-none outline-none ' />
    </div>


     





  {/* This is Hero section */}



<img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2a11ef7d3cb7034e.jpeg?q=20 " 
className='object-cover mt-2 sm:mt-2 sm:object-cover sm:h-[200px] sm:w-[1500px]'/>








{/* this is the poster serction */}

<div className=' h-[120px] w-full flex justify-center items-center cover sm:h[300px] sm:w-full  '>
<div className='h-[100px] w-[390px] animate-rotateImages   sm:h-[200px] sm:w-full sm:cover sm:mt-7 
sm:border-[5px]     '>
 
 </div>
</div>



<Apple className=""
tittle="Best of Electronics "
link="https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.webp?b=1&s=612x612&w=0&k=20&c=nreSyX3jzkHIqq7eBJA44uBAWwyPsR0je1RENIIHRsc="
para="Fryers"/>

<Apple className=""
tittle="Best of Electronics "
link="https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.webp?b=1&s=612x612&w=0&k=20&c=nreSyX3jzkHIqq7eBJA44uBAWwyPsR0je1RENIIHRsc="
para="Fryers"/>

<Apple className=""
tittle="Best of Electronics "
link="https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.webp?b=1&s=612x612&w=0&k=20&c=nreSyX3jzkHIqq7eBJA44uBAWwyPsR0je1RENIIHRsc="
para="Fryers"/>

<Apple className=""
tittle="Best of Electronics "
link="https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.webp?b=1&s=612x612&w=0&k=20&c=nreSyX3jzkHIqq7eBJA44uBAWwyPsR0je1RENIIHRsc="
para="Fryers"/>

<Apple className=""
tittle="Best of Electronics "
link="https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.webp?b=1&s=612x612&w=0&k=20&c=nreSyX3jzkHIqq7eBJA44uBAWwyPsR0je1RENIIHRsc="
para="Fryers"/>





<div className='bg-gray-400 flex justify-center item-centre p-4 mt-2 border border-spacing-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias praesentium necessitatibus temporibus officiis sint minus, non adipisci quos vitae cumque fuga aliquam totam quod hic modi voluptate consequuntur itaque corrupti!
Quo, quibusdam ut quasi dolorem explicabo laboriosam harum velit ratione perferendis ea corporis officiis sint earum? Asperiores, facere nisi debitis magnam omnis ab explicabo, delectus illum sunt odit commodi beatae?
Animi assumenda quasi atque voluptate eos quod asperiores optio blanditiis ad dolor. Molestias repellat cumque voluptatibus illum architecto mollitia perspiciatis quae deserunt, eaque modi quo autem porro totam commodi ipsam.
Illo sapiente minus eos, tenetur consectetur accusantium, aperiam eius corporis optio libero a quasi consequatur aliquam animi. Molestiae quis nesciunt cum mollitia harum nostrum, recusandae nam quae exercitationem ut sed?
Totam dolore quis repellendus impedit dolorum atque error sunt, excepturi nam fuga est perferendis nesciunt quaerat modi assumenda porro nulla quos sint velit repellat ducimus ipsa provident. Laboriosam, eaque perferendis!</div>


<div className='bg-black text-white font-bold  h-[200px] w-full flex justify-center items-center flex-col '>
  <span>HOME</span>
  <span>ABOUT</span>
   <span>CONTACT</span>

</div>



</div> 
 </>
  )
}

export default App;