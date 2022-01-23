
import { Swiper, SwiperSlide } from "swiper/react";
import ListData from "./ListData";
import Loading from './Loading'
import SwiperCore, {
    Pagination
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './style.css'
SwiperCore.use([Pagination]);

export function CardList({ dataCard = [], loading = true, tipe }) {

    const load = [1, 2, 3]


    return (
        <div className="container-card mt-5">
            <div className="flex justify-between">
                <p className="text-xs text-gray-900 pl-5 mb-3"></p>
                <a href="#" className="text-emerald-500 underline font-bold text-sm md:text-base lg:text-base pr-5 mb-3">{tipe}</a>
            </div>
            <Swiper
                tag="ul"
                className="bg-white dark:bg-gray-800"
                pagination={{
                    "clickable": true,
                    bulletClass: "tes"
                }} breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 8
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 8
                    },
                }} >
                {
                    loading ?
                        load.map(x => (
                            <SwiperSlide key={x}>
                                <Loading />
                            </SwiperSlide>
                        ))
                        : dataCard.length == 0 ? <p className="text-center text-3xl text-emerald-500">Not Found</p> :
                            dataCard.map((pecah, key) => (
                                <SwiperSlide key={key} tag="li">

                                    <ListData pecah={pecah} />
                                </SwiperSlide>
                            ))
                }
            </Swiper>
        </div>
    )
}


export default CardList;
