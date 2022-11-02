(function($) {
    $(function() {
      
      $('div.tabs__caption').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    $(function() {
      
      $('div.tabs-title').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs-title-active').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);

const about_btn = document.querySelector('.read-about')
const tabs_about = document.querySelector('.tabs-about')
const about_btn1 = document.querySelector('.read-about1')
const tabs_about1 = document.querySelector('.tabs-about1')
const about_btn2 = document.querySelector('.read-about2')
const tabs_about2 = document.querySelector('.tabs-about2')
about_btn.addEventListener('click', () => {
  tabs_about.classList.toggle('active')
})
about_btn1.addEventListener('click', () => {
  tabs_about1.classList.toggle('active')
  // tabs_about.style = 'display: block'
})
about_btn2.addEventListener('click', () => {
  tabs_about2.classList.toggle('active')
  // tabs_about.style = 'display: block'
})