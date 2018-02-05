jQuery(function($) {
  var resizeIframes = function resizeIframes() {
    $('.video-container:visible').each(function () {
      var $container = $(this);
      var $panel = $container.parent();
      var panelWidth = $panel.width();
      var panelHeight = $panel.height();

      var aspectRatio = panelWidth / panelHeight;
      var targetAspectRatio = 1920 / 1080;

      var width, height;
      if (aspectRatio > targetAspectRatio) {
        width = panelWidth;
        height = Math.ceil(panelWidth / targetAspectRatio);
      } else {
        height = panelHeight;
        width = Math.ceil(panelHeight * targetAspectRatio);
      }

      $container.find('> iframe').attr({
        width: width,
        height: height
      });
    });
  };

  $(window).on('resize.id7.homepage', resizeIframes);
  $(window).on('load', resizeIframes);
  resizeIframes();
});