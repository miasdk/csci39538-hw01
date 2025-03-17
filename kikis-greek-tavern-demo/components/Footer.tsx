import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className='container mx-auto flex justify-between items-center'>
                <p className='text-sm'>
                    &copy; 2021 Kiki's Greek Tavern
                </p> 
                <ul className='flex space-x-4'>
                    <li>
                        <a href="https://instagram.com" className='hover:text-gray-400'>
                            <Instagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" className='hover:text-gray-400'>
                            <Facebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" className='hover:text-gray-400'>
                            <Twitter />
                        </a>
                    </li>
                </ul>
                <div className='text-sm'>
                    <p>Business Hours</p>
                    <p>Monday - Friday: 11am - 10pm</p>
                    <p>Saturday - Sunday: 12pm - 11pm</p>
                </div>
           </div>

        </footer>
        
    )
}

