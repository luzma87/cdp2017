function placeMiscCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 15,
        deltaLeft   : 15,
        defaultSide : "back",
        cards       : 12,
        type        : "misc"
    };
    placeCards($stage, settings);
}

function placeIstfCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 1400,
        deltaTop    : 15,
        deltaLeft   : 15,
        defaultSide : "back",
        cards       : 4,
        type        : "istf"
    };
    placeCards($stage, settings);
}
