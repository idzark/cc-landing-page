import Siema from 'siema';
import Navigation from './modules/Navigation';

const navigation = new Navigation();

const testimonialsCarousel = new Siema({
  selector: '.testimonials',
  duration: 250,
  loop: true,
  onChange: onTestimonialSlideChange
});

const screenshotsCarousel = new Siema({
  selector: '.screenshots',
  duration: 250,
  perPage: 1,
  loop: true,
  onChange: onScreenShotSlideChange
});


function onTestimonialSlideChange() {
  const currentSlide = this.currentSlide;
  makeControlActive('.slider__control--testimonial', 'slider__control--testimonial-active', currentSlide);
}

function onScreenShotSlideChange() {
  const currentSlide = this.currentSlide;
  makeControlActive('.slider__control--screenshot', 'slider__control--screenshot-active', currentSlide);
}

function makeControlActive(controlSelector, activeClass, currentSlide) {
  const controlsArray = Array.from(document.querySelectorAll(controlSelector));
  const currentActiveSlideControl = controlsArray[currentSlide];
  const activeControl = document.querySelector('.' + activeClass);
  activeControl.classList.remove(activeClass);
  currentActiveSlideControl.classList.add(activeClass);
}

Siema.prototype.addControls = function(controlSelector, activeClass) {
  const controlsArray = Array.from(document.querySelectorAll(controlSelector));
  const currentSlideControl = controlsArray[this.currentSlide];
  currentSlideControl.classList.add(activeClass);

  controlsArray.forEach( (control, index) => {
    control.addEventListener('click', () => {
      const activeControl = document.querySelector('.' + activeClass);
      if (index != this.currentSlide) {
        activeControl.classList.remove(activeClass);
      }
      control.classList.add(activeClass);
      this.goTo(index);
    });
  }); 
}

Siema.prototype.addAutoplay = function() {
  setInterval(() => {
    this.next();
  }, 5000);
}

testimonialsCarousel.addControls('.slider__control--testimonial', 'slider__control--testimonial-active');
testimonialsCarousel.addAutoplay();
screenshotsCarousel.addControls('.slider__control--screenshot', 'slider__control--screenshot-active');
screenshotsCarousel.addAutoplay();
