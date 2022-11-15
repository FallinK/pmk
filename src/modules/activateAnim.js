export default class ActivateAnim {
	constructor (options, observerTargetText, observeElement, animClass) {
		this.observerTargetText = observerTargetText;
		this.animClass = animClass;
		this.options = options;
		this.observeElement = observeElement;
	}

	onEntry(entries) {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				document.querySelector(`${this.observerTargetText} > [class*="__container"]`).classList.add(this.animClass);
			}
		});
	}

	createObserver() {
		this.observer = new IntersectionObserver(this.onEntry.bind(this), this.options);
		this.observer.observe(this.observeElement);
	}
}