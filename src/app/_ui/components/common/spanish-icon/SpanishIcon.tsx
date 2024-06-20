import React from 'react'
import ESFlag from 'country-flag-icons/react/3x2/ES'
import type { SpanishIconProps } from './props-types'

export function SpanishIcon({ size = 24 }: Readonly<SpanishIconProps>) {
  return (
    <ESFlag
      style={ {
        width: `${size}px`,
        height: `${size}px`,
      } }
      title="Español"
    />
  )
}
