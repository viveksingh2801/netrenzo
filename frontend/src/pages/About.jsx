import React from 'react'
import Title from "../components/Title"
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laudantium, recusandae dolorem magni quaerat, veniam ullam labore ratione sit assumenda maiores libero voluptatem! Quod quo ad nulla cum, recusandae rerum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit magnam qui quibusdam, distinctio hic, adipisci ad atque enim ut nemo suscipit id quo consequuntur numquam mollitia eum nostrum. Excepturi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus in? Repellendus omnis, error reprehenderit, enim natus obcaecati molestiae quos non cupiditate deserunt, optio voluptas voluptatum voluptate iusto aliquam! Sit.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates vel quasi culpa? Quidem tempore perspiciatis sapiente doloremque a facere assumenda. Saepe perferendis sed atque eaque voluptatibus quaerat itaque! Voluptate?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates vel quasi culpa? Quidem tempore perspiciatis sapiente doloremque a facere assumenda. Saepe perferendis sed atque eaque voluptatibus quaerat itaque! Voluptate?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates vel quasi culpa? Quidem tempore perspiciatis sapiente doloremque a facere assumenda. Saepe perferendis sed atque eaque voluptatibus quaerat itaque! Voluptate?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
