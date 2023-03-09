new GetDate('.today-date');
new Timer('.countdown', { seconds: 383 });

class Modal {
  constructor(modalSelector, closerSelector, openerSelector, activeClass = 'active', transition = 300) {
    this.modal = document.querySelector(modalSelector);
    this.closer = document.querySelector(closerSelector);
    this.openers = document.querySelectorAll(openerSelector);
    this.activeClass = activeClass;
    this.transition = transition;

    this.init();
  }

  show(event) {
    event.preventDefault();
    this.modal.style.display = 'block';

    const timer = setTimeout(() => {
      this.modal.classList.add(this.activeClass);
      clearTimeout(timer);
    });
  }

  hide() {
    this.modal.classList.remove(this.activeClass);

    const timer = setTimeout(() => {
      this.modal.style.display = 'none';
      clearTimeout(timer);
    }, this.transition);
  }

  addOpener(openerSelector) {
    document.querySelectorAll(openerSelector).forEach((item) => {
      item.addEventListener('click', (event) => this.show(event));
    });
  }

  init() {
    this.closer.addEventListener('click', () => this.hide());
    this.openers.forEach((opener) => opener.addEventListener('click', (event) => this.show(event)));
  }
}

new Modal('.modal--disclaimer', '.modal__close', '.risk-link');
