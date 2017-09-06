function placeMiscCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 10,
        deltaLeft   : 10,
        defaultSide : "back",
        cards       : 12,
        type        : "misc"
    };
    placeCards($stage, settings);
}

function placeIstfCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 10,
        deltaLeft   : 1450,
        defaultSide : "front",
        cards       : 1,
        type        : "istf"
    };
    placeCards($stage, settings);
}
