function placeMiscCards($stage) {
    var settings = {
        baseTop: 10,
        baseLeft: 10,
        baseRight: 0,
        deltaTop: 15,
        deltaLeft: 15,
        defaultSide: "back",
        cards: 12,
        type: "misc"
    };
    placeCards($stage, settings);
}

function placeIstfCards($stage) {
    var settings = {
        baseTop: 10,
        baseLeft: 0,
        baseRight: 430,
        deltaTop: 15,
        deltaLeft: 15,
        defaultSide: "back",
        cards: 8,
        type: "istf"
    };
    placeCards($stage, settings);
}
