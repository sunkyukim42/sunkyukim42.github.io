document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll('.slider');
  
    sliders.forEach(slider => {
      let currentIndex = 0;
      const slidesContainer = slider.querySelector('.slides');
      const slides = slider.querySelectorAll('.slide');
      const totalSlides = slides.length;
  
      function showSlide(index) {
        if (index < 0) {
          currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
          currentIndex = 0;
        } else {
          currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
  
      // 이벤트 리스너 등록 (버튼 클릭 시)
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');
  
      prevBtn.addEventListener('click', function () {
        showSlide(currentIndex - 1);
      });
  
      nextBtn.addEventListener('click', function () {
        showSlide(currentIndex + 1);
      });
  
      
    });
});
