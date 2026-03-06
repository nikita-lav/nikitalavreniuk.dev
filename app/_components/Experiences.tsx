'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { IExperienceClient } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FlatItem = {
    label: string;
    description: string[];
    techStack: string[];
    parentCompany?: string;
    jobTitle?: string;
    duration?: string;
};

// Precompute flat items and render structure at module level (data is static)
const flatItems: FlatItem[] = [];

type RenderEntry =
    | { type: 'regular'; exp: (typeof MY_EXPERIENCE)[0]; flatIndex: number }
    | {
          type: 'grouped';
          exp: (typeof MY_EXPERIENCE)[0];
          clients: { client: IExperienceClient; flatIndex: number }[];
      };

const renderEntries: RenderEntry[] = (() => {
    let fi = 0;
    return MY_EXPERIENCE.map((exp) => {
        if (exp.clients && exp.clients.length > 0) {
            const clients = exp.clients.map((client) => {
                flatItems.push({
                    label: client.name,
                    description: client.description,
                    techStack: client.techStack,
                    parentCompany: exp.company,
                    duration: exp.duration,
                });
                return { client, flatIndex: fi++ };
            });
            return { type: 'grouped' as const, exp, clients };
        } else {
            flatItems.push({
                label: exp.company,
                description: exp.description,
                techStack: exp.techStack,
                jobTitle: exp.title,
                duration: exp.duration,
            });
            return { type: 'regular' as const, exp, flatIndex: fi++ };
        }
    });
})();

const DescriptionContent = ({ item }: { item: FlatItem }) => (
    <>
        <p className="text-3xl font-semibold text-foreground mb-1">
            {item.jobTitle ?? item.label}
        </p>
        <p className="text-lg text-primary mb-4">
            {item.parentCompany
                ? `${item.parentCompany} · ${item.label}`
                : item.label}
            {item.duration ? ` · ${item.duration}` : ''}
        </p>
        <ul className="space-y-2 mb-6">
            {item.description.map((point, i) => (
                <li
                    key={i}
                    className="text-muted-foreground text-base flex gap-2 items-center"
                >
                    <span className="text-primary shrink-0">—</span>
                    <span>{point}</span>
                </li>
            ))}
        </ul>
        <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
                <span
                    key={tech}
                    className="text-sm px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                    {tech}
                </span>
            ))}
        </div>
    </>
);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const descRefs = useRef<(HTMLDivElement | null)[]>([]);
    const activeIndexRef = useRef<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleHover = (nextIndex: number) => {
        if (nextIndex === activeIndexRef.current) return;

        const currentDesc =
            activeIndexRef.current !== null ? descRefs.current[activeIndexRef.current] : null;
        const nextDesc = descRefs.current[nextIndex];

        // Kill any in-flight animations to prevent race conditions
        if (currentDesc) gsap.killTweensOf(currentDesc);
        if (nextDesc) gsap.killTweensOf(nextDesc);

        if (currentDesc) {
            gsap.to(currentDesc, { opacity: 0, y: -20, duration: 0.2, ease: 'power2.in' });
        }

        gsap.fromTo(
            nextDesc,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
        );

        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
    };

    const handleMouseLeave = () => {
        const idx = activeIndexRef.current;
        if (idx === null) return;
        const currentDesc = descRefs.current[idx];
        if (!currentDesc) return;
        gsap.killTweensOf(currentDesc);
        gsap.to(currentDesc, { y: -20, opacity: 0, duration: 0.3, ease: 'power2.in' });
        activeIndexRef.current = null;
        setActiveIndex(null);
    };

    const handleClick = (flatIndex: number) => {
        if (activeIndexRef.current === flatIndex) {
            // Toggle off — also animate right-column panel out
            const currentDesc = descRefs.current[flatIndex];
            if (currentDesc) {
                gsap.killTweensOf(currentDesc);
                gsap.to(currentDesc, { y: -20, opacity: 0, duration: 0.3, ease: 'power2.in' });
            }
            activeIndexRef.current = null;
            setActiveIndex(null);
        } else {
            handleHover(flatIndex);
        }
    };

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    {/* Left column — experience list */}
                    <div className="md:w-1/2 flex flex-col gap-10" onMouseLeave={handleMouseLeave}>
                        {renderEntries.map((entry) => {
                            if (entry.type === 'grouped') {
                                return (
                                    <div key={entry.exp.company} className="experience-item">
                                        <p className="text-xl text-muted-foreground">
                                            {entry.exp.company}
                                        </p>
                                        <p className="text-3xl sm:text-4xl font-anton leading-none mt-3.5 mb-2.5 text-muted-foreground">
                                            {entry.exp.title}
                                        </p>
                                        <p className="text-lg text-muted-foreground mb-4">
                                            {entry.exp.duration}
                                        </p>
                                        {/* Client sub-items */}
                                        <div className="flex flex-col gap-3 pl-4 border-l border-border">
                                            {entry.clients.map(({ client, flatIndex }) => (
                                                <div key={client.name}>
                                                    <p
                                                        className={`text-lg transition-colors duration-200 cursor-pointer ${
                                                            activeIndex === flatIndex
                                                                ? 'text-foreground'
                                                                : 'text-muted-foreground'
                                                        }`}
                                                        onMouseEnter={() => handleHover(flatIndex)}
                                                        onClick={() => handleClick(flatIndex)}
                                                    >
                                                        {client.name}
                                                    </p>
                                                    {/* Inline description — mobile only */}
                                                    <div
                                                        className={`md:hidden grid transition-all duration-300 ease-in-out ${
                                                            activeIndex === flatIndex
                                                                ? 'grid-rows-[1fr] mt-4'
                                                                : 'grid-rows-[0fr]'
                                                        }`}
                                                    >
                                                        <div className="overflow-hidden">
                                                            <DescriptionContent
                                                                item={flatItems[flatIndex]}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            const { exp, flatIndex } = entry;
                            return (
                                <div
                                    key={exp.company + exp.title}
                                    className="experience-item cursor-pointer"
                                    onMouseEnter={() => handleHover(flatIndex)}
                                    onClick={() => handleClick(flatIndex)}
                                >
                                    <p
                                        className={`text-xl transition-colors duration-200 ${
                                            activeIndex === flatIndex
                                                ? 'text-foreground'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {exp.company}
                                    </p>
                                    <p
                                        className={`text-3xl sm:text-4xl font-anton leading-none mt-3.5 mb-2.5 transition-colors duration-200 ${
                                            activeIndex === flatIndex
                                                ? 'text-foreground'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {exp.title}
                                    </p>
                                    <p
                                        className={`text-lg transition-colors duration-200 ${
                                            activeIndex === flatIndex
                                                ? 'text-foreground'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {exp.duration}
                                    </p>

                                    {/* Inline description — mobile only */}
                                    <div
                                        className={`md:hidden grid transition-all duration-300 ease-in-out ${
                                            activeIndex === flatIndex
                                                ? 'grid-rows-[1fr] mt-4'
                                                : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <DescriptionContent item={flatItems[flatIndex]} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right column — description panel (tablet/desktop only) */}
                    <div className="hidden md:block md:w-1/2 relative">
                        <div className="md:sticky md:top-24 min-h-64">
                            {flatItems.map((item, index) => (
                                <div
                                    key={item.label + index}
                                    ref={(el) => {
                                        descRefs.current[index] = el;
                                    }}
                                    className="absolute top-0 left-0 w-full opacity-0"
                                    style={{
                                        pointerEvents: index === activeIndex ? 'auto' : 'none',
                                    }}
                                >
                                    <DescriptionContent item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
