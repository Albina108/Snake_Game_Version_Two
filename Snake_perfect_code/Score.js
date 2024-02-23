class Score {
    constructor() {
        //инициализировать начальное кол-во очков
        this._score = score; //хранит текущее кол-во очков которое набрал игрок
    }

    draw() {
        //логика отрисовкм блока с очками
    }
    increaseScore() {
        //увеличивать колво очков
        // и изменять табло
        this_score +=1;
        this.draw();
    }
    reset() {
        //сброс очков при смерти
        this._score = 0;
        this.draw();
    }
}

export default Score;