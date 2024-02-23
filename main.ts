controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = false
    moveright = false
    moveup = true
    movedown = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
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
    } else {
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveleft = false
    moveright = false
    moveup = false
    movedown = true
})
let projectile: Sprite = null
let movedown = false
let moveup = false
let moveright = false
let moveleft = false
let mySprite: Sprite = null
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
tiles.setCurrentTilemap(list[0])
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
moveleft = false
moveright = false
moveup = false
movedown = false
