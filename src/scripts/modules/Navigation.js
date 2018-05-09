export default class Navigation {
  constructor() {
    this.body = document.body;
    this.nav = document.getElementById('nav');
    this.navList = document.getElementById('nav-list');
    this.navLinks = Array.from(document.querySelectorAll('.navigation__link'));
    this.navToggle = document.getElementById('nav-toggle');
    this.events();
  }

  isNavListCollapsed() {
    return this.navList.classList.contains('navigation__list--collapsed');
  }

  toggleNav(event) {
    this.navList.classList.toggle('navigation__list--collapsed');
    event.stopPropagation();
  }

  hideNav() {
    this.navList.classList.remove('navigation__list--collapsed');
  }

  onNavLinkClick() {
    if (this.isNavListCollapsed) {
      this.hideNav();
    }
  }

  addBackgroundOnScroll() {
    if (window.scrollY > this.nav.clientHeight) {
      this.nav.classList.add('navigation--dark-bg');
    } else {
      this.nav.classList.remove('navigation--dark-bg');
    }
  }

  events() {
    this.navToggle.addEventListener('click', (event) => {
      this.toggleNav(event);
    });

    window.addEventListener('scroll', () => {
      this.addBackgroundOnScroll();
    });

    this.navLinks.forEach( (link) => {
      link.addEventListener('click', () => {
        this.onNavLinkClick();
      })
    })
  }
}