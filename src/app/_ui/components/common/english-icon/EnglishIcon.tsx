import React from 'react'
import USFlag from 'country-flag-icons/react/3x2/US'
import type { EnglishIconProps } from './props-types'

export function EnglishIcon({ size = 24 }: Readonly<EnglishIconProps>) {
  return (
    <USFlag
      style={ {
        width: `${size}px`,
        height: `${size}px`,
      } }
      title="English"
    />
  )
}
