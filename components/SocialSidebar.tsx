'use client';
import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
};

const SocialSidebar = () => {
    return (
        <div className="max-xl:hidden fixed bottom-0 right-0 flex flex-col items-center gap-4 right-[2%]">
            {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.name.toLowerCase()];
                if (!Icon) return null;
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-all hover:text-foreground hover:-translate-y-1"
                        aria-label={link.name}
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
            <div className="w-px h-24 bg-muted-foreground" />
        </div>
    );
};

export default SocialSidebar;
