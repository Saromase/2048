var a2048;


class Game {
    constructor() {
        this.score = 0;
        this.table = [];
        for (let i = 0; i < 16; i++){
            this.table.push(new Square());
        }
    }

    start(){
        this.score = 0;
        let firstValue = getRandom(0, 15);
        this.table[firstValue].initialize();
        do {
            var secondValue = getRandom(0, 15);
        } while (secondValue == firstValue);
        this.table[secondValue].initialize();
    }

}
class Square {
    constructor() {
            this.value = 0
    }
    initialize(){
        this.value = getRandom(1,3) * 2;
    }

}



function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
