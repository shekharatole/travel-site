import '../styles/styles.css'
import 'lazysizes';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';
import StickyHeader from './StickyHeader';
import ClientArea from './ClientArea';

new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20);
      }).catch(() => console.log("There is a problem..!"))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}