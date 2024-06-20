import React from 'react'
import { Container } from '@mui/material'

import { AboutMeSection, ExperienceSection, ProfileSection } from '@/app/containers'

export default function Home() {
  return (
    <Container>
      <ProfileSection />

      <AboutMeSection />

      <ExperienceSection />
    </Container>
  )
}
