import Image from 'next/image';
interface MenuItemProps {
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
    console.log(image);
    return ( 
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className='relative h-48 mb-4'>
                <Image 
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-xl font-bold mb-2'>{name}</h3>
                <span className='reviews flex items-center space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 0 1 .77.36l2.83
                        3.55 5.5.8a1 1 0 0 1 .55 1.7l-4.1 4.03 1
                        5.8a1 1 0 0 1-1.45 1.05L10
                        16.39l-5.4 2.84a1 1 0 0 1-1.45-1.05l1-5.8-4.1-4.03a1
                        1 0 0 1 .55-1.7l5.5-.8 2.83-3.55A1 1 0 0 1 10 2z"/>
                    </svg>
                    <span className='text-gray-600'>4.5</span>
                </span>
            </div>
            <p className='text-gray-600 mb-4'>{description}</p>
            <div className='flex items-center justify-between mb-4'>
                <p className='text-gray-800 font-bold text-lg'>${price}</p>
                <button className='bg-orange-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-600 transition-colors duration-300'>
                Add to Cart
                </button>
            </div>
        </div>
    )
}
