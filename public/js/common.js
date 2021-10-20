<<<<<<< HEAD
$(document).ready(function(){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //left slidemenu script
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeft = document.getElementById( 'showLeft' );

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };

    var disableOther = function( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
    }

    $(".niceScroll").niceScroll();
    
    $('.panel-heading a').click(function() {
        $('.panel-heading').removeClass('active');
        
        //If the panel was open and would be closed by this click, do not active it
        if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
            $(this).parents('.panel-heading').addClass('active');
     });


});
=======
$(document).ready(function(){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //left slidemenu script
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeft = document.getElementById( 'showLeft' );

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };

    var disableOther = function( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
    }

    $(".niceScroll").niceScroll();
    
    $('.panel-heading a').click(function() {
        $('.panel-heading').removeClass('active');
        
        //If the panel was open and would be closed by this click, do not active it
        if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
            $(this).parents('.panel-heading').addClass('active');
     });


});
>>>>>>> bd055dde38f1e0d9fa8a0d4119ce3189a67148b2
