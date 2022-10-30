(function($) {
    $(function() {
      
      $('div.tabs__caption').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);