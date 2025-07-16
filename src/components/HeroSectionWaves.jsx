"use client";
import React, { lazy, Suspense, useEffect, useState } from 'react'
import waves from "@/lottie/waves.json";



export default function HeroSectionWaves() {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        setComponent(lazy(() => import('lottie-react')))
    }, []);

    return (
        <Suspense fallback={<></>}>
            {Component && <Component animationData={waves} loop={true} className={'opacity-[0.7]'} />}
        </Suspense>
    );
};
