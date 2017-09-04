function placeMiscCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 10,
        deltaLeft   : 10,
        defaultSide : "back",
        cards       : 2,
        type        : "misc"
    };
    placeCards($stage, settings);
}

function placeIstfCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 10,
        deltaLeft   : 10,
        defaultSide : "back",
        cards       : 2,
        type        : "istf"
    };
    placeCards($stage, settings);
}

function placeFeedbackCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 10,
        deltaTop    : 10,
        deltaLeft   : 10,
        defaultSide : "back",
        cards       : 2,
        type        : "feedback"
    };
    placeCards($stage, settings);
}

function placeLearningCards($stage) {
    var settings = {
        baseTop     : 10,
        baseLeft    : 1400,
        deltaTop    : 10,
        deltaLeft   : 10,
        defaultSide : "back",
        cards       : 3,
        type        : "learning"
    };
    placeCards($stage, settings);
}
