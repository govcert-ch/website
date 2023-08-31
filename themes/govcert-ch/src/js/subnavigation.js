/* ==========================================================
* subnavigation.js
* Sub-navigation scripts, handles mainly how the nav-page-list behaves on small
* screens
*
* modification to allow multiple sub navigations
*
* Author: GovCERT.ch outreach@govcert.ch
* Date: 2017-02-13 13:44
*
* Copyright 2017 GovCERT.ch 
* Licensed under MIT
========================================================== */

(function ($) {
    'use strict';

    subNavInit(jQuery);
    $(window).resize(function () {
        subNavInit(jQuery);
    });

    $('a[href^="#collapseSubNav"]').on('click', function () {
        $(this).attr('aria-expanded', ($(this).attr('aria-expanded') === 'true' ? 'false' : 'true'));
    });
})(jQuery);

function subNavInit($) {
    'use strict';
    var $drilldown = $('.drilldown[class*="col-"]');
    $drilldown
        .removeClass('collapse-enabled')
        .find('.drilldown-container')
        .removeClass('collapse in')
        .attr('id', '')
        .css({
            'height': 'auto'
        });

    if ($(window).width() <= 767 && !$drilldown.hasClass('collapse-enabled')) {
        $drilldown.each(function () {
            var
                $tmp = $(this).find('a').prop('href');
            var $nr = $tmp.substr($tmp.length - 2);
            $(this).addClass('collapse-enabled')
                .find('.drilldown-container').addClass('collapse').attr('id', 'collapseSubNav'.concat($nr));
        });
    } else if ($(window).width() > 767 && $drilldown.hasClass('collapse-enabled')) {
        $drilldown
            .removeClass('collapse-enabled')
            .find('.drilldown-container')
            .removeClass('collapse in')
            .attr('id', '')
            .css({
                'height': 'auto'
            });
    }
}