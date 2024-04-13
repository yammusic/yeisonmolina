import React from 'react'
import US from 'country-flag-icons/react/3x2/US'
import type { EnglishIconProps } from './props-types'

export function EnglishIcon({ size = 24 }: EnglishIconProps) {
  return (
    <US
      style={ {
        width: `${size}px`,
        height: `${size}px`,
      } }
      title="English"
    />
  )
}
