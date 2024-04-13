import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { FaPersonRays } from 'react-icons/fa6'

import { AboutMeSection, ExperienceSection, ProfileSection } from '@/components'
import styles from './page.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <ProfileSection />

      <AboutMeSection />

      <ExperienceSection />
    </Container>
  )
}
