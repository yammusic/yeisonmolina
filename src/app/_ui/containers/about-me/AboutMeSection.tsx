import React from 'react'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material'
import { FaPersonRays } from 'react-icons/fa6'

import styles from './styles.module.scss'

export function AboutMeSection() {
  const imageSize = 280

  return (
    <Grid
      container
      className={ styles.aboutMeSection }
      component="section"
      direction="column"
      padding={ 4 }
    >
      <Grid
        item
        className={ styles.titleContainer }
        sx={ { flexDirection: { xs: 'column', md: 'row' } } }
        xs={ 12 }
      >
        <FaPersonRays size={ 26 } />

        <Typography sx={ { marginLeft: 3 } } variant="h4">About Me</Typography>
      </Grid>

      <Grid item sx={ { display: 'flex', flexDirection: 'row' } } xs={ 12 }>
        <Image
          alt="profile"
          height={ imageSize }
          src="/assets/profile.webp"
          style={ { borderRadius: '5%', marginRight: '32px' } }
          width={ imageSize }
        />

        <Typography component="p" sx={ { alignContent: 'center' } } variant="body1">
          I&apos;m a software engineer with 8 years of experience in the field. I&apos;m passionate about creating software that solves real problems. I&apos;ve worked on a variety of projects, including web applications, mobile apps, and embedded systems. I&apos;m always looking for new and exciting projects to work on.
        </Typography>
      </Grid>
    </Grid>
  )
}
