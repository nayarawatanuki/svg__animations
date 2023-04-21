class Cards {
    constructor() {

        this.sectionTipsPosition = document.getElementById("section-tips");
        this.card1 = document.querySelector(".card-1");
        this.card2 = document.querySelector(".card-2");
    }

    scrollCards() {

        window.requestAnimationFrame(this.calcScroll.bind(this));
    }

    calcScroll() {
        
        const position = this.sectionTipsPosition.getBoundingClientRect()["y"];

        if(position >= 25) {

            this.card1.style.transform = `translate(${((-position) + 25)/10}%)`;
            this.card2.style.transform = `translate(${((position) - 25)/10}%)`;
        }
    }
}

export { Cards }