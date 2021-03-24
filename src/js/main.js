$(window).ready(function () {
    setTimeout(function(){
        $("[data-typer]").attr("data-typer", function(i, txt) {
            let $typer = $(this),
                tot = txt.length,
                pauseMax = 200,
                pauseMin = 60,
                ch = 0;

            (function typeIt() {
                if (ch > tot) return;
                $typer.html(txt.substring(0, ch++)+"<span>_</span>");
                setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
            }());
        });

        setTimeout(function(){
            window.setInterval(function(){
                $(".header span").toggleClass("d-none"); 
            }, 800);
            $(".fade").fadeIn("slow");
        }, 3000);
    }, 2000);

    if($("#skills").css("opacity") == 1){
        fillBars();
    }

    $("#age").text(`"`+ calcAge(new Date(1999, 5, 18)) + `"`);
});

function fillBars(){
    var bars = $(".fill");
    setTimeout(function(){
        bars.each(function(index){
            bars.eq(index).css("width", bars.eq(index).attr("fill")+"%");
        });
    }, 1200);
}

function calcAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}