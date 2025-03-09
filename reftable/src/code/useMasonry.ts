import { useEffect } from 'react'

export interface IMasonry {
  containerSelector: string
  itemSelector: string
  gutter?: number
}

export const useMasonry = ({
  containerSelector,
  itemSelector,
  gutter,
}: IMasonry): void => {
  useEffect(() => {
    const Masonry = require('masonry-layout') // eslint-disable-line
    const masonry = new Masonry(`.${containerSelector}`, {
      itemSelector: `.${itemSelector}`,
      fitWidth: true,
      gutter: gutter || 0,
    })

    // This is so the layout can occur after content has fully loaded without a window resize
    setTimeout(() => {
      masonry.layout()
    }, 1000)
  }, [])
}
