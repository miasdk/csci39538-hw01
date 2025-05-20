// app/menu/page.tsx
'use client';

import MenuItem from '../../components/MenuItem';
const menuItems = [ 
    {
        name: 'Hummus',
        description: 'A delicious blend of chickpeas, tahini, lemon juice, and garlic. Served with pita bread.',
        price: 6.99,
        image: '/images/hummus.jpg'
    },
    {
        name: 'Spanakopita',
        description: 'A savory Greek pastry filled with spinach, feta cheese, and herbs.',
        price: 8.99,
        image: '/images/spanakopita.jpg'
    },
    {
        name: 'Moussaka',
        description: 'A traditional Greek dish made with layers of eggplant, ground beef, and béchamel sauce.',
        price: 12.99,
        image: '/images/moussaka.jpg'
    },
    {
        name: 'Baklava',
        description: 'A sweet dessert pastry made with layers of filo dough, nuts, and honey.',
        price: 5.99,
        image: '/images/baklava.jpg'
    },
    {
        name: 'Gyro Plate',
        description: 'Sliced gyro meat served with pita bread, tzatziki sauce, and a side of Greek salad.',
        price: 14.99,
        image: '/images/gyro.jpg'
    },
    {
        name: 'Greek Salad',
        description: 'A fresh salad made with tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese.',
        price: 9.99,
        image: '/images/greek-salad.jpg'
    }
];

export default function MenuPage() {
    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-8 text-center'>Menu</h1>
            <p className='text-gray-600 text-center mb-8'>
                Order online or visit us in person to
                enjoy our delicious Greek dishes.
            </p>            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}