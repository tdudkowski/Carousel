  // GET ELEMENTS
  const prevA = document.querySelector('.carousel-control-prev');
  const nextA = document.querySelector('.carousel-control-next');
  const slideList = document.querySelectorAll('.carousel-item');
  const dots = [...document.querySelectorAll('.carousel-indicators li')];
  let active = 0;

  // CHANGING DOT WHEN ARROWS ARE CLICKED
  const changeDot = () => {
   let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add('active');
  }

  // SLIDES
  const shiftSlide = () => {
   slideList.forEach(slide => slide.classList.remove('active'));
   slideList[active].classList.add('active');
   changeDot();
  }

  // CHANGING SLIDES WHEN INDICATORS ARE CLICKED
  const dotControl = function () {
   for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
     slideList.forEach(slide => slide.classList.remove('active'));
     slideList[i].classList.add('active');
     dots.forEach(dot => dot.classList.remove('active'));
     dots[i].classList.add('active');
     active = i;
    })
   }
  }

  const changeSlidePlus = () => {
   active++

   if (active == slideList.length) {
    active = 0;
   }
   shiftSlide();
  }

  const changeSlideMinus = () => {
   active--

   if (active < 0) {
    active = slideList.length - 1;
   }
   shiftSlide();
  }

  // CHANGING SLIDES WHEN KBS IS CLICKED
  const keyChangeSlide = (e) => {
   //left keyCode 37, right keyCode 39
   switch (e.keyCode) {
    case 37:
     active == 0 ? active = slideList.length - 1 : active--;
     break;
    case 39:
     active == slideList.length - 1 ? active = 0 : active++;
     break;
    default:
     console.log(e.keyCode, active);
   }
   shiftSlide();
  }

  // LOOPING LOKESH LIGHTBOX
  lightbox.option({
   'resizeDuration': 200,
   'wrapAround': true
  })

  // INITS
  dotControl();

  // LISTENERS
  nextA.addEventListener('click', changeSlidePlus);
  prevA.addEventListener('click', changeSlideMinus);
  window.addEventListener('keydown', keyChangeSlide);