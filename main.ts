controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        c c c . . . . . . . . . . . . . 
        c 1 1 c . . . . c c c c . . . . 
        c 1 1 c . . c c 7 7 7 7 c c . . 
        c 1 1 1 c c 7 7 7 7 7 7 7 7 c . 
        c 1 1 1 c 7 7 7 f 1 7 7 7 7 7 c 
        . c 1 1 1 7 7 7 f f 7 7 7 7 7 c 
        . c 1 1 1 1 7 7 7 7 7 7 7 7 7 c 
        . c 1 1 1 7 7 7 7 7 b 1 b b c c 
        . . c 1 1 6 7 7 7 7 7 3 3 3 7 c 
        . . c c 6 6 7 7 7 7 7 7 7 7 b . 
        . c c 6 6 6 6 b 7 7 c 6 6 c . . 
        c 6 c 6 6 6 6 b b 7 7 c 6 6 c . 
        c 6 6 6 6 6 6 6 6 c c c c c c . 
        . c 6 6 6 b 7 7 6 c c c c . . . 
        . . c c c b 7 7 b c c c c c . . 
        . . . . c b 7 7 d c 6 6 6 c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 7 7 7 7 c c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 7 7 7 f 1 7 7 7 7 7 c 
        . . . c 7 7 7 7 f f 7 7 7 7 7 c 
        . . . c 7 7 7 7 7 7 7 7 7 7 7 c 
        . . c 6 7 7 7 7 7 7 b 1 b b c c 
        . . c 6 6 6 7 7 7 7 7 3 3 3 7 c 
        . . c 6 6 6 7 7 7 7 7 7 7 7 b . 
        . c c 6 6 6 6 b 7 7 c b b c . . 
        c 6 c 6 6 6 6 b b 7 7 c b b c . 
        c 6 6 6 6 6 6 6 6 c c c c c c . 
        . c 6 6 6 b 7 7 6 c c c c . . . 
        . . c c c b 7 7 b c c c c c . . 
        . . . . c b 7 7 1 c b b b c . . 
        `],
    100,
    true
    )
    mySprite.vy = -100
    timer.after(500, function () {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.destroy(effects.clouds, 500)
    game.over(false, effects.melt)
    game.splash("Score: ", String.fromCharCode(info.score()))
})
let projectile: Sprite = null
let bottom: Image = null
let top: Image = null
let gap = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    c c c . . . . . . . . . . . . . 
    c 1 1 c . . . . c c c c . . . . 
    c 1 1 c . . c c 7 7 7 7 c c . . 
    c 1 1 1 c c 7 7 7 7 7 7 7 7 c . 
    c 1 1 1 c 7 7 7 f 1 7 7 7 7 7 c 
    . c 1 1 1 7 7 7 f f 7 7 7 7 7 c 
    . c 1 1 1 1 7 7 7 7 7 7 7 7 7 c 
    . c 1 1 1 7 7 7 7 7 b 1 b b c c 
    . . c 1 1 6 7 7 7 7 7 3 3 3 7 c 
    . . c c 6 6 7 7 7 7 7 7 7 7 b . 
    . c c 6 6 6 6 b 7 7 c 6 6 c . . 
    c 6 c 6 6 6 6 b b 7 7 c 6 6 c . 
    c 6 6 6 6 6 6 6 6 c c c c c c . 
    . c 6 6 6 b 7 7 6 c c c c . . . 
    . . c c c b 7 7 b c c c c c . . 
    . . . . c b 7 7 d c 6 6 6 c . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
mySprite.setPosition(52, 53)
mySprite.ay = 300
info.setScore(0)
game.splash("Flappy Bird")
game.showLongText("Press 'A' to jump", DialogLayout.Bottom)
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    gap = randint(1, 3)
    if (gap == 1) {
        top = img`
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            .....f866666666668f.....
            ......f8666666668f......
            .......f86666668f.......
            ........f888888f........
            .........ffffff.........
            `
        bottom = img`
            ........................
            ........................
            ...ffffffffffffffffff...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...ff86666666666668ff...
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            `
    } else if (gap == 2) {
        top = img`
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            .....f866666666668f.....
            ......f8666666668f......
            .......f86666668f.......
            ........f888888f........
            .........ffffff.........
            ........................
            `
        bottom = img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ...ffffffffffffffffff...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...ff86666666666668ff...
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            `
    } else if (gap == 3) {
        top = img`
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            .....f866666666668f.....
            ......f8666666668f......
            .......f86666668f.......
            ........f888888f........
            .........ffffff.........
            ........................
            ........................
            ........................
            ........................
            ........................
            `
        bottom = img`
            ........................
            ........................
            ...ffffffffffffffffff...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...ff86666666666668ff...
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            `
    } else {
        top = img`
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            .....f866666666668f.....
            ......f8666666668f......
            .......f86666668f.......
            ........f888888f........
            .........ffffff.........
            `
        bottom = img`
            ........................
            ...ffffffffffffffffff...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...f8666666666666668f...
            ...ff86666666666668ff...
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            ....f86666666666668f....
            `
    }
    projectile = sprites.createProjectileFromSide(top, -50, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottom, -50, 0)
    projectile.bottom = 120
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdate(function () {
    if (mySprite.y >= 120) {
        game.over(false, effects.melt)
        game.splash("Score: ", String.fromCharCode(info.score()))
    }
})
