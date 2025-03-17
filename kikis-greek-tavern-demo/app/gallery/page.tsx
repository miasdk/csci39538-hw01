'use client';
import './gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GalleryImage from '../../components/GalleryImage';

const galleryImages = [
    {
        src: '/images/gallery-1.jpg',
        alt: 'Image 1',
    },
    {
        src: '/images/gallery-2.jpg',
        alt: 'Image 2',
    },
    {
        src: '/images/gallery-3.jpg',
        alt: 'Image 3',
    },
    {
        src: '/images/food-1.jpg',
        alt: 'Image 4',
    },
    {
        src: '/images/food-2.jpg',
        alt: 'Image 5',
    },
    {
        src: '/images/food-3.jpg',
        alt: 'Image 6',
    },
];
export default function GalleyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className='flex-grow container mx-auto py-8 p-8'>
                <h1 className='text-3xl font-bold mb-8 text-center'>Gallery</h1>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <GalleryImage {...image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p className='text-gray-600 text-center mt-8'>
                    Take a look at our beautiful restaurant and the delicious dishes we serve. From our cozy dining area to our mouth-watering menu, Kiki's Greek Tavern is the perfect place to enjoy a taste of Greece.
                </p>
            </div>
        </div>
    );
}