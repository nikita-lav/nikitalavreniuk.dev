'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const lenis = useLenis();
    const pathname = usePathname();

    // Restore saved scroll position (back navigation) or jump to top (forward navigation)
    // This runs while the page-transition overlay is still covering the screen,
    // so the user never sees the scroll jump.
    useEffect(() => {
        if (!lenis) return;

        const savedScroll = sessionStorage.getItem(`scroll-${pathname}`);
        if (savedScroll) {
            lenis.scrollTo(Number(savedScroll), { immediate: true });
            sessionStorage.removeItem(`scroll-${pathname}`);
        } else {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [lenis, pathname]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
            });
    });

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
