'use client';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-in',
          trigger: container.current,
          start: 'top 70%',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up-and-fade', {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    {scope: container},
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-out',
          trigger: container.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 0.5,
        },
      });

      tl.to('.slide-up-and-fade', {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    {scope: container},
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          Your idea deserves more than working code. It deserves a
          product that&apos;s fast, polished, and built to last.
        </h2>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <div className="slide-up-and-fade">
              <Image
                src="/nikita.webp"
                alt="Nikita Lavreniuk"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full max-w-[360px]"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[500px]">
              <p className="slide-up-and-fade">
                I build things the right way. Full-stack, end-to-end — from database schema to the button your users
                click. Over 6 years I've delivered SaaS platforms, enterprise e-commerce (Mitchell & Butlers' restaurant
                network through Valtech), AI-powered applications, and analytics dashboards used daily by real
                businesses.
              </p>
              <p className="mt-3 slide-up-and-fade">
                What I've learned working across consultancies and startups? The code is the easy part. The hard part is
                understanding what you actually need, being honest about timelines, and making smart trade-offs when
                things get complex. I do all three.
              </p>
              <p className="mt-3 slide-up-and-fade">
                I don't disappear after the kickoff call. You'll get honest updates, early flags when something
                isn't right, and the kind of communication that makes working remotely feel effortless. I've been the
                embedded developer in large agency teams and the sole engineer building a product from scratch — either
                way, my goal is the same: by the end of our work together, the product should be better than you
                expected, and the process should have felt easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
