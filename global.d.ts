/// <reference types="typescript" />

import type React from 'react'

// Extends types for NodeJS.Global
declare global {
  // Common types
  type AnyTypeBasic = string | number | boolean | null | undefined | unknown
  type AnyArray = Array<AnyType>
  type AnyObject = ({ [key: string]: AnyType })
  type AnyType = AnyTypeBasic | AnyArray |  AnyObject | Record<string, (AnyTypeBasic | AnyArray | AnyObject)> | never
  type AnyDate = string | number | Date
  type AnyFunction = (...args: AnyType[]) => AnyType
  type AnyComponent<T = AnyObject> = React.ComponentType<T> | React.FC<T>
}
