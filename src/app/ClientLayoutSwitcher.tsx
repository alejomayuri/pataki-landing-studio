'use client'

import { usePathname } from "next/navigation"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ChakraProvider } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode;
}

export default function ClientLayoutSwitcher({ children }: Props) {
    const pathname = usePathname();

    const hideGlobalLayout = pathname.startsWith('/demo1') || pathname.startsWith('/demo2') || pathname.startsWith('/demo3');
    const justDemo2 = pathname.startsWith('/demo2');

    if (justDemo2) {
        return <ChakraProvider>{children}</ChakraProvider>;
    }

    if (hideGlobalLayout) {
        return <>{children}</>;
    }

    return <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>;
}