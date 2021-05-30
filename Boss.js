/**
 * Jefe al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        super(game);

        this.myImageSrc = BOSS_PICTURE;
        this.myImageDeadSrc = BOSS_PICTURE_DEAD;
        this.speed = OPPONENT_SPEED * 2;

        this.image.src = this.myImageSrc;
    }
}