// $(document).ready(function(){
//     $(".faq-question").click(function(){
//         const parent = $(this).closest(".faq-item");

//         // Close other open FAQs
//         $(".faq-item").not(parent).removeClass("active").find(".faq-answer").slideUp(300);

//         // Toggle current FAQ
//         parent.toggleClass("active").find(".faq-answer").stop().slideToggle(300);
//     });
// });
$(document).ready(function(){
    $(".faq-question").click(function(){
        const parentItem = $(this).closest(".faq-item");

        // Close all other FAQ items
        $(".faq-item").not(parentItem).removeClass("active");

        // Toggle current FAQ
        parentItem.toggleClass("active");
    });




// Contact Form Submission AJAX
    $('#contact-form').on('submit', function(e){
        e.preventDefault();

        // Disable button to prevent multiple submissions
        $('#submit_btn').prop('disabled', true).text('Sending...');

        $.ajax({
            url: 'contact-form-handler.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response){
                $('#we_will_reach_msg').fadeIn();
                $('#submit_btn').prop('disabled', false).text('Send Message');
                $('#contact-form')[0].reset();
                grecaptcha.reset(); // Reset reCAPTCHA
            },
            error: function(){
                alert('Something went wrong. Please try again later.');
                $('#submit_btn').prop('disabled', false).text('Send Message');
            }
        });
    });
});
