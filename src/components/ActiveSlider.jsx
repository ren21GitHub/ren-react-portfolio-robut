import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../constants'

const ActiveSlider = () => {
  return (
    <div className='flex items-center justify-center flex-col pt-14 bg-purple-900 bg-opacity-20'>
        <h1 className='font-semibold text-white text-4xl'>My Projects</h1>
        <p className='text-gray-200 text-xl pb-8 pt-4'>Happy to help you.</p>
        <Swiper
            breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }}

            freeMode={true}
            pagination={{
                clickable:true
            }}
            modules={[FreeMode, Pagination]}

            className='max-w-[100%] lg:max-w-[80%]'
        >
            {ServiceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250x] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
                        <div className="absolute inset-0 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                        <div className='absolute inset-0 bg-black group-hover:opacity-10 rounded-xl opacity-50'/>
                        <div className='relative flex flex-col gap-3'>
                            <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]'/>
                            <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                            <p className='lg:text-[18px]'>{item.content}</p>
                        </div>
                        <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}

export default ActiveSlider