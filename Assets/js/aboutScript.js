$(document).ready(function(){

// **** Old Code ****

    // // Mapping spans to their divs
    // const mapping={
    //     "#quality_span":"#split1_policy",
    //     "#service_span":"#split2_services",
    //     "#promise_span":"#split3_promise"
    // };

    // // Load active tab
    // $("#quality_span").addClass('active');
    // $("#split1_policy").show();

    // // Handle tabs
    // $(".topics span").click(function(){
    //     $(".topics span").removeClass('active');
    //     $(this).addClass('active');
    //     $("#split1_policy, #split2_services, #split3_promise").hide();
    //     let active_tab_id = "#" + this.id;
    //     $(mapping[active_tab_id]).show();
    // });


// **** New Code ****
    const mapping = {
        "#quality_span":"#split1_policy",
        "#service_span":"#split2_services",
        "#promise_span":"#split3_promise"
    };

    // Set initial active tab
    $("#quality_span").addClass('active');
    $("#split1_policy").addClass('show');

    $(".topics span").click(function(){
        $(".topics span").removeClass('active');
        $(this).addClass('active');

        // Hide all tab contents
        $(".splits").removeClass('show');

        let active_tab_id = "#" + this.id;
        $(mapping[active_tab_id]).addClass('show');
    });
});