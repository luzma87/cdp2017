$.preloadImages = function (images) {
    for (var i = 0; i < images.length; i++) {
        $("<img />").attr("src", images[i]);
    }
}
