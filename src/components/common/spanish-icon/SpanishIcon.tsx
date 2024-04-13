import React from 'react'
import ES from 'country-flag-icons/react/3x2/ES'
import type { SpanishIconProps } from './props-types'

export function SpanishIcon({ size = 24 }: SpanishIconProps) {
  return (
    <ES
      style={ {
        width: `${size}px`,
        height: `${size}px`,
      } }
      title="Español"
    />
  )
}
