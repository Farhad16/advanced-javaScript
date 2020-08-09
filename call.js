let argsToArray = function () {
    console.log(arguments);
};

argsToArray(1, 2, 3, 4);


let mammal = function (legs) {
    this.legs = legs
}

let cat = function (legs, isDomestic) {
    mammal.call(this, legs);
    this.isDomestic = isDomestic;
}

let lion = new cat(4, false);
console.log(lion);


