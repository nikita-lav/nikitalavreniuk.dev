import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-0 flex flex-col items-center gap-4 left-[2%]">
            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="text-muted-foreground tracking-[1px] transition-all hover:text-foreground hover:-translate-y-1"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
            <div className="w-px h-24 bg-muted-foreground" />
        </div>
    );
};

export default StickyEmail;
