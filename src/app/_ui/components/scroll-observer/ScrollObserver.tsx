'use client'

import { useEffect } from 'react'
import { useAppState, type NavItem } from '@/domain/store/features/app'
import { debounce } from '@/domain/utils'

export function ScrollObserver() {
  const { navItems } = useAppState()

  useEffect(() => {
    const elements = document.querySelectorAll(
      [...navItems, { path: '#home' }].map((item: NavItem) => `${item.path}`).join(', ')
    )

    const handleScroll = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { top } = entry.boundingClientRect
          if (entry.isIntersecting && top <= 0) {
            const { id } = entry.target
            history.replaceState(null, '', `#${id}`)
          }
        })
      }, { threshold: 0.5 })

      elements.forEach((element) => {
        if (element) { observer.observe(element) }
      })

      return () => observer.disconnect()
    }

    const debouncedHandleScroll = debounce(handleScroll, 100)

    debouncedHandleScroll()
    window.addEventListener('scroll', debouncedHandleScroll)
    return () => window.removeEventListener('scroll', debouncedHandleScroll)
  }, [])
  return null
}
