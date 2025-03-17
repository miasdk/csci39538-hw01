import Image from 'next/image';

interface GalleryImageProps {
    src: string;
    alt: string;
}

export default function GalleryImage({ src, alt }: GalleryImageProps) {
    return (
        <div className="swiper-slide">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-lg"
            />
        </div>
    );
}
