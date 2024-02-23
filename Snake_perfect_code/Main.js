import GameField from "./GameField.js";
import Snake from "./Snake.js";
import Apple from "./Apple.js";
import Score from "./Score.js"


class Main {
    constructor() {
        this.gameField = new GameField();
        this.snake = new Snake();
        this.apple = new Apple();
        this.score = new Score(0);



    } // нужно проинициализировать все элементы игры

    update() {
        //логика обновления каких-либо данных
        //при изменении
    }
    

    draw() {
        //отрисовывать все части игры
    }

}
export default Main;