(function($){

    jQuery.fn.checkNumeric = function(options ){

        var defaults = {},
            settings = $.extend( {}, defaults, options),
            value,
            step,
            $incButtonElement = '<span class="arrow arrow__inc"></span>',
            $decButtonElement = '<span class="arrow arrow__dec"></span>';

        function init( numeric_input ) {
            numeric_input.wrap('<div class="js_numeric-input-group"></div>');
            numeric_input.after( $incButtonElement, $decButtonElement );
        }

        function checkInputAttr(input) {
            if (input.attr('value')) {
                value = parseFloat(input.attr('value'));
            } else if (input.attr('placeholder')) {
                value = parseFloat(input.attr('placeholder'));
            }
            if (!( $.isNumeric(value) )) {
                value = 0;
            }
            step = getStep(input);
        }

        function getStep(input) {
            return (input.attr('step')) ? parseFloat(input.attr('step')): 1;
        }

        function getParsedValue(inputElement , min) {
            var val = ( settings.floatVal || inputElement.data('float') === true )? parseFloat( inputElement.val() ) : parseInt( inputElement.val() );
            if(min && val !== val) {
                // console.info('val is NaN.');
                val = min;
            }
            else {/* console.info('val is NOT a NaN.');*/ }
            return val;
        }


        /**
         * Check value when it entered from keybord
         * @param inputElement - object
         * @param min - number
         * @param max - number
         */
        function checkValue(inputElement, min , max ,incBtn,  decBtn) {
            var val = getParsedValue(inputElement, min) ;

            if(val <= min){
                val = min;
                decBtn.addClass('disabled');
                incBtn.removeClass('disabled');

            } else if (val >= max){
                val = max;
                incBtn.addClass('disabled');
                decBtn.removeClass('disabled');
            }
            if(!( $.isNumeric(val) )){
                val = '';
            }
            inputElement.val(val);
        }

        return this.each(function() {
            var $numeric_input = $(this),
                incBtn , decBtn, step,
                $max = ($numeric_input.attr('max')) ? parseInt($numeric_input.attr('max')) : Number.MAX_SAFE_INTEGER,
                $min = ($numeric_input.attr('min')) ? parseInt($numeric_input.attr('min')) : Number.MIN_SAFE_INTEGER;


            init($numeric_input);

            incBtn =  $(this).siblings( ".arrow__inc" ); //find increment button
            decBtn =  $(this).siblings( ".arrow__dec" ); //find decrement button



            /*
            $numeric_input.focus(function() {
                $(this)
                  //.prop('type', 'text')
                  // .keyup(function() {
                  //     $(this).val($(this).val().replace(/[^\d|\s]/g, ''));
                  //     //checkValue($(this), $min, $max);
                  // })
                  .blur(function() {
                      //$(this).val($(this).val().replace(/[^\d]/g, '')).prop('type', 'number');
                  });
            });*/

            $numeric_input.change(function(){
                checkValue($(this), $min, $max , incBtn , decBtn); //need for update "widget config panel"
            });

            incBtn.click(function() {
                var value = getParsedValue($numeric_input, null);
                var step = getStep($numeric_input);
                var newValue;

                checkInputAttr($numeric_input);
                newValue = value + step;

                if (newValue >= $max) {
                    newValue = $max;
                    $(this).addClass('disabled');
                }else {
                    decBtn.removeClass('disabled');
                }

                $numeric_input.val(newValue);
                $numeric_input.attr( "value", newValue );//update  value attribute, need for "widget config panel"
                $numeric_input.trigger('change');//need for update "widget config panel"

                return false;
            });

            decBtn.click(function() {
                var newValue;
                var value = getParsedValue($numeric_input, null);
                var step = getStep($numeric_input);

                checkInputAttr($numeric_input);
                newValue = value - step;

                if (newValue <= $min) {
                    newValue = $min;
                    $(this).addClass('disabled');
                }else {
                    incBtn.removeClass('disabled');
                }

                $numeric_input.val(newValue);
                $numeric_input.attr( "value", newValue ); //update  value attribute, need for "widget config panel"
                $numeric_input.trigger('change'); //need for update "widget config panel"
                
                return false;
            });

        });
    };
})(jQuery);

$(document).on('ready', function () {
    /*
    availiable option : {floatVal:true}
    $('.js_numeric_input').checkNumeric( {floatVal:true} );
    or add attribute to html: data-float="true"

    markup example:
     <input class="js_numeric_input" type="number" value="12" max="15" min="10" required="" step="2" data-float="true">
    */
    $('.js_numeric_input').checkNumeric( );
});
