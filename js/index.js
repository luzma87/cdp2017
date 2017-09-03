$(function () {
    var $stage = $(".stage");

    placeP3Cards($stage);
    placeFeedbackCards($stage);
    placeLearningCards($stage);

});

function placeCards($stage, settings) {
    for (var i = 0; i < settings.cards; i++) {
        var $element = $("<div>");
        $element.addClass(settings.type);

        var filename = "cards/" + settings.type + "/card" + (i + 1) + ".html";
        loadFile($element, filename, settings.defaultSide);
        makeDraggable($element, settings.type);
        makeClickable($element);
        position($element, settings.baseTop + (i * settings.deltaTop),
            settings.baseLeft + (i * settings.deltaLeft));
        $stage.append($element);
    }
}

function loadFile($element, filename, side) {
    $element.load(filename + " ." + side);
    $element.data("file", filename);
    $element.data("side", side);
}

function makeDraggable($element, type) {
    $element.draggable({
        stack : "div." + type,
        start : function () {
            $(this).addClass("dragging");
        },
        stop  : function () {
            $(this).removeClass("dragging");
        }
    });
}

function makeClickable($element) {
    $element.click(function () {
        var filename = $(this).data("file");
        if ($(this).data("side") === "front") {
            $(this).load(filename + " .back");
            $(this).data("side", "back");
        } else {
            $(this).load(filename + " .front");
            $(this).data("side", "front");
        }
    });
}

function position($element, top, left) {
    $element.css({
        position : "absolute",
        top      : top,
        left     : left
    });
}
