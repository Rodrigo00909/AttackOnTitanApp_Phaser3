this._baseUrl = 'http://localhost:5500/';

const config = {
    width: 1080,
    height: 720,
    parent: 'container',
    type: Phaser.AUTO, // CANVAS, AUTO, WEBGL 
    scene: {
        preload,
        create,
        update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

const game = new Phaser.Game(config);

function preload() {
    this.load.image("levi", "./assets/levi_02_1.png");
    this.load.image('murallas', './assets/fondo3.png');
}

function create() {
    this.add.image(450, 350, 'murallas');
    this.levi = this.physics.add.image(100, 80, 'levi'); // x, y , nombre obj img
    this.levi.setCollideWorldBounds(true);
    this.levi.setBounce(0.3);

    this.cursors = this.input.keyboard.createCursorKeys();

}

function update() {
    if (this.cursors.left.isDown) {
        this.levi.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
        this.levi.setVelocityX(300);
    } else {
        this.levi.setVelocityX(0);
    }
}