import React from 'react'
import Image from 'next/image'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './styles.module.scss'

export function ProfileSection() {
  return (
    <Grid
      container
      className={ styles.profileSection }
      component="section"
      spacing={ 2 }
    >
      <Grid
        item
        className={ styles.info }
        md={ 6 }
        xs={ 12 }
      >
        <Box sx={ { display: { xs: 'block', md: 'none' } } }>
          <Image
            alt="profile"
            height={ 300 }
            src="/images/profile-comic.jpg"
            style={ { borderRadius: '50%' } }
            width={ 300 }
          />
        </Box>

        <Typography
          className={ styles.name }
          component="h1"
          variant="h2"
        >
          I&apos;m
          <br />
          Yeison Molina
        </Typography>

        <Typography
          gutterBottom
          className={ styles.carrier }
          component="h3"
          variant="h4"
        >
          Software Developer
        </Typography>

        <Stack direction="row" marginTop={ 3 } spacing={ 2 }>
          <Button color="primary" variant="outlined">
            <FaLinkedin size={ 22 } />

            <Typography className={ styles.btnText }>LinkedIn</Typography>
          </Button>

          <Button color="primary" variant="outlined">
            <FaGithub size={ 22 } />

            <Typography className={ styles.btnText }>Github</Typography>
          </Button>

          <Button color="secondary" variant="outlined">
            <FaFilePdf size={ 22 } />

            <Typography className={ styles.btnText }>Curriculum</Typography>
          </Button>
        </Stack>
      </Grid>

      <Grid
        item
        className={ styles.avatar }
        md={ 6 }
        sx={ { display: { xs: 'none', md: 'flex' } } }
      >
        <Image
          alt="profile"
          height={ 300 }
          src="/images/profile-comic.jpg"
          style={ { borderRadius: '50%' } }
          width={ 300 }
        />
      </Grid>
    </Grid>
  )
}
