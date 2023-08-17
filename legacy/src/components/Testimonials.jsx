import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {

      const testimonialData = [
            {
                  id: 1,
                  name: 'John Doe',
                  role: 'CEO, Company A',
                  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero vitae nulla feugiat pellentesque.",
            },
            {
                  id: 2,
                  name: 'Jane Smith',
                  role: 'Designer, Company B',
                  message: "Ut tincidunt urna quis turpis bibendum, at condimentum justo feugiat. Sed quis justo in ante varius volutpat.",
            },
            {
                  id: 3,
                  name: 'Michael Johnson',
                  role: 'Marketing Manager, Company C',
                  message: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
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