namespace SpriteKind {
    export const boss = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = false
    moveright = false
    moveup = true
    movedown = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (moveleft == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, 0)
    }
    if (moveright == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
    }
    if (movedown == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 200)
    }
    if (moveup == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = true
    moveright = false
    moveup = false
    movedown = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = false
    moveright = true
    moveup = false
    movedown = false
})
function enemyspawn (number: number, speed: number) {
    if (levelnum % 5 == 0) {
        multiplier += 1
        boss = sprites.create(img`
            . . . . c c c b b b b b . . . . 
            . . c c b 4 4 4 4 4 4 b b b . . 
            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
            . e b 4 4 4 4 4 5 4 4 4 4 b e . 
            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
            8 7 2 e e e e e e e e e e 2 7 8 
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
            e b e 8 8 c c 8 8 c c c 8 e b e 
            e e b e c c e e e e e c e b e e 
            . e e b b 4 4 4 4 4 4 4 4 e e . 
            . . . c c c c c e e e e e . . . 
            `, SpriteKind.boss)
        tiles.placeOnRandomTile(boss, sprites.castle.tileDarkGrass2)
        boss.follow(mySprite, 20 * multiplier)
        info.setScore(3 * multiplier)
    } else {
        for (let index = 0; index < number; index++) {
            enemy = sprites.create(img`
                . . . . . . . e c 7 . . . . . . 
                . . . . e e e c 7 7 e e . . . . 
                . . c e e e e c 7 e 2 2 e e . . 
                . c e e e e e c 6 e e 2 2 2 e . 
                . c e e e 2 e c c 2 4 5 4 2 e . 
                c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
                c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                . . . 2 2 e e 4 4 4 2 e e . . . 
                . . . . . 2 2 e e e e . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy, sprites.castle.tileDarkGrass2)
            enemy.follow(mySprite, speed)
            pause(200)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
    info.changeScoreBy(-1)
    currentnumofenemy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = false
    moveright = false
    moveup = false
    movedown = true
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    currentnumofenemy = 1
    sprites.destroy(sprite)
    info.changeScoreBy(-1)
    if (info.score() == 0) {
        sprites.destroy(otherSprite)
        currentnumofenemy += -1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    info.changeScoreBy(-1)
    currentnumofenemy += -1
})
let enemy: Sprite = null
let boss: Sprite = null
let projectile: Sprite = null
let currentnumofenemy = 0
let multiplier = 0
let movedown = false
let moveup = false
let moveright = false
let moveleft = false
let mySprite: Sprite = null
let levelnum = 0
let tilemap2 = 0
levelnum = 0
let count = 0
scene.setBackgroundColor(6)
let list = [tilemap`level7`, tilemap`level1`, tilemap`level4`]
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d e e f . . . . 
    . . f f f d d f f d e f f . . . 
    . c d d e e d d d d e d d f . . 
    . c c d d d d c d d e d f f f . 
    . c d c c c c d d d e d f b d f 
    . . c d d d d d d e e f f d d f 
    . . . c d d d d e e f f e f f f 
    . . . . f f f e e f e e e f . . 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f e e f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
moveleft = false
moveright = false
moveup = false
movedown = false
multiplier = 0
info.setScore(5)
let speedenemy = 15
let numenemy = 5
currentnumofenemy = 0
levelnum = 1
info.setLife(3)
forever(function () {
    if (currentnumofenemy == 0) {
        tiles.setCurrentTilemap(list[tilemap2])
        info.setScore(numenemy)
        game.splash("Level " + levelnum)
        currentnumofenemy = numenemy
        enemyspawn(numenemy, speedenemy)
        numenemy += 1
        speedenemy += 1
        levelnum += 1
        tilemap2 += 1
        if (tilemap2 == 3) {
            tilemap2 = 0
        }
    }
    if (info.life() == 0) {
        game.splash("Game Over")
        game.splash("You made it to level " + levelnum)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroy(mySprite, effects.hearts, 500)
    }
})
