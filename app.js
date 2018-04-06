// sanity check that JS pages linked
console.log("JS Linked")
console.log($)


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'pixel-clone', { preload: preload, create: create, update: update, render: render });

function preload() {
	//load spritesheets and or images
    game.load.spritesheet('tiles','assets/tiles1.png');
    game.load.image('player','assets/player.png');
    game.load.image('tiles', 'assets/tiles0.png')
}

var player;
var cursors;
var walls;
function create() {
	
    game.world.setBounds(0, 0, 1600, 1200);

    game.add.tileSprite(0, 0, 1600, 1200, 'background');



    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

    walls = game.add.sprite(100, 100, 'tiles')

    game.physics.p2.enable(walls);
;
}

function update() {

	walls.body.setZeroVelocity()

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