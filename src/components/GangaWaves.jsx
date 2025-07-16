"use client";
import React, { lazy, Suspense, useEffect, useState } from 'react'
import waves from "@/lottie/ganga.json";



export default function GangaWaves() {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        setComponent(lazy(() => import('lottie-react')))
    }, []);

    return (
        <Suspense fallback={<></>}>
            {Component && <Component animationData={waves} loop={true} className={'w-[150%] absolute top-0 left-0'} />}
        </Suspense>
    );
};
