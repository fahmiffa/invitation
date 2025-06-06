'use client';
import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from 'react';
import { merienda, roboto, inter, plus_jakarta_sans, cookie } from '@/font/fonts';
import Image from 'next/image';

import LightboxGallery from '@/component/LightboxGallery';

const imageUrls = [
    "/home.jpg",
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",

];

export default function Home() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [config, setConfig] = useState<any>(null);

    const [showNav, setShowNav] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setConfig(data);
            });
    }, []);

    useEffect(() => {
        const onScroll = () => setShowNav(window.scrollY > 100);
        window.addEventListener('scroll', onScroll);
        document.documentElement.style.scrollBehavior = "smooth";
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isLightboxOpen]);


    useEffect(() => {
        if (!config || !config.event_run) return;

        const targetDate = new Date(config.event_run + 'T00:00:00');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                return;
            }

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((distance / (1000 * 60)) % 60));
            setSeconds(Math.floor((distance / 1000) % 60));
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [config]);

    if (config === null) return;

    return (
        <div className='relative flex items-center'>
            <div className={`${plus_jakarta_sans.className} md:hidden`}>
                {!isOpen ?
                    (
                        <div className="relative">
                            <div
                                className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/cvbb-scaled-1-1-6-1.jpg')" }}
                            ></div>
                            <div className="relative z-10 h-screen py-30 text-black text-center">
                                <div className="relative w-40 h-60 mx-auto my-3 shadow-md rounded-2xl overflow-hidden">
                                    <Image
                                        src="/home.jpg"
                                        alt="home"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className={`${merienda.className} flex items-center gap-2 justify-center font-normal text-xl`}>
                                    <div>{config.nick_man}</div>
                                    <div>&</div>
                                    <div>{config.nick_men}</div>
                                </div>
                                <p className={`${roboto.className} text-sm font-semibold tracking-tight`}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
                                <p className="text-xl font-semibold tracking-wider my-3">Tamu</p>
                                <p className="text-xs text-pretty mb-3">Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="hover:bg-[#7c6533c0] flex items-center font-semibold mx-auto gap-2 bg-[#7C6533] text-white py-2 px-4 rounded-full my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                        <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                    </svg>
                                    Buka Undangan
                                </button>
                                <div className="text-xs pretty">Mohon maaf apabila ada kesalahan penulisan nama/gelar</div>

                            </div>
                        </div>
                    )
                    : (
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative" id="home">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: "url('/top.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 h-screen py-30 text-black text-center">
                                        <h1 className={`${cookie.className} font-bold text-5xl`}>Save The Date</h1>
                                        <p className={`${roboto.className} font-semibold text-balance leading-tight text-xl`}>You're invited <br></br> to the wedding of</p>
                                        <div className="relative w-40 h-48 mx-auto my-3 shadow-md rounded-2xl overflow-hidden">
                                            <Image
                                                src="/home.jpg"
                                                alt="home"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className={`${merienda.className} flex items-center gap-2 justify-center font-normal text-2xl`}>
                                            <div>{config.nick_man}</div>
                                            <div>&</div>
                                            <div>{config.nick_men}</div>
                                        </div>
                                        <p className="font-semibold text-sm my-3">{config.event_date}</p>
                                        <div className="flex gap-2 justify-center">
                                            <div className="bg-[#5E4717] text-white w-16 h-16 rounded-xl flex flex-col items-center justify-center">
                                                <span className="text-lg font-bold leading-4">{days}</span>
                                                <span className="text-sm">Hari</span>
                                            </div>
                                            <div className="bg-[#5E4717] text-white w-16 h-16 rounded-xl flex flex-col items-center justify-center">
                                                <span className="text-lg font-bold leading-4">{hours}</span>
                                                <span className="text-sm">Jam</span>
                                            </div>
                                            <div className="bg-[#5E4717] text-white w-16 h-16 rounded-xl flex flex-col items-center justify-center">
                                                <span className="text-lg font-bold leading-4">{minutes}</span>
                                                <span className="text-sm">Menit</span>
                                            </div>
                                            <div className="bg-[#5E4717] text-white w-16 h-16 rounded-xl flex flex-col items-center justify-center">
                                                <span className="text-lg font-bold leading-4">{seconds}</span>
                                                <span className="text-sm">Detik</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full"
                                        style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/cvbb-scaled-1-1-6-1.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 py-36 text-black text-center flex items-center justify-center">
                                        <p className="text-pretty mx-5 font-light tracking-tight">“Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu Benar-benar Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir”
                                            `{'{Q.S : Ar-Rum : 21 } '}`  </p>
                                    </div>
                                </div>
                                <div className="relative" id="couple">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/xxvb-scaled-1-1-1.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 py-10 text-black text-center">
                                        <p className="text-warp text-balance mx-3 tracking-tighter">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Acara
                                            Pernikahan Kami</p>
                                        <div className="relative w-32 h-40 mx-auto my-5 shadow-md rounded-2xl overflow-hidden">
                                            <Image
                                                src="/men.jpg"
                                                alt="wanita"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>

                                        <div className="my-3">
                                            <h1 className={`${merienda.className} text-2xl`}>{config.men}</h1>
                                            <div className="font-bold text-sm">{config.parent_men}</div>
                                            <p className="text-sm">{config.addr_men}</p>
                                        </div>
                                        <div className="my-3">
                                            <h1 className={`${merienda.className} text-2xl`}>&</h1>
                                        </div>
                                        <div className="relative w-32 h-40 mx-auto my-5 shadow-md rounded-2xl overflow-hidden">
                                            <Image
                                                src="/man.jpg"
                                                alt="wanita"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                        <div className="my-3">
                                            <h1 className={`${merienda.className} text-2xl`}>{config.man}</h1>
                                            <div className="font-bold text-sm">{config.parent_man}</div>
                                            <p className="text-sm">{config.addr_man}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" id="date">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/cvbb-scaled-1-1-6-1.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 py-40 text-black text-center">
                                        <p className="my-3">Insya Allah Acara Akan Dilaksanakan Pada :</p>
                                        <div className="relative w-20 h-20 mx-auto my-5 shadow-md rounded-2xl overflow-hidden">
                                            <Image
                                                src="/cal.png"
                                                alt="wanita"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                        <h1 className={`${cookie.className} text-5xl mb-3`}>Akad Nikah</h1>
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                            <p className="ml-3 text-black">
                                                {config.ijab_date}</p>
                                        </div>
                                        <div className="flex items-center justify-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <p className="ml-3 text-black">
                                                {config.ijab_time}</p>
                                        </div>

                                        <div className="font-bold">Bertempat </div>
                                        <p className="text-pretty">{config.event_place}</p>
                                        <p className="text-sm mb-3">{config.addr_men}</p>

                                        <h1 className={`${cookie.className} font-bold text-5xl mb-3`}>Resepsi</h1>
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                            <p className="ml-3 text-black">
                                                {config.event_date}</p>
                                        </div>
                                        <div className="flex items-center justify-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                            <p className="ml-3 text-black">
                                                {config.event_time}</p>
                                        </div>
                                        <div className="font-bold">Bertempat </div>
                                        <p className="text-pretty">{config.event_place} {config.addr_men}</p>

                                        <a target="_blank" href={config.loc} className="w-40 text-sm flex items-center mx-auto gap-2 bg-[#7C6533] text-white font-semibold py-2 px-4 rounded-2xl my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            Buka Lokasi
                                        </a>
                                    </div>

                                </div>
                                <div className="relative" id="gallery">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/xxvb-scaled-1-1-1.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 py-10 text-black text-center">
                                        <div className={`${merienda.className} text-3xl`}>Wedding Gallery</div>
                                        <LightboxGallery images={imageUrls} isOpen={isLightboxOpen}
                                            setIsOpen={setIsLightboxOpen} />
                                    </div>
                                </div>
                                <div className="relative" id="gift">
                                    <div
                                        className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: "url('https://kumengundangmu.web.id/wp-content/uploads/2025/04/cvbb-scaled-1-1-6-1.jpg')" }}
                                    ></div>
                                    <div className="relative z-10 h-screen py-10 text-black text-center">
                                        <h1 className={`${merienda.className} text-3xl`}>Wedding Gift</h1>
                                        <p className="text-balance my-3">
                                            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                                            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                                        </p>
                                        <div className="relative w-20 h-20 mx-auto overflow-hidden">
                                            <Image fill alt="bca" src="https://www.svgrepo.com/show/303676/bca-bank-central-asia-logo.svg" className="h-[5%] w-[30%] object-cover mx-auto" />

                                        </div>
                                        <div>Dwi aji Saputra BCA <span className="font-bold">1310704667</span></div>
                                        <div className="relative w-20 h-20 mx-auto overflow-hidden">
                                            <Image fill alt="bri" src="https://logotyp.us/file/bri.svg" className="h-[5%] w-[40%] object-cover mx-auto my-3" />

                                        </div>
                                        <div>Mastiroh BRI <span className="font-bold">106101018792507</span></div>

                                        <p className="text-balance my-3">
                                            Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk Memberikan Do’a Restu Kepada Kami
                                        </p>
                                        <div className="relative w-32 h-40 mx-auto my-5 shadow-md rounded-2xl overflow-hidden">
                                            <Image
                                                src="/home.jpg"
                                                alt="wanita"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                        <div className={`${merienda.className} flex items-center gap-2 justify-center font-normal text-2xl`}>
                                            <div>{config.men}</div>
                                            <div>&</div>
                                            <div>{config.man}</div>
                                        </div>
                                        <p className="font-semibold text-sm my-3">{config.event_date}</p>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                {showNav &&
                    <div className={`${isLightboxOpen ? 'z-5' : 'z-50'} fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#7C6533] text-white backdrop-blur-md px-4 py-2 rounded-xl shadow-lg`}>

                        <a href="#home" className="p-2 rounded-md transition">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
                            </svg>
                        </a>

                        <a href="#couple" className="p-2 rounded-md transition">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                            </svg>
                        </a>

                        <a href="#gallery" className="p-2 rounded-md transition">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clipRule="evenodd" />
                            </svg>
                        </a>

                        <a href="#gift" className="p-2 rounded-md transition">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clipRule="evenodd" />
                            </svg>

                        </a>


                    </div>
                }
            </div>
            <div className={`${inter.className} hidden md:flex w-full h-screen my-auto justify-evenly bg-gray-100 text-black items-center`}>
                <div className="leading-0">
                    <p className={`${merienda.className} text-3xl`}>The Wedding Of {config.men} & {config.man}</p>
                </div>
                <div className="relative w-[320px] h-[600px] bg-white border-[15px] border-black rounded-[2.5rem] shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg z-10"></div>
                    <iframe
                        src="/"
                        className="w-[100%] h-full border-none"
                        sandbox="allow-same-origin allow-scripts allow-forms"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </div >
    );
}
