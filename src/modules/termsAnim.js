function onEntry(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.terms > [class*="__container"]').classList.add('swashIn');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let terms = document.querySelector('.terms');
observer.observe(terms);