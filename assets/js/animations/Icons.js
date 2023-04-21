class Icons {

    constructor() {

        this.icons = document.querySelectorAll(".icon");
    }

    animateIcons() {

        // gsap.to(this.icons, {duration: 3, opacity: 0.5});

        gsap.to(this.icons, {duration: .5, scale: .95, repeat: -1, yoyo: true});
    }
}

export { Icons }