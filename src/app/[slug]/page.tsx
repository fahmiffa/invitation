import type { Metadata, ResolvingMetadata } from 'next';
import ZeroPage from './zeroPage';
import OnePage from './onePage';
import TwoPage from './twoPage';
import TeluPage from './teluPage';
import PapatPage from './papatPage';

// const domain = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const domain = process.env.NEXT_PUBLIC_BASE_URL || "https://undangan.qrana.biz.id";

type Props = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug
    console.log("slug", slug)
    console.log(params.slug)

    try {
        const res = await fetch(`${domain}/data.json`);
        const data = await res.json();

        const found = data.find((item: any) => item.name === slug);

        if (!found) {
            return {
                title: 'Page Not Found',
                description: 'Data tidak ditemukan.',
            };
        }

        return {
            title: `The Wedding Of ${found.men} & ${found.man}`,
            description: `${found.event_date}`,
            icons: {
                icon: "/window.svg",
            },
            openGraph: {
                title: `The Wedding Of ${found.men} & ${found.man}`,
                description: "Undangan Pernikahan Online, Hadir dan beri doa terbaik untuk kami.",
                url: `${domain}/${slug}`,
                type: "website",
                images: [
                    {
                        url: `${domain}/data/${found.name}/home.jpg`,
                        width: 1200,
                        height: 630,
                        alt: "Preview Undangan",
                    },
                ],
            },
        };
    } catch (err) {
        return {
            title: 'Error loading metadata',
        };
    }
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug
    try {
        const res = await fetch(`${domain}/data.json`);
        const data = await res.json();
        const found = data.find((item: any) => item.name === slug);

        if (found.status != 1) {
            return <div className="min-h-screen flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <h1 className="text-3xl font-bold dark:text-white">
                    Oppss...
                </h1>
            </div>
        }

        if (found.tem == 0)
            return <ZeroPage data={found} />
        if (found.tem == 1)
            return <OnePage data={found} />
        if (found.tem == 2)
            return <TwoPage data={found} />
        if (found.tem == 3)
            return <TeluPage data={found} />
        if (found.tem == 4)
            return <PapatPage data={found} />

    } catch (err) {
        return <div className='h-screen flex items-center justify-center text-7xl font-bold'></div>;
    }
}

