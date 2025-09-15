$(document).ready(function(){
    // SITE LOAD NAVIGATION
    // $("#ac_tab").addClass('active');
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");

    const tabToSection = {
        "#ac_tab":"#Central_AC",
        "#elevator_tab":"#Elevators",
        "#fire_tab":"#Fire",
        "#generator_tab":"#Generator",
        "#solar_tab":"#Solar",
        "#elv_tab":"#ELV"
    }
    const tabsMap = {
        ac: { tab: "#ac_tab", section: "#Central_AC" },
        el: { tab: "#elevator_tab", section: "#Elevators" },
        fi: { tab: "#fire_tab", section: "#Fire" },
        gn: { tab: "#generator_tab", section: "#Generator" },
        so: { tab: "#solar_tab", section: "#Solar" },
        elv: { tab: "#elv_tab", section: "#ELV" }
    };

    $(".MainServiceSection").removeClass("active").hide();
    $(".department_tab_container span").removeClass("active");

    if (tabsMap[tab]) {
        $(tabsMap[tab].tab).addClass("active");
        $(tabsMap[tab].section).addClass("active").show();
    }
    
    // TOP TAB CLICK NAVIGATIONS
    


    // CLICK TAB ACTIVE CLASS SETTER
    $(".department_tab_container span").click(function(){
        $(".department_tab_container span").removeClass('active');
        $(this).addClass('active');
        $(".MainServiceSection").removeClass("active").hide();
        $(tabToSection["#"+this.id]).addClass("active").show();
    });



    // System Description
    let clicked = ''
    let description_mapping = {
        "#commercialAC":"#commercialACDesk",
        "#packageAC":"#packageACDesc",
        "#vrfSystems":"#vrfSystemsDesc",
        "#chillerSystems":"#chillerSystemsDesc"
    };


    $(".supplying_system div").click(function(){
        let clickedID = "#"+this.id;
        let whatDesc = description_mapping[clickedID];
        if ($(whatDesc).hasClass("active")) {
            $(whatDesc).removeClass("active");
            $("#"+this.id+" span").text("+");
        } 
        // Else open it and close others
        else {
            $(".system_topic span").text('+')
            $(".system_desc").removeClass("active");
            $(whatDesc).addClass("active");
            $("#"+this.id+" span").text("-");
        }

    });
    
});