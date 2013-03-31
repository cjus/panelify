/*!
 * jQuery Panelify plugin -- version 0.6
 * Creates a fancy collapsible panel with CSS3 effects
 * @author  Carlos Justiniano (carlos.justiniano@gmail.com)
 * Licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
   $.fn.panelify = function (options) {
      var defaults = {
         panelBodySelector: '.panelbody',        /* panel body class name */
         panelBorderStyle: 'solid 1px #ECECEC',   /* styling for panel border */
         panelMargin: '0 0 12px 0',                /* margin around panel */
         panelBackgroundColor: '#FFFFFF',         /* panel background color */
         panelTextColor: '#d3d3d3',               /* panel text color */
         panelOpen: true,                         /* panel initially open (true) or closed (false) */
         panelShadowEnabled: true,                /* enable or disable panel shadow */
         panelSlideSpeed: 400,                    /* panel animation speed */
         borderRadius: '.5em',                    /* border radius */
         panelTitleSelector: '.paneltitle',      /* panel title class name */
         panelTitleBorderStyle: 'solid 1px #BABABA', /* panel title boarder style */
         panelTitleShadeStart: '#D1D1D1',         /* Panel title start gradient color */
         panelTitleShadeEnd: '#BABABA',           /* Panel title end gradient color */
         panelTitleFontFamily: 'Helvetica, sans-serif', /* Panel title font */
         panelTitleFontSize: '16px',              /* default panel title font size */
         panelTitleFontWeight: 'bold',            /* default panel title font weight */
         panelTitleColor: '#333333'               /* default css color for panel title text */
      };
      options = $.extend(defaults, options);

      return this.each(function(i) {
         var $panel = $(this); // wrap current element in jQuery instance

         /* Set collapsible panel handler */
         $panel.children(options.panelTitleSelector).click(function() {
            $(this).siblings(options.panelBodySelector).slideToggle(options.panelSlideSpeed);
         });

         if (!options.panelOpen) {
            $panel.children(options.panelBodySelector).toggle();
         }

         $panel.css('margin', options.panelMargin)
            .css('-moz-border-radius', options.borderRadius)
            .css('-webkit-border-radius', options.borderRadius)
            .css('border-radius', options.borderRadius)
            .css('border', options.panelBorderStyle)
            .css('background', options.panelBackgroundColor)
            .css('color', options.panelTextColor);
         if (options.panelShadowEnabled) {
            $panel.css('-moz-box-shadow', '2px 2px 3px rgba(0, 0, 0, 0.3)')
               .css('-webkit-box-shadow', '2px 2px 3px rgba(0, 0, 0, 0.3)')
               .css('box-shadow', '2px 2px 3px rgba(0, 0, 0, 0.3)');
         }

         // style panel title
         var $panelTitle = $panel.children(options.panelTitleSelector);
         $panelTitle.css('cursor', 'pointer')
            .css('font-family', options.panelTitleFontFamily)
            .css('margin', '5px')
            .css('padding', '8px')
            .css('-moz-border-radius', options.borderRadius)
            .css('-webkit-border-radius', options.borderRadius)
            .css('border-radius', options.borderRadius)
            .css('border', options.panelTitleBorderStyle)
            .css('font-size', options.panelTitleFontSize)
            .css('font-weight', options.panelTitleFontWeight)
            .css('color', options.panelTitleColor)
            .css('background', '-webkit-gradient(linear, left top, left bottom, from(' + options.panelTitleShadeStart + '), to(' + options.panelTitleShadeEnd + '))')
            .css('background', '-moz-linear-gradient(top, ' + options.panelTitleShadeStart + ', ' + options.panelTitleShadeEnd + ')')
            .css('background', options.panelTitleShadeEnd)
            .css('filter', 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + options.panelTitleShadeStart + '", endColorstr="' + options.panelTitleShadeEnd + '")')
            .css('text-shadow', '1px 1px 2px rgba(0, 0, 0, 0.1)');
      });
   };
})(jQuery);
