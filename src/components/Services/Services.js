import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {FreeMode, Pagination} from 'swiper/modules'
import ServiceItem from './ServiceItem'
import servicesImage from '../../Assets/serv.svg'
import serviceIcon from '../../Assets/service_icon.svg'
import services from './services.json'

const Services = () => {
  return (
    <div
    name='section4'
    className='container-xl mx-auto py-10 lg:py-32 bg-[#171719] opacity-90 '
    style={{
        backgroundImage: `url(${servicesImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // height: '800px',
        backgroundColor: 'rgba(0,0,0,0.9)',
    }}>
    <div >
        <div className='flex flex-row justify-center pr-8 pt-4'>
            <div className='flex px-8 pt-8'>
            <div>
						<img
							src={serviceIcon}
							alt='service-logo'
						/>
					</div>
                <h1 className='font-semibold text-white text-md md:text-4xl pt-3 md:pt-0'>Our Services</h1>  
            </div>
            
        </div>
    </div>
    <div className='flex items-center justify-center flex-row h-[60vh]'>
    <Swiper 
      breakpoints={{
        270:{
         slidesPerView: 1
        },
        340:{
            slidesPerView: 1,
            spaceBetween: 15
        },
        700:{
            slidesPerView: 3,
            spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='max-w-[90%] lg:max-w-[80%]'
    >
        
            {services.map((service) => (
                <SwiperSlide key={service.id}>
                <ServiceItem    
                    service={service}
                />
                </SwiperSlide>
            ))}
       
        </Swiper>
    </div>
</div>
  )
}

export default Services