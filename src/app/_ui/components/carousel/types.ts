import type { EmblaOptionsType } from 'embla-carousel'

export interface CarouseSlide {
  image: string
  title?: string
}

export interface CarouselProps {
  options?: EmblaOptionsType
  slides: CarouseSlide[]
}
