
$( document ).ready(function() {
    //form script
    let height = $('#header-how-it-works').outerHeight() + $('#header-how-it-works').offset().top;
    let surveyPopup = false;
    $(window).scroll(() => {
        if ($(window).scrollTop() > height && surveyPopup == false){
        setTimeout(function() {
            $('#lightboxdelay')[0].click();
        }, 6000);
        surveyPopup = true;
        }
    })
    
    //Handler for buttons 
    //Uncomplete; need to confirm what this does first.
    $("#android-button").click(function() {
        $('#lightboxdelay')[0].click();
    });

    $("#apple-button").click(function() {
        $('#lightboxdelay')[0].click();
    });
});