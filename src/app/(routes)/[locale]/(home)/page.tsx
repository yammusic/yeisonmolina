import React from 'react'
import { Container } from '@mui/material'

import {
  AboutMeSection,
  ExperienceSection,
  ProjectsSection,
  ProfileSection,
} from '@/app/containers'
import { ScrollObserver } from '@/app/components'

export default function Home() {
  return (
    <Container>
      <ScrollObserver />

      <ProfileSection />

      <AboutMeSection />

      <ProjectsSection />

      <ExperienceSection />
    </Container>
  )
}
