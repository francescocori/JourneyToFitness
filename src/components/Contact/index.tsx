export default function Contact() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="lg:w-2/5 space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl leading-tight text-primary">
              Contact us
            </h2>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-base-content"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="mailto:email@example.com"
                    className="text-base-content  hover:text-primary transition-colors duration-200 mt-2"
                  >
                    CarloLoPompa@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-base-content"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="tel:+15550000000"
                    className="text-base-content  hover:text-primary transition-colors duration-200 mt-2"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-base-content"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base-content/70  mt-2">
                    123 Dinosaur Street, London NSW 2000 AU
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="lg:w-3/5">
            <div className="rounded-lg h-96 lg:h-[500px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0!2d-0.1280!3d51.5120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b4d4b4d4b4%3A0x487604b4d4b4d4b4!2s32%20Endell%20St%2C%20London%20WC2H%209AG%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="32 Endell St, London WC2H 9AG Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
