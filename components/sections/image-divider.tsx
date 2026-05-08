"use client";

import React from 'react';

export const ImageDivider = () => {
    return (
        <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://framerusercontent.com/images/fcNYJB1ILGKdiVjwd2jVklAOmkk.webp?width=1920&height=800"
                    alt=""
                    className="block w-full h-full object-cover object-center select-none pointer-events-none"
                    draggable="false"
                    loading="lazy"
                />
            </div>
            {/* Blending gradients to transition between dark sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        </div>
    );
};
