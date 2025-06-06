import { Merienda, Imperial_Script, Great_Vibes, Roboto, Inter, Plus_Jakarta_Sans, Cookie } from "next/font/google";

const merienda = Merienda({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});


const imperial = Imperial_Script({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-imperial',
    display: 'swap',
});

const great = Great_Vibes({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-great',
    display: 'swap',
});

const cookie = Cookie({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-great',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

export { merienda, great, roboto, imperial, inter, plus_jakarta_sans, cookie }