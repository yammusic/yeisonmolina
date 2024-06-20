import React from 'react'
import type { BackgroundModernOneProps } from './props-types'

import styles from './styles.module.scss'

export function BackgroundModernOne({ children }: BackgroundModernOneProps) {
  return (
    <div className={ styles.bgModernOne }>
      <div className={ styles.bgModernOneCover } />

      { children }
    </div>
  )
}
