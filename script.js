$(document).ready(function (){
    $("#dm").on("click", function(){
        if($(this).prop("checked")){
            $(".navbar").css({"background-color": "#3498db", "color": "white"});
            $("footer").css({"background-color": "#004400", "color": "#ccffcc"});
            $("body").css({"background-color": "#444400"});
            $("#dm_lable").text("🌙");
        } 
        else {
            $(".navbar").css({"background-color": "white", "color": "#3498db"});
            $("footer").css({"background-color": "#ccffcc", "color": "#116611"});
            $("body").css({"background-color": "#eeeeaa"});
            $("#dm_lable").text("♌");
        }
    });

    $("#mybutton").hover(
        function () {
            $(this).text("Hover Over Me");
        },
        function () {
            $(this).text("Click Me");
        }
    );

    $("#mybutton").on("click", function(){
        alert("Button clicked!");
    });
});
