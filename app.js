// sanity check that JS pages linked
console.log("JS Linked")
console.log($)


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'pixel-clone', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('tiles','assets/tiles1.png');
    game.load.image('player','assets/player.png');

}

var player;
var cursors;

function create() {

    // game.add.tileSprite(0, 0, 800, 600, 'background');

    game.world.setBounds(0, 0, 800, 600);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

    
}

function update() {

	player.angle = 0;

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(200)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(200);
    }

    if (cursors.left.isDown)
    {
        player.body.moveLeft(200);
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(200);
    }

}

function render() {

    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.spriteCoords(player, 32, 500);

}