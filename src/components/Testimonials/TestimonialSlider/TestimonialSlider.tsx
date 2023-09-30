import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from "swiper/modules"
import { testimonialsData } from "./TestimonialsSlider.data"
import Image from "next/image"



export function TestimonialSlider() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
                {testimonialsData.map(({ id, name, testimonial, image }) => (
                    <SwiperSlide key={id}>
                        <Image src={`/assets/${image}`} alt={name} width="100" height="100" className="mx-auto" />
                        <h4 className="text-center">{name}</h4>
                        <div className="mt-5 text-center">{testimonial}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
