!function(a){function b(b){var c=f.pageYOffset-2*a(b).height(),d=f.pageYOffset+f.innerHeight,e=a(b).offset().top;return e>=c&&d>=e}function c(){var c=0;a(f).on({scroll:function(){var e=c;c++;for(var f=a("img.lazy"),g=0;g<f.length&&e+1==c;g++){var h=f[g],i=a(h);b(i)&&d(i)}}}).trigger("scroll"),a.cycle(function(){a(f).trigger("scroll")},1e3,3e3)}function d(a){if(!a.attr("loaded")){var b=a.attr("_src");if(b){var c=new Image;c.onload=function(){a.attr("src",b).removeClass("lazy"),a.css({transition:"360ms",opacity:"1"})},c.src=b,a.attr("loaded",!0)}}}function e(){a("img.lazy").css("opacity","0.8"),c()}var f=window;a.fn.lazyImg=e,a.sun.define(function(b,c,d){d.exports=a})}($);