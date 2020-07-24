import '../styles/styles.css'
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}