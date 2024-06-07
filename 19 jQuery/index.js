$("h1").css("color", "red");
$("button").text("Don't Click Me!");
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("h1").css("color", "yellow");
});

$("input").keydown(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("font-size", "5rem");
});
