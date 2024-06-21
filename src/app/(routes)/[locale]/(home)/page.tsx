import React from 'react'
import { Container } from '@mui/material'

import { AboutMeSection, ExperienceSection, ProfileSection } from '@/app/containers'
import { ScrollObserver } from '@/app/components'

export default function Home() {
  return (
    <Container>
      <ScrollObserver />

      <ProfileSection />

      <AboutMeSection />

      <ExperienceSection />
    </Container>
  )
}
