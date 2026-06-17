import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[55%_45%]">
          {/* Left Column */}
          <div className="space-y-12 lg:pr-8">
            <h2 className="font-sans text-[32px] font-medium leading-tight text-white md:text-[40px]">
              Woof - AI & Code <br /> Generator Website
            </h2>

            <div className="space-y-4">
              <h3 className="font-sans text-[20px] font-medium text-white">Subscribe newsletter</h3>
              <p className="font-sans text-[14px] text-gray-400">
                Sign up and get 15% discount on your first purchase
              </p>

              <div className="mt-2 flex w-full max-w-[420px] items-center rounded-xl border border-gray-600 bg-[#111111] p-1.5">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="w-full bg-transparent px-4 py-2 font-sans text-[14px] text-gray-100 placeholder:text-gray-500 focus:outline-none"
                />
                <button className="rounded-lg bg-[#bfff00] px-6 py-2 font-sans text-[14px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <p className="font-sans text-[14px] leading-relaxed text-gray-400">
              Offers cutting-edge solutions designed to help businesses leverage the power of artificial intelligence and machine learning. Whether you're just starting your AI journey or looking to scale existing capabilities, Woof provides tailored services.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#bfff00]" />
                <p className="font-sans text-[14px] leading-relaxed text-gray-400">
                  Woof Company, 234 East,<br /> 19th Street, St. louis 10001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[#bfff00]" />
                <p className="font-sans text-[14px] text-gray-400">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-[#2DD4BF] to-[#bfff00]" />
      
      <div className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row sm:px-10 lg:px-16 max-w-6xl">
        <div className="flex items-center gap-6">
          <span className="font-sans text-[14px] text-gray-400">Social Media</span>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white transition-colors hover:text-[#bfff00]" aria-label="Facebook">
              <Facebook className="h-5 w-5 fill-current" />
            </a>
            <a href="#" className="text-white transition-colors hover:text-[#bfff00]" aria-label="Twitter">
              <Twitter className="h-5 w-5 fill-current" />
            </a>
            <a href="#" className="text-white transition-colors hover:text-[#bfff00]" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 fill-current" />
            </a>
            <a href="#" className="text-white transition-colors hover:text-[#bfff00]" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="font-sans text-[14px] text-gray-400">
          Copyright © 2024 • Woof Company.
        </p>
      </div>
    </footer>
  )
}
