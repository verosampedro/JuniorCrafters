import { lava, skull, seeking, rockConcert, rockWoman, redStairs } from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(lava)

const skullTexture = new TextureLoader().load(skull)
const seekingTexture = new TextureLoader().load(seeking)
const redStairsTexture = new TextureLoader().load(redStairs)
const rockConertTexture = new TextureLoader().load(rockConcert)
const rockWomanTexture = new TextureLoader().load(rockWoman)



groundTexture.wrapS = RepeatWrapping //definimos el repeat del mapeo de la himajen en el eje horizontal
groundTexture.wrapT = RepeatWrapping // eje vertical 
groundTexture.magFilter = NearestFilter


skullTexture.magFilter = NearestFilter
seekingTexture.magFilter = NearestFilter
redStairsTexture.magFilter = NearestFilter
rockConertTexture.magFilter = NearestFilter
rockWomanTexture.magFilter = NearestFilter




export { groundTexture, skullTexture, seekingTexture, redStairsTexture, rockConertTexture, rockWomanTexture }
