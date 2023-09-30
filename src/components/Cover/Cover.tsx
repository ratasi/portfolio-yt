"use client"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "./particleOptions"
import { Introduction } from "../Introduction"

export function Cover() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div id="cover">
            <Particles
                className="absolute w-full h-full translate-z-0"
                id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={optionsParticles} />
            <Introduction />
        </div>
    )
}
