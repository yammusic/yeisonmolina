import React from 'react'
import { Container } from '@mui/material'

import { AboutMeSection, ExperienceSection, ProfileSection } from '@/components'
// import styles from './page.module.scss'

export default function Home() {
  return (
    <Container>
      <ProfileSection />

      <AboutMeSection />

      <ExperienceSection />
    </Container>
  )
}
