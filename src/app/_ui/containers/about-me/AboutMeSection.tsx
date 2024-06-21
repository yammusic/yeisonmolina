import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Grid, Stack, Typography } from '@mui/material'
import { FaPersonRays } from 'react-icons/fa6'

import styles from './styles.module.scss'

export function AboutMeSection() {
  const t = useTranslations('about')
  const imageSize = 280

  return (
    <Stack
      className={ styles.aboutMeSection }
      component="section"
      id="about"
    >
      <Grid
        container
        className={ styles.container }
        direction="column"
      >
        <Grid
          item
          className={ styles.titleContainer }
          sx={ { flexDirection: { xs: 'column', md: 'row' } } }
          xs={ 12 }
        >
          <Stack direction="row" gap={ 2 } mb={ 4 }>
            <FaPersonRays size={ 26 } />

            <Typography variant="h2">
              { t('title') }
            </Typography>
          </Stack>
        </Grid>

        <Grid item className={ styles.descriptionContainer } xs={ 12 }>
          <Stack
            className={ styles.descriptionStack }
            sx={ { flexDirection: { xs: 'column', md: 'row' } } }
          >
            <Image
              alt="profile"
              className={ styles.image }
              height={ imageSize }
              src="/assets/profile.webp"
              width={ imageSize }
            />

            <Stack gap={ 2 }>
              <Typography className={ styles.text } component="p" variant="body1">
                { t('firstDescription') }
              </Typography>

              <Typography className={ styles.text } component="p" variant="body1">
                { t('secondDescription') }
              </Typography>

              <Typography className={ styles.text } component="p" variant="body1">
                { t('thirdDescription') }
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
