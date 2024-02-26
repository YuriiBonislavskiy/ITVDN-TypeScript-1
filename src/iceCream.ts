const refs = {
  bigSize: document.querySelector(".big-size") as HTMLInputElement | null,
  smallSize: document.querySelector(".small-size") as HTMLInputElement | null,
  chocolate: document.querySelector(".chocolate") as HTMLInputElement | null,
  caramel: document.querySelector(".caramel") as HTMLInputElement | null,
  berries: document.querySelector(".berries") as HTMLInputElement | null,
  marshmallows: document.querySelector(
    ".marshmallows"
  ) as HTMLInputElement | null,
};

enum iceCreamPrice {
  bigSize = 25,
  smallSize = 10,
  chocolate = 5,
  caramel = 6,
  berries = 10,
  marshmallows = 5,
}

document
  .querySelector("#ice-cream-total")
  .addEventListener("click", iceCreamCount);
// console.log(typeof refs.bigSize.value);

// refs.bigSize.value;

function iceCreamCount(): number {
  enum iceCreams {
    bigSize = Number(refs.bigSize.value),
    smallSize = Number(refs.smallSize.value),
    chocolate = Number(refs.chocolate.value),
    caramel = Number(refs.caramel.value),
    berries = Number(refs.berries.value),
    marshmallows = Number(refs.marshmallows.value),
  }
  const mandatoryFillingCount: number =
    iceCreams.chocolate + iceCreams.caramel + iceCreams.berries;
  const iceCreamCount: number = iceCreams.bigSize + iceCreams.smallSize;
  if (mandatoryFillingCount < iceCreamCount) return;
  const totalPrice: number =
    iceCreams.bigSize * iceCreamPrice.bigSize +
    iceCreams.smallSize * iceCreamPrice.smallSize +
    iceCreams.chocolate * iceCreamPrice.chocolate +
    iceCreams.caramel * iceCreamPrice.caramel +
    iceCreams.berries * iceCreamPrice.berries +
    iceCreams.marshmallows * iceCreamPrice.marshmallows;
  console.log(totalPrice);
}
//   console.log(e.value);
// }

// iceCream.bigSize = iceCream.bigSize + 1;
