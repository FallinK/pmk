import ActivateAnim from "./activateAnim";

const options = { threshold: [0.5] };
const observerTarget = '.terms';
const terms = document.querySelector(observerTarget);
const animClass = 'swashIn';

const termsAnim = new ActivateAnim(options, observerTarget, terms, animClass);
termsAnim.createObserver();
