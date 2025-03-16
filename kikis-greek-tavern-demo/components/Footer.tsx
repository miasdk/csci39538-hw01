export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className='container mx-auto flex justify-between items-center'>
                <p className='text-sm'>
                    &copy; 2021 Kiki's Greek Tavern
                </p> 
                <ul className='flex space-x-4'>
                    <li>
                        <a href="https://www.facebook.com" className='hover:text-gray-400'>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className='hover:text-gray-400'>
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" className='hover:text-gray-400'>
                            Instagram
                        </a>
                    </li>
                </ul>
                <p className='text-sm'>
                    Business Hours: 11am-10pm Daily 
                </p>
           </div>
        </footer>
    )
}

