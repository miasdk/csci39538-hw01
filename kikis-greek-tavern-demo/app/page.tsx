import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative h-[500px] md:h-[700px] flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero-1.jpg" 
          alt="Restaurant interior with warm lighting and elegant table settings"
          fill
          priority
          className="object-cover brightness-[0.65]"
        />
        <div className="z-10 p-6 max-w-4xl mx-auto">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Welcome to Kiki's Greek Tavern
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Authentic Greek Cuisine in the Heart of Lower Manhattan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu" 
              className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section aria-labelledby="specialties-heading" className="w-full py-16 bg-neutral-50"> 
        <div className="container mx-auto px-4">
          <h2 id="specialties-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Specialty Item 1 */}
            <div className="group">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl">
                <Image
                  src="/images/hummus.jpg"
                  alt="Creamy hummus with olive oil and herbs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center px-2">
                <h3 className="text-2xl font-semibold mb-3">Hummus</h3>
                <p className="text-gray-700 mb-4">A delicious blend of chickpeas, tahini, lemon, and garlic, served with warm pita bread.</p>
                <Link
                  href="/menu#hummus"
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center transition-colors focus:outline-none focus:underline"
                >
                  View on Menu
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Specialty Item 2 */}
            <div className="group">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl">
                <Image
                  src="/images/moussaka.jpg"
                  alt="Traditional moussaka with layers of eggplant and meat sauce"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center px-2">
                <h3 className="text-2xl font-semibold mb-3">Moussaka</h3>
                <p className="text-gray-700 mb-4">Layers of tender eggplant, seasoned ground beef, and creamy béchamel sauce baked to perfection.</p>
                <Link
                  href="/menu#moussaka"
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center transition-colors focus:outline-none focus:underline"
                >
                  View on Menu
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Specialty Item 3 */}
            <div className="group">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl">
                <Image
                  src="/images/baklava.jpg"
                  alt="Sweet baklava pastry with honey and nuts"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center px-2">
                <h3 className="text-2xl font-semibold mb-3">Baklava</h3>
                <p className="text-gray-700 mb-4">Sweet layers of flaky filo dough, chopped nuts, and honey syrup, a perfect end to your meal.</p>
                <Link
                  href="/menu#desserts"
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center transition-colors focus:outline-none focus:underline"
                >
                  View on Menu
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* About Us Section */}
      <section aria-labelledby="about-heading" className="container mx-auto py-16 px-4">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1574777267424!2d-73.99443402335767!3d40.71454967139325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a28f45aed0f%3A0x1edb7a4bfca2349d!2sKiki&#39;s!5e0!3m2!1sen!2sus!4v1742175736090!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Restaurant location on Google Maps"
              aria-label="Our restaurant location on Google Maps"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Kiki's Greek Tavern is a family-owned restaurant that has been serving authentic Greek cuisine for over 20 years. Our dishes are made with fresh, locally-sourced ingredients and are prepared using traditional Greek recipes passed down through generations.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our menu features a variety of classic Greek dishes, including moussaka, spanakopita, and baklava. We also offer a selection of vegetarian and vegan options, as well as a curated list of Greek wines and beers to complement your meal.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Whether you're looking for a quick lunch, a leisurely dinner, or a place to celebrate a special occasion, Kiki's Greek Tavern is the perfect place to enjoy a delicious meal in a warm and welcoming atmosphere.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors focus:outline-none focus:underline"
              >
                Learn more about our story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"The most authentic Greek food I've had outside of Greece. The moussaka is absolutely divine, and the staff makes you feel like family."</p>
              <div className="font-medium">— Maria T.</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"Perfect spot for a date night. The ambiance is cozy, the wine selection is excellent, and the baklava is the best I've ever had!"</p>
              <div className="font-medium">— James L.</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"As a vegetarian, I was thrilled with the variety of options. The spanakopita and Greek salad were fresh and flavorful. Will definitely be back!"</p>
              <div className="font-medium">— Sophia K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section aria-labelledby="contact-heading" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact" 
              className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
            <a
              href="tel:+12125551234" 
              className="bg-transparent border-2 border-orange-500 text-orange-500 py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Call us at 212-555-1234"
            >
              Call: (212) 555-1234
            </a>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://facebook.com" aria-label="Visit our Facebook page" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Visit our Instagram page" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Visit our Twitter page" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section aria-labelledby="hours-heading" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 id="hours-heading" className="text-2xl font-bold mb-4">Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <address className="not-italic">
                <p>130 Division St</p>
                <p>New York, NY 10002</p>
                <p className="mt-2">
                  <a href="tel:+12125551234" className="text-orange-500 hover:underline">
                    (212) 555-1234
                  </a>
                </p>
                <p>
                  <a href="mailto:info@kikisgreektavern.com" className="text-orange-500 hover:underline">
                    info@kikisgreektavern.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
