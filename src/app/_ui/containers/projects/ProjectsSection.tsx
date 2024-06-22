import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { GrProjects } from 'react-icons/gr'

import { Carousel } from '@/app/components'

export function ProjectsSection() {
  return (
    <Stack component="section" id="projects">
      <Grid container sx={ { mt: 10 } }>
        <Grid item xs={ 12 }>
          <Stack
            direction="row"
            sx={ {
              gap: 2,
              justifyContent: 'center',
              mb: 4,
            } }
          >
            <GrProjects size={ 26 } />

            <Typography variant="h2">
              Projects
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={ 12 }>
          <Carousel
            options={ { loop: true } }
            slides={ [
              {
                image: '/assets/alojafacil.png',
                title: 'Aloja facil',
              }, {
                image: '/assets/multi-step-form.png',
                title: 'Multi step form',
              },
              {
                image: '/assets/github-repos.png',
                title: 'Github Repositories',
              },
            ] }
          />
        </Grid>
      </Grid>
    </Stack>
  )
}
