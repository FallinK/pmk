import ActivateAnim from "./activateAnim";

const options = { threshold: [0.3] };
const observerTarget = '.about';
const about = document.querySelector(observerTarget);
const animClass = 'swashIn'

const aboutAnim = new ActivateAnim(options, observerTarget, about, animClass);
aboutAnim.createObserver();