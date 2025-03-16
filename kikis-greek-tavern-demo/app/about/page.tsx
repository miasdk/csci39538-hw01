import Image from "next/image"

export default function AboutPage() {
    return ( 
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h1 className='text-3xl font-bold mb-4'>About Us</h1>
                <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                . Sed ac urna sit amet nunc ultricies fermentum. Nullam fringilla, nunc id ultricies ultricies, nunc odio ultricies nunc, nec ultricies nunc odio nec nunc.</p>
                <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna sit amet nunc ultricies fermentum. Nullam fringilla, nunc id ultricies ultricies, nunc odio ultricies nunc, nec ultricies nunc odio nec nunc.</p>
                <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna sit amet nunc ultricies fermentum. Nullam fringilla, nunc id ultricies ultricies, nunc odio ultricies nunc, nec ultricies nunc odio nec nunc.</p>
            </div>
            <div>
                <Image
                    src="/images/about-1.jpg"
                    alt="About Us"
                    width={500}
                    height=
                    className="rounded-lg"
                /> 
            </div>
        </div>
    )
}