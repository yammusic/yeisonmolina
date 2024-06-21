'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './styles.module.scss'
import { CURRICULUM_URL, GITHUB_URL, LINKEDIN_URL } from '@/domain/constants/app'

export function ProfileSection() {
  const t = useTranslations('profile')
  const imageSize = 300

  return (
    <Grid
      container
      className={ styles.profileSection }
      component="section"
      id="home"
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
            height={ imageSize }
            src="/assets/profile-comic.webp"
            style={ { borderRadius: '50%' } }
            width={ imageSize }
          />
        </Box>

        <Stack alignItems={ 'flex-start' }>
          <Typography className={ styles.name } variant="h1">
            { t('iam') }

            <br />

            { t('myName') }
          </Typography>

          <Typography className={ styles.carrierTitle } variant="h3">
            { t('carrierTitle') }
          </Typography>

          <Typography className={ styles.carrier } variant="h3">
            { t('carrier') }
          </Typography>

          <Typography component="span" variant="h5">
            { t('yearsExperience') }
          </Typography>
        </Stack>


        <Stack direction="row" marginTop={ 3 } spacing={ 2 }>
          <Button
            LinkComponent={ Link }
            color="primary"
            href={ LINKEDIN_URL }
            target="_blank"
            variant="outlined"
          >
            <FaLinkedin size={ 22 } />

            <Typography className={ styles.btnText }>LinkedIn</Typography>
          </Button>

          <Button
            LinkComponent={ Link }
            color="primary"
            href={ GITHUB_URL }
            target="_blank"
            variant="outlined"
          >
            <FaGithub size={ 22 } />

            <Typography className={ styles.btnText }>Github</Typography>
          </Button>

          <Button
            LinkComponent={ Link }
            color="secondary"
            href={ CURRICULUM_URL }
            target="_blank"
            variant="outlined"
          >
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
          src="/assets/profile-comic.webp"
          style={ { borderRadius: '50%' } }
          width={ 300 }
        />
      </Grid>
    </Grid>
  )
}
