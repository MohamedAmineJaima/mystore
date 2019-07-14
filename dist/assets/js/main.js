(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _homeSlider = require('../../components/home-slider/home-slider.js');

var _homeSlider2 = _interopRequireDefault(_homeSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

	//Functions

	(0, _homeSlider2.default)();
});

},{"../../components/home-slider/home-slider.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    $('.banner-carousel.owl-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // Twitter: @mikedevelops

    // your custome placeholder goes here!
    var ph = $('.input--search').attr('placeholder'),
        searchBar = $('.input--search'),

    // placeholder loop counter
    phCount = 0;

    // function to return random number between
    // with min/max range
    function randDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function to print placeholder text in a
    // 'typing' effect
    function printLetter(string, el) {
        // split string into character seperated array
        var arr = string.split(''),
            input = el,

        // store full placeholder
        origString = string,

        // get current placeholder value
        curPlace = $(input).attr("placeholder"),

        // append next letter to current placeholder
        placeholder = curPlace + arr[phCount];

        setTimeout(function () {
            // print placeholder text
            $(input).attr("placeholder", placeholder);
            // increase loop count
            phCount++;
            // run loop until placeholder is fully printed
            if (phCount < arr.length) {
                printLetter(origString, input);
            } else {

                setTimeout(function () {

                    ph = $('.input--search').attr('placeholder');
                    searchBar = $('.input--search');
                    // placeholder loop counter
                    phCount = 0;
                    placeholderFunc();
                }, 1500);
            }
            // use random speed to simulate
            // 'human' typing
        }, randDelay(90, 120));
    }

    // function to init animation
    function placeholderFunc() {
        $(searchBar).attr("placeholder", "");
        printLetter(ph, searchBar);
    }

    placeholderFunc();
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiLCJzcmMvY29tcG9uZW50cy9ob21lLXNsaWRlci9ob21lLXNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTs7QUFFN0I7O0FBRUE7QUFDQSxDQUxEOzs7Ozs7Ozs7a0JDRmUsWUFBWTtBQUMxQixNQUFFLCtCQUFGLEVBQW1DLFdBQW5DLENBQStDO0FBQzlDLGtCQUFVLElBRG9DO0FBRTNDLGNBQU0sSUFGcUM7QUFHM0MsY0FBTSxJQUhxQztBQUkzQyxnQkFBUSxFQUptQztBQUszQyxvQkFBWTtBQUNSLGVBQUc7QUFDQyx1QkFBTztBQURSO0FBREs7QUFMK0IsS0FBL0M7O0FBWUE7O0FBRUc7QUFDQSxRQUFJLEtBQUssRUFBRSxnQkFBRixFQUFvQixJQUFwQixDQUF5QixhQUF6QixDQUFUO0FBQUEsUUFDSSxZQUFZLEVBQUUsZ0JBQUYsQ0FEaEI7O0FBRUk7QUFDQSxjQUFVLENBSGQ7O0FBS0E7QUFDQTtBQUNBLGFBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QjtBQUMzQixlQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFJLEdBQUosR0FBUSxDQUF6QixJQUE0QixHQUF2QyxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLGFBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixFQUE3QixFQUFpQztBQUMvQjtBQUNBLFlBQUksTUFBTSxPQUFPLEtBQVAsQ0FBYSxFQUFiLENBQVY7QUFBQSxZQUNJLFFBQVEsRUFEWjs7QUFFSTtBQUNBLHFCQUFhLE1BSGpCOztBQUlJO0FBQ0EsbUJBQVcsRUFBRSxLQUFGLEVBQVMsSUFBVCxDQUFjLGFBQWQsQ0FMZjs7QUFNSTtBQUNBLHNCQUFjLFdBQVcsSUFBSSxPQUFKLENBUDdCOztBQVNBLG1CQUFXLFlBQVU7QUFDbkI7QUFDQSxjQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsYUFBZCxFQUE2QixXQUE3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFJLFVBQVUsSUFBSSxNQUFsQixFQUEwQjtBQUN4Qiw0QkFBWSxVQUFaLEVBQXdCLEtBQXhCO0FBQ0QsYUFGRCxNQUVPOztBQUVMLDJCQUFXLFlBQVc7O0FBRXBCLHlCQUFLLEVBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsYUFBekIsQ0FBTDtBQUNBLGdDQUFZLEVBQUUsZ0JBQUYsQ0FBWjtBQUNBO0FBQ0EsOEJBQVUsQ0FBVjtBQUNBO0FBRUQsaUJBUkQsRUFRRyxJQVJIO0FBVUQ7QUFDRDtBQUNBO0FBQ0QsU0F2QkQsRUF1QkcsVUFBVSxFQUFWLEVBQWMsR0FBZCxDQXZCSDtBQXdCRDs7QUFFRDtBQUNBLGFBQVMsZUFBVCxHQUEyQjtBQUN6QixVQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLGFBQWxCLEVBQWlDLEVBQWpDO0FBQ0Esb0JBQVksRUFBWixFQUFnQixTQUFoQjtBQUNEOztBQUVEO0FBRUgsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBob21lU2xpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS1zbGlkZXIvaG9tZS1zbGlkZXIuanMnXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vRnVuY3Rpb25zXHJcblxyXG5cdGhvbWVTbGlkZXIoKVxyXG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcblx0JCgnLmJhbm5lci1jYXJvdXNlbC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHQgICAgbG9vcDogdHJ1ZSxcclxuXHQgICAgZG90czogdHJ1ZSxcclxuXHQgICAgbWFyZ2luOiAxMCxcclxuXHQgICAgcmVzcG9uc2l2ZToge1xyXG5cdCAgICAgICAgMDoge1xyXG5cdCAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblx0fSk7XHJcblxyXG5cdC8vIFR3aXR0ZXI6IEBtaWtlZGV2ZWxvcHNcclxuXHJcbiAgICAvLyB5b3VyIGN1c3RvbWUgcGxhY2Vob2xkZXIgZ29lcyBoZXJlIVxyXG4gICAgdmFyIHBoID0gJCgnLmlucHV0LS1zZWFyY2gnKS5hdHRyKCdwbGFjZWhvbGRlcicpLFxyXG4gICAgICAgIHNlYXJjaEJhciA9ICQoJy5pbnB1dC0tc2VhcmNoJyksXHJcbiAgICAgICAgLy8gcGxhY2Vob2xkZXIgbG9vcCBjb3VudGVyXHJcbiAgICAgICAgcGhDb3VudCA9IDA7XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlblxyXG4gICAgLy8gd2l0aCBtaW4vbWF4IHJhbmdlXHJcbiAgICBmdW5jdGlvbiByYW5kRGVsYXkobWluLCBtYXgpIHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKzEpK21pbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdG8gcHJpbnQgcGxhY2Vob2xkZXIgdGV4dCBpbiBhXHJcbiAgICAvLyAndHlwaW5nJyBlZmZlY3RcclxuICAgIGZ1bmN0aW9uIHByaW50TGV0dGVyKHN0cmluZywgZWwpIHtcclxuICAgICAgLy8gc3BsaXQgc3RyaW5nIGludG8gY2hhcmFjdGVyIHNlcGVyYXRlZCBhcnJheVxyXG4gICAgICB2YXIgYXJyID0gc3RyaW5nLnNwbGl0KCcnKSxcclxuICAgICAgICAgIGlucHV0ID0gZWwsXHJcbiAgICAgICAgICAvLyBzdG9yZSBmdWxsIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICBvcmlnU3RyaW5nID0gc3RyaW5nLFxyXG4gICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgcGxhY2Vob2xkZXIgdmFsdWVcclxuICAgICAgICAgIGN1clBsYWNlID0gJChpbnB1dCkuYXR0cihcInBsYWNlaG9sZGVyXCIpLFxyXG4gICAgICAgICAgLy8gYXBwZW5kIG5leHQgbGV0dGVyIHRvIGN1cnJlbnQgcGxhY2Vob2xkZXJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gY3VyUGxhY2UgKyBhcnJbcGhDb3VudF07XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gcHJpbnQgcGxhY2Vob2xkZXIgdGV4dFxyXG4gICAgICAgICQoaW5wdXQpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgLy8gaW5jcmVhc2UgbG9vcCBjb3VudFxyXG4gICAgICAgIHBoQ291bnQrKztcclxuICAgICAgICAvLyBydW4gbG9vcCB1bnRpbCBwbGFjZWhvbGRlciBpcyBmdWxseSBwcmludGVkXHJcbiAgICAgICAgaWYgKHBoQ291bnQgPCBhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwcmludExldHRlcihvcmlnU3RyaW5nLCBpbnB1dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgcGggPSAkKCcuaW5wdXQtLXNlYXJjaCcpLmF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJhciA9ICQoJy5pbnB1dC0tc2VhcmNoJyk7XHJcbiAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyIGxvb3AgY291bnRlclxyXG4gICAgICAgICAgICBwaENvdW50ID0gMDtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJGdW5jKCk7XHJcblxyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1c2UgcmFuZG9tIHNwZWVkIHRvIHNpbXVsYXRlXHJcbiAgICAgICAgLy8gJ2h1bWFuJyB0eXBpbmdcclxuICAgICAgfSwgcmFuZERlbGF5KDkwLCAxMjApKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0byBpbml0IGFuaW1hdGlvblxyXG4gICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJGdW5jKCkge1xyXG4gICAgICAkKHNlYXJjaEJhcikuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xyXG4gICAgICBwcmludExldHRlcihwaCwgc2VhcmNoQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZWhvbGRlckZ1bmMoKTtcclxuXHJcbn0iXX0=
