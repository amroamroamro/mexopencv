(function($) {
    'use strict';

    $(document).ready(function() {
        // close responsive menu when a scroll trigger anchor link is clicked
        // (collapsible menu is shown in small screen sizes)
        $('.js-scroll-trigger').click(function() {
            $('.navbar-collapse').collapse('hide');
        });

        // activate scrollspy to add "active" class to navbar items on scroll
        // (shows current opencv/opencv_contrib module)
        if ($('#dropdownModules').length) {
            $('body').scrollspy({
                target: '#dropdownModules',
                offset: 56
            });
        }
    });
})(jQuery);
