import { useStore } from './hooks/useStore'
import * as images from './images/images'
import { useKeyboard } from './hooks/useKeyboard'
import { useEffect, useState } from 'react'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const {
    skull,
    seeking,
    redStairs,
    rockConcert,
    rockWoman
  } = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 1000)

    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  useEffect(() => {
    const options = {
      skull,
      seeking,
      redStairs,
      rockConcert,
      rockWoman
    }

    const selectedTexture = Object
    .entries(options)
    .find(([texture, isEnabled]) => isEnabled)

  if (selectedTexture) {
    const [textureName] = selectedTexture
    setTexture(textureName)
  }
  console.log(selectedTexture)
},[skull, seeking, redStairs, rockConcert, rockWoman])

  return (
    <div className='texture-selector'>
      {
        Object
          .entries(images)
          .map(([imgKey, img]) => {
            return (
              <img
                className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                key={imgKey}
                src={img}
                alt={imgKey}
              />
            )
          })
      }
    </div>
  )
}