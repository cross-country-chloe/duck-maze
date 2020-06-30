namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    mySprite.say("ouch!", 1000)
    info.changeLifeBy(0)
    mySprite.setImage(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 d d 4 b . . . . . . 
2 2 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 f 1 4 f 1 4 d b . . . . . 
2 b 4 f f 4 f f 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 f 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`)
    pause(2000)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . b . . 
. . . . . . b b b b b b . . . . 
. . . . . b c c c c c 5 b . . . 
. . . . b b c d 1 f c d 4 c . . 
. . . . c c c 1 f f c c 4 4 4 b 
. . . . b 5 c d f b c 4 4 4 b . 
. . . 5 5 5 c c c c c 4 4 3 . . 
. . f f f 1 1 1 f 1 1 1 f f . . 
. f f f f f 1 1 1 1 1 f f f f . 
f f f f 1 f f 1 f 1 f f 1 f f . 
f f f 1 1 1 f f 1 f f 1 1 1 f . 
f f f 1 1 1 1 f f f 1 1 1 1 f . 
. f f f 1 1 f f f f f 1 1 f f . 
f f f f f f f f f f f f f f . . 
. . . f f f f f f f f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100010101010010101010101011010101010101001010a0a0a0a0a0a0a010110101010010a0a0a01010101010a0a0101101001010a01010a0a0a0a0a010a0a0a0110010a0a010a0a0101010a0a01010a0101010a01010a010a0a0a010a0a010a0a12010a0a010a010a01000a010a010a0a1201100a010a010a01100a010a01100a01010a0a010a0a0a0a0a0a010a010a0a01010a0a01010a0a0101010a0a010a010110010a0a0a010a0a080a0a01010a0110100101010a01010a0a010a0a0a0a0110101001010a0a0a0101010a08010110101010100101100a0a0a0a0a0110101010101010101001010a0a0101101010101010101010101001111101101010101010`,
            img`
. . . . 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . . 2 2 . . . 
. 2 . . . 2 2 2 2 2 . . 2 2 . . 
2 2 . 2 2 . . . . . 2 . . . 2 . 
2 . . 2 . . 2 2 2 . . 2 2 . 2 2 
2 . 2 2 . 2 . . . 2 . . 2 . . . 
2 . . 2 . 2 . 2 2 . 2 . 2 . . . 
2 . . 2 . 2 . 2 . . 2 . 2 . . 2 
2 . . 2 . . . . . . 2 . 2 . . 2 
2 . . 2 2 . . 2 2 2 . . 2 . 2 2 
. 2 . . . 2 . . . . . 2 2 . 2 . 
. 2 2 2 . 2 2 . . 2 . . . . 2 . 
. . 2 2 . . . 2 2 2 . . 2 2 . . 
. . . 2 2 . . . . . . 2 . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.builtin.crowd7,sprites.builtin.coral0,sprites.castle.shrub,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.castle.rock2,sprites.builtin.forestTiles0,sprites.dungeon.hazardLava0,sprites.dungeon.stairNorth,sprites.dungeon.stairWest,sprites.dungeon.purpleSwitchDown,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPink,sprites.dungeon.buttonOrange,sprites.builtin.field0],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(90)
info.setLife(3)
