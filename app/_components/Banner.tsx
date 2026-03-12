'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start md:max-w-[700px] lg:max-w-[770px]">
                    <h1 className="banner-title slide-up-and-fade leading-[1.05] text-5xl sm:text-7xl lg:text-[90px] font-anton text-primary">
                        Nikita Lavreniuk
                    </h1>
                    <h2 className="banner-subtitle slide-up-and-fade leading-[1.1] text-3xl sm:text-5xl lg:text-[52px] font-anton text-muted-foreground mt-4">
                        I build SaaS products, dashboards, AI features, and integrations.
                    </h2>
                    <p className="banner-description slide-up-and-fade mt-8 text-lg text-muted-foreground max-w-[540px]">
                        Senior full-stack developer. 6+ years shipping for enterprise brands through Valtech and fast-moving startups. I take your idea from architecture to production — and make sure it actually works at scale.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
