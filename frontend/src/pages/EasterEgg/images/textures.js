import { moon, first, second, third, fourth, fifth } from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(moon)

const firstTexture = new TextureLoader().load(first)
const secondTexture = new TextureLoader().load(second)
const thirdTexture = new TextureLoader().load(third)
const fourthTexture = new TextureLoader().load(fourth)
const fifthTexture = new TextureLoader().load(fifth)



groundTexture.wrapS = RepeatWrapping //definimos el repeat del mapeo de la himajen en el eje horizontal
groundTexture.wrapT = RepeatWrapping // eje vertical 
groundTexture.magFilter = NearestFilter


firstTexture.magFilter = NearestFilter
secondTexture.magFilter = NearestFilter
thirdTexture.magFilter = NearestFilter
fourthTexture.magFilter = NearestFilter
fifthTexture.magFilter = NearestFilter




export { groundTexture, firstTexture, secondTexture, thirdTexture, fourthTexture, fifthTexture }
