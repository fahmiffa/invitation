'use client';
import {  roboto,  plus_jakarta_sans} from '@/font/fonts';
import { CheckIcon } from '@heroicons/react/20/solid'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Typewriter } from 'react-simple-typewriter';

const images = ["/one.png", "/two.png", "/one.png"];

const tiers = [
    {
        name: "Free",
        price: "0",
        description: "Paket Layanan gratis dengan fitur sebagai berikut",
        features: [
            "Live Undangan 3 Hari",
            "Limit 3 tema",
            "Tidak ada gallery image",
            "24 Jam Support service",
        ],
        featured: false,
        free: true,
    },
    {
        name: "Starter",
        price: "20K",
        description: "Paket Layanan starter dengan fitur sebagai berikut",
        features: [
            "Live Undangan 7 Hari",
            "tema undangan lebih dari 3",
            "8 Image Gallery & musik",
            "24 Jam Support service",
        ],
        featured: false,
        free: true,
    },
    {
        name: "Plus",
        price: "500k",
        description: "Paket Layanan plus dengan custom fitur sebagai berikut",
        features: [
            "Live Undangan 1 Bulan",
            "Custom link undangan (domain)",
            "Custom tema",
            "custom gallery image & musik",
            "24 Jam Support service",
        ],
        featured: true,
        free: true,
    }
];

 

export default function MainPage() {

    return (
        <>
            <div className="bg-white min-h-screen w-full flex items-center bg-cover" style={{ backgroundImage: `url(https://v3.tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png)` }}>
                <div className="flex-row md:flex mx-5 md:my-0 my-20 md:mx-20 space-y-5 md:space-y-0 md:space-x-4">
                    <div className="text-left w-full md:w-1/2 my-auto">
                        <h1 className={`text-4xl ${roboto.className} font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl`}>
                            <Typewriter
                                words={['Undangan Digital', 'Undangan Online', 'Undangan Website']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h1>
                        <div className={`${plus_jakarta_sans.className} my-8 text-[1.2rem]  text-[#053048]`}>
                            <p className='text-pretty'><span className={`${roboto.className} italic font-bold`}>Undangan elektronik </span> yang dibuat bentuk website dan dapat disebarkan melalui media digital, seperti pesan instan (WhatsApp, Telegram) dan media sosial.</p>
                            {/* <p className='text-pretty'>Undangan ini berfungsi sebagai alternatif modern dari undangan cetak</p> */}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-x-6">
                            <a target='_blank'
                                href="https://wa.me/6285640431181"
                                className="rounded-3xl bg-indigo-500 hover:bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ayo Mulai
                            </a>
                        </div>
                    </div>
                    <div className="justify-center items-center flex relative w-full md:w-1/2 md:mt-0 mt-10">
                        <div className="relative w-[250px] h-[450px] rounded-3xl bg-black shadow-2xl border-[9px] border-gray-900 overflow-hidden">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full z-10"></div>

                            <div className="absolute inset-0 bg-white">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    autoplay={{ delay: 3000 }}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    className="w-full h-full [&_.swiper-pagination]:hidden"
                                >
                                    {images.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={src}
                                                alt={`Undangan ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative isolate bg-[#F9F7F3] px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <p className={`${roboto.className} mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl`}>
                        Rayakan Momen Spesial dengan Sentuhan Digital
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                    Sebarkan kabar bahagia dengan cara yang lebih mudah dan efisien. Undangan digital, solusi modern yang tetap penuh makna dan keberkahan
                </p>
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50 px-4 py-10 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full p-10">
                        {tiers.map((tier, i) => (
                            <div
                                key={i}
                                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${tier.featured
                                    ? "bg-gray-900 text-white z-10 scale-105"
                                    : "bg-white text-gray-800"
                                    }`}
                            >
                                <h3
                                    className={`text-lg font-semibold ${tier.featured ? "text-indigo-300" : "text-indigo-500"
                                        }`}
                                >
                                    {tier.name}
                                </h3>
                                <div className="mt-2 text-4xl font-bold">
                                    {tier.price}

                                    {!tier.free && (
                                        <span className="text-base font-medium text-gray-400 ml-1">
                                            /months
                                        </span>
                                    )}
                                </div>
                                <p
                                    className={`mt-4 text-sm ${tier.featured ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    {tier.description}
                                </p>
                                <ul className="my-6 space-y-3 text-sm">
                                    {tier.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-2">
                                            <CheckIcon
                                                className={`w-4 h-4 flex-none ${tier.featured ? "text-indigo-400" : "text-indigo-600"
                                                    }`}
                                            />
                                            <span
                                                className={`${tier.featured ? "text-gray-300" : "text-gray-700"
                                                    }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <a target='_blank'
                                href="https://wa.me/6285640431181"
                                    className={`w-full p-2 rounded-md text-sm font-semibold transition ${tier.featured
                                        ? "bg-indigo-500 text-white hover:bg-indigo-700"
                                        : "border border-indigo-500 text-indigo-500 hover:bg-indigo-700 hover:text-white"
                                        }`}
                                >
                                    Get started today
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
