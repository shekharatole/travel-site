import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor (passedElements, appearPercentage){
        this.appearPercentage = appearPercentage;
        this.itemToReveal = passedElements;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            //console.log("Resizeeeee");
            this.browserHeight = window.innerHeight;
        }, 333))
    }

    calcCaller() {
        //console.log("Scrolled function");
        this.itemToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculatedIfScrolledTo(el);
            }
        })
    }

    calculatedIfScrolledTo(el) {   
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            //console.log("Element has calculated")     
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100; 
            // console.log(scrollPercent)
            if (scrollPercent < this.appearPercentage) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially(){
        this.itemToReveal.forEach(el => {
            el.classList.add("reveal-item") 
            el.isRevealed = false;
        })
        this.itemToReveal[this.itemToReveal.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;