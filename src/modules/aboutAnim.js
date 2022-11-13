function onEntry(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.about > [class*="__container"]').classList.add('swashIn');
    }
  });
}
let options = { threshold: [0.5] };
let aboutObserver = new IntersectionObserver(onEntry, options);
let about = document.querySelector('.about');
aboutObserver.observe(about);