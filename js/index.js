const game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
  preload,
  create,
  update,
});

let ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";

  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
  ball.body.collideWorldBounds = true;
  ball.body.bounce.set(1);
}

function update() {}
