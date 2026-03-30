import React from 'react'
import img1 from '../assets/break.jpeg'
import img2 from '../assets/app.jpeg'
import img3 from '../assets/serv3.jpg'
import line from '../assets/line2.png'
const Services = () => {
  return (
    <div>
      <div className='flex bg3'>
        {/*first service*/}
        <div className='w-1/3'>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center '/>
            <h2 className='text-amber-300 text-center text-4xl'>Breakfast</h2>
            <p className='text-center mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate eum tempora deleniti, tempore accusamus, quo reprehenderit quisquam porro quibusdam totam neque in, nam at labore id eaque aspernatur dolorem.</p>
          </div>
          <div>
            <img src={img1} alt="" className='h-160' />
          </div>
        </div>
         {/*second service*/}
        <div className='w-1/3'>
         
          <div  className='p-16'>
            <img src={img3} alt="" className='h-160 '/>
            </div>
             <div>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center ' />
            <h2 className='text-amber-300 text-center text-4xl'>Drinks</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate eum tempora deleniti, tempore accusamus, quo reprehenderit quisquam porro quibusdam totam neque in, nam at labore id eaque aspernatur dolorem.</p>
         
          </div>
        </div>
        {/*third service*/}
        <div className='w-1/3'>
           <div  className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center '/>
            <h2 className='text-amber-300 text-center text-4xl'>Appertizers</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate eum tempora deleniti, tempore accusamus, quo reprehenderit quisquam porro quibusdam totam neque in, nam at labore id eaque aspernatur dolorem.</p>
          </div>
          <div>
            <img src={img2} alt=""  className='h-160'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services
