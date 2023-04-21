import { Cards } from "./animations/Cards.js";
import { Icons } from "./animations/Icons.js";
import { Footer } from "./animations/Footer.js";

window.onload = () => {

    const animateCards = new Cards();

    document.addEventListener("scroll", animateCards.scrollCards.bind(animateCards));


    const icons = new Icons();

    icons.animateIcons();


    const footer = new Footer();

    footer.waveEffect();
}