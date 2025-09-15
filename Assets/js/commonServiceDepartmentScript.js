$(document).ready(function(){
    $("#split1_centralAC").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=ac";
    });
    $("#split2_elevators").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=el";
    });
    $("#split3_fireProtection").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=fi";
    });
    $("#split4_generators").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=gn";
    });
    $("#split5_solar").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=so";
    });
    $("#split6_elv").click(function(){
        // Pass a query parameter to Departments.html
        window.location.href = "./Departments.html?tab=elv";
    });
});