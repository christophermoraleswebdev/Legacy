import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {

      const testimonialData = [
            {
                  id: 1,
                  name: '-Rendauldo McFadden',
                  role: 'client',
                  message: "This team and ownership group are thorough. They provided not only the service my home needed, but also the information to make it a smooth process. Highly recommend!",
            },
            {
                  id: 2,
                  name: '-Christopher Mora',
                  role: 'Client',
                  message: "I've worked with Legacy on several projects. They are knowledgable and know the claims process well. They are quick to respond and you are updated every step of the way.",
            },
            {
                  id: 3,
                  name: '-Rollie Flores',
                  role: 'Client/Southern Pro Roofing',
                  message: "Professional and very knowledgeable. Helped get through the process seamlessly with results.",
            },
      ]


  return (
      <>
      <h1 id='testimonials' className='testimonials-heading'>TESTIMONIALS</h1>
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
            }}
            pagination={{
                  clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
      >
            {testimonialData.map(testimonial => (
                  <SwiperSlide key={testimonial.name}>
                        <div className='swiper-container'>
                              <div className='testimonial-card'>
                                    <i className="quote fa-solid fa-quote-left"></i>
                                    <p>{testimonial.message}</p>
                                    <h4>{testimonial.name}</h4>
                              </div>
                        </div>
                  </SwiperSlide>
            ))}
            
      </Swiper>
      <div className='add-reviews'>
            <h4>Review Us On Google</h4>
            <a href="https://g.page/r/CWSULi7fnslgEBM/review" target="_blank" rel="noopener noreferrer">
                  <button className='review-btn'>Add a Review</button>
            </a>
      </div>
    </>
  )
}

export default Testimonials