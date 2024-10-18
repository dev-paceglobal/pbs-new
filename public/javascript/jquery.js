jQuery(document).ready(function () {
   
    // popup start======================

    //   jQuery('.popup-container').css("transform","scale(1)");
    //   $("body").css("overflow-y","hidden")
    // jQuery('.popup-container .popup').hide().slideDown(1000)
    // jQuery('.close-cross').click(function() {
    //   jQuery('.popup-container').css("transform","scale(0)");
    //   $("body").css("overflow-y","auto")
    // });

    // jQuery('.open-popup').click(function() {
    //   jQuery('.popup-container').css("transform","scale(1)");
    //   jQuery('.popup-container .popup').hide().slideDown(1000)
    //   $("body").css("overflow-y","hidden")
    // });

    jQuery('.tab_container:first').show();
    jQuery('.tab_navigation li:first').addClass('active');
    jQuery('.tab_container1:first').show();
    jQuery('.tab_navigation1 li:first').addClass('active');
    jQuery('.tab_container3:first').show();
    jQuery('.tab_navigation3 li:first').addClass('active');
    jQuery('.tab_container4:first').show();
    jQuery('.tab_navigation4 li:first').addClass('active');

    jQuery('.tab_navigation li').each(function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).find('.pink-icons').show();
            jQuery(this).find('.white-icons').hide();
        } else {
            jQuery(this).find('.pink-icons').hide();
            jQuery(this).find('.white-icons').show();
        }
    });

    jQuery(document).on('click', '.tab_navigation li', function () {

        jQuery('.tab_navigation li').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('.tab_navigation li').each(function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).find('.pink-icons').show();
                jQuery(this).find('.white-icons').hide();
            } else {
                jQuery(this).find('.pink-icons').hide();
                jQuery(this).find('.white-icons').show();
            }
        });

        var index = jQuery(this).index();
        jQuery('.tab_container').hide();
        jQuery('.tab_container').eq(index).show();
    });
    jQuery(document).on('click', '.tab_navigation1 li', function () {

        jQuery('.tab_navigation1 li').removeClass('active');
        jQuery(this).addClass('active');

        var index = jQuery(this).index();
        jQuery('.tab_container1').hide();
        jQuery('.tab_container1').eq(index).show();
    });
    jQuery(document).on('click', '.tab_navigation3 li', function () {

        jQuery('.tab_navigation3 li').removeClass('active');
        jQuery(this).addClass('active');

        var index = jQuery(this).index();
        jQuery('.tab_container3').hide();
        jQuery('.tab_container3').eq(index).show();
    });
    jQuery(document).on('click', '.tab_navigation4 li', function () {

        jQuery('.tab_navigation4 li').removeClass('active');
        jQuery(this).addClass('active');

        var index = jQuery(this).index();
        jQuery('.tab_container4').hide();
        jQuery('.tab_container4').eq(index).show();
    });

    jQuery(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();
       
        // console.log(scrollPos, "scrollPos")
        if (scrollPos >= 10 && scrollPos < 900) {
            jQuery('.main_container').css("backgroundColor", "rgb(63, 16, 132)");
        } else if (scrollPos >= 900 && scrollPos < 2099) {
            jQuery('.main_container').css("backgroundColor", "rgb(174, 40, 131)");
        } else if (scrollPos >= 2099 && scrollPos < 3099) {
            jQuery('.main_container').css("backgroundColor", "rgb(240, 88, 116)");
        } else if (scrollPos >= 3099 && scrollPos < 4224) {
            jQuery('.main_container').css("backgroundColor", "rgb(255, 91, 81)");
        } else if (scrollPos >= 4224 && scrollPos < 5024) {
            jQuery('.main_container').css("backgroundColor", "rgb(111, 172, 41)");
        } else if (scrollPos >= 5024) {
            jQuery('.main_container').css("backgroundColor", "rgb(0, 206, 125)");
        }

    });

    $(document).on('click', '.youtube-video', function(event) {
        event.preventDefault();
        
        var videoUrl = $(this).attr('href');
    
        var iframe = '<div style="text-align: center;"><iframe width="800" height="450" src="' + videoUrl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
   
        $('.lightBoxPopup').css("display", "block")
        $('.lightBoxPopupInner').html(iframe);
        
    });
    $(document).on('click', '.lightBoxPopup', function(event) {
        event.preventDefault();
        $(this).css("display", "none")
        $('.lightBoxPopupInner').empty();
        
    });




})