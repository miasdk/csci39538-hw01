import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[400px] md:h-[700px] flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero-1.jpg" 
          alt="Restaurant Interior"
          fill
          className="object-cover"
        />
        <div className="z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl md:text-xl text-bold mb-4">Located in the Heart of Lower Manhattan</p>
          <div className="flex justify-center">
          <Link
            href="/menu" 
            className="bg-orange-500 text-white py-2 px-6 rounded-md text-lg hover:bg-orange-600 transition-colors"
          >
            View Menu
          </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-12 bg-neutral-100"> 
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/hummus.jpg"
                  alt="Hummus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Hummus</h3>
              <p className="text-gray-600">A delicious blend of chickpeas, tahini, lemon, and garlic.</p>
              <Link
                href="/menu"
                className="text-orange-500 hover:underline mt-2 inline-block"
              >
                View Full Menu
              </Link>
            </div>
            <div className="text-center">
              <div className="relative h-72 md:h-96 lg:h-112 rounded-lg overflow-hidden">
                <Image
                  src="/images/moussaka.jpg"
                  alt="Moussaka"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Moussaka</h3>
              <p className="text-gray-600">Layers of eggplant, ground beef, and béchamel sauce.</p>
              <Link
                href="/menu"
                className="text-orange-500 hover:underline mt-2 inline-block"
              >
                View Full Menu
              </Link>
            </div>
            <div className="text-center">
              <div className="relative h-56 md:h-72 lg:h-88 rounded-lg overflow-hidden">
                <Image
                  src="/images/baklava.jpg"
                  alt="Baklava"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Baklava</h3>
              <p className="text-gray-600">Sweet layers of filo dough, nuts, and honey.</p>
              <Link
                href="/menu"
                className="text-orange-500 hover:underline mt-2 inline-block"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
  
      <div className="container mx-auto py-12 bg-gray-10">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[500px] md:h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1574777267424!2d-73.99443402335767!3d40.71454967139325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a28f45aed0f%3A0x1edb7a4bfca2349d!2sKiki&#39;s!5e0!3m2!1sen!2sus!4v1742175736090!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
          <div>
            <p className="text-lg">
              Kiki's Greek Tavern is a family-owned restaurant that has been serving authentic Greek cuisine for over 20 years. Our dishes are made with fresh, locally-sourced ingredients and are prepared using traditional Greek recipes. We take pride in offering our customers a taste of Greece in every bite.
            </p>
            <p className="mt-4 text-lg">
              Our menu features a variety of classic Greek dishes, including moussaka, spanakopita, and baklava. We also offer a selection of vegetarian and vegan options, as well as a variety of Greek wines and beers to complement your meal.
            </p>
            <p className="mt-4 text-lg">
              Whether you're looking for a quick lunch or a leisurely dinner, Kiki's Greek Tavern is the perfect place to enjoy a delicious meal in a warm and welcoming atmosphere. We look forward to serving you soon!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to make a reservation? We’d love to hear from you!
          </p>
          <Link
            href="/contact" 
            className="bg-orange-500 text-white py-2 px-6 rounded-md text-lg hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>


      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 My Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}