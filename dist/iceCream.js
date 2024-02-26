var refs = {
    bigSize: document.querySelector(".big-size"),
    smallSize: document.querySelector(".small-size"),
    chocolate: document.querySelector(".chocolate"),
    caramel: document.querySelector(".caramel"),
    berries: document.querySelector(".berries"),
    marshmallows: document.querySelector(".marshmallows"),
};
var iceCreamPrice;
(function (iceCreamPrice) {
    iceCreamPrice[iceCreamPrice["bigSize"] = 25] = "bigSize";
    iceCreamPrice[iceCreamPrice["smallSize"] = 10] = "smallSize";
    iceCreamPrice[iceCreamPrice["chocolate"] = 5] = "chocolate";
    iceCreamPrice[iceCreamPrice["caramel"] = 6] = "caramel";
    iceCreamPrice[iceCreamPrice["berries"] = 10] = "berries";
    iceCreamPrice[iceCreamPrice["marshmallows"] = 5] = "marshmallows";
})(iceCreamPrice || (iceCreamPrice = {}));
document
    .querySelector("#ice-cream-total")
    .addEventListener("click", iceCreamCount);
function iceCreamCount() {
    var iceCreams;
    (function (iceCreams) {
        iceCreams[iceCreams["bigSize"] = Number(refs.bigSize.value)] = "bigSize";
        iceCreams[iceCreams["smallSize"] = Number(refs.smallSize.value)] = "smallSize";
        iceCreams[iceCreams["chocolate"] = Number(refs.chocolate.value)] = "chocolate";
        iceCreams[iceCreams["caramel"] = Number(refs.caramel.value)] = "caramel";
        iceCreams[iceCreams["berries"] = Number(refs.berries.value)] = "berries";
        iceCreams[iceCreams["marshmallows"] = Number(refs.marshmallows.value)] = "marshmallows";
    })(iceCreams || (iceCreams = {}));
    var mandatoryFillingCount = iceCreams.chocolate + iceCreams.caramel + iceCreams.berries;
    var iceCreamCount = iceCreams.bigSize + iceCreams.smallSize;
    if (mandatoryFillingCount < iceCreamCount)
        return;
    var totalPrice = iceCreams.bigSize * iceCreamPrice.bigSize +
        iceCreams.smallSize * iceCreamPrice.smallSize +
        iceCreams.chocolate * iceCreamPrice.chocolate +
        iceCreams.caramel * iceCreamPrice.caramel +
        iceCreams.berries * iceCreamPrice.berries +
        iceCreams.marshmallows * iceCreamPrice.marshmallows;
    console.log(totalPrice);
}
//# sourceMappingURL=iceCream.js.map