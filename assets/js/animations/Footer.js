class Footer {

    constructor() {

        this.turbulenceFilter = document.getElementById("turbulence-filter");
    }

    waveEffect() {

        gsap.to(this.turbulenceFilter, {duration: 20, 
            attr: {
                baseFrequency: .03,
            },
            repeat: -1, 
            yoyo: true
        });
    }
}

export { Footer }