import Image from "next/image"

export default function AboutPage() {
    return ( 
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-">About</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[500px] md:h-[400px] lg:h-[500px]">
                        <Image 
                            src="/images/about-1.jpg"
                            alt="About 1" 
                            width={500}
                            height={500} 
                            className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div>
                        <p className="text-lg">Kiki's Greek Tavern is a family-owned restaurant that has been serving authentic Greek cuisine for over 20 years. Our dishes are made with fresh, locally-sourced ingredients and are prepared using traditional Greek recipes. We take pride in offering our customers a taste of Greece in every bite.</p>
                        <p className="mt-4 text-lg">Our menu features a variety of classic Greek dishes, including moussaka, spanakopita, and baklava. We also offer a selection of vegetarian and vegan options, as well as a variety of Greek wines and beers to complement your meal.</p>
                        <p className="mt-4 text-lg">Whether you're looking for a quick lunch or a leisurely dinner, Kiki's Greek Tavern is the perfect place to enjoy a delicious meal in a warm and welcoming atmosphere. We look forward to serving you soon!</p>
                    </div>
                </div>
                <p className="mt-8 text-lg text-center">
                    <p className="text-lg">In the press:</p>
                    <h2 className="text-2xl font-bold mt-4">"The best Greek food in town!"</h2>
                    <p className="mt-4">- The New York Times</p>
                </p>
            </div>
        </div>
    )
}