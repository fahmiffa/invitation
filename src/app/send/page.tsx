'use client';

import { useState } from 'react';

export default function home() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const text = "Assalamualaikum Warahmatullahi Wabarakatuh\n Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i Api & Istri untuk menghadiri acara kami.\nBerikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :\nhttps://undangan.qrana.biz.id/iroh-aji?to=apip-istri\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\nMohon maaf perihal undangan hanya di bagikan melalui pesan ini.\nDan agar selalu menjaga kesehatan bersama serta datang pada waktu yang telah ditentukan.*\nTerima kasih banyak atas perhatiannya.\nWassalamualaikum Warahmatullahi Wabarakatuh"
    const [message, setMessage] = useState(text);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();

        if (!phoneNumber.trim() || !message.trim()) {
            alert('Nomor dan pesan tidak boleh kosong');
            return;
        }

        const number = phoneNumber.replace(/\D/g, ''); // hanya angka
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">Kirim WhatsApp</h2>
            <form onSubmit={handleSend} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Tujuan (gunakan kode negara, contoh: 6281234567890)
                    </label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                        placeholder="628xxxxxxxxxx"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Isi Pesan
                    </label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-green-400"
                        value={message}
                        rows={8}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition"
                >
                    Kirim WhatsApp
                </button>
            </form>
        </div>
    );
}
