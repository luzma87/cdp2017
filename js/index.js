$(function () {
    var $stage = $(".stage");

    placeMiscCards($stage);
    placeIstfCards($stage);
});

function placeCards($stage, settings) {
    for (var i = settings.cards; i > 0; i--) {
        var $element = $("<div>");
        $element.addClass(settings.type);

        var filename = "cards/" + settings.type + "/card" + i + ".html";

        loadFile($element, filename, settings.defaultSide);
        makeDraggable($element, settings.type);
        makeClickable($element);
        position($element, i, settings);
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
        stack: "div." + type,
        scroll: false
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

function position($element, i, settings) {
    var top = settings.baseTop + (i * settings.deltaTop);
    var left = 0;
    var right = 0;
    if (settings.baseLeft > 0) {
        left = settings.baseLeft + (i * settings.deltaLeft);
    }
    if (settings.baseRight > 0) {
        right = settings.baseRight + (i * settings.deltaLeft);
    }

    $element.css({
        position: "absolute",
        top: top
    });
    if (left > 0) {
        $element.css({
            left: left
        });
    }
    if (right > 0) {
        $element.css({
            right: right
        });
    }
}
