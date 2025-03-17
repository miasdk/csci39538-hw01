import ContactForm from "../../components/ContactForm";
export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg p-5">
                            Have a question or feedback for us? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                        <ContactForm />
                    </div>
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
                </div>
            </div>
        </div>
    );
    }

