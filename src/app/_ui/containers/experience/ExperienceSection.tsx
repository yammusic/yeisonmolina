'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Grid, Stack, Typography } from '@mui/material'
import { FaSchool, FaStar } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'

import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'

import type { Experience } from './types'

export function ExperienceSection() {
  const t = useTranslations('experience')
  const works = [
    'eccocar', 'itmakers', 'ticmakers',
    'colwit', 'idcmk3', 'wss2',
    'idcmk2', 'wss1', 'idcmk1',
    'coopedia', 'liceo',
  ]
  const educations = [
    'sena2', 'sena1', 'bachelor',
  ]

  const experiences: Experience[] = [
    ...works.map((work) => ({
      title: t(`work.${work}.title`),
      location: t(`work.${work}.location`),
      role: t(`work.${work}.role`),
      date: t(`work.${work}.date`),
      description: t(`work.${work}.description`),
      technologies: t(`work.${work}.technologies`),
      type: 'work',
    })) as Experience[],
    ...educations.map((education) => ({
      title: t(`education.${education}.title`),
      location: t(`education.${education}.location`),
      role: t(`education.${education}.role`),
      date: t(`education.${education}.date`),
      type: 'education',
    })) as Experience[],
  ]

  const styleStar = {
    background: 'var(--background-success-color)',
    color: 'var(--text-color)',
  }

  return (
    <Stack
      component="section"
      id="experience"
    >
      <Grid
        container
        direction="column"
        sx={ {
          padding: 4,
          marginTop: 10,
        } }
      >
        <Stack direction="row" gap={ 2 }>
          <Grid
            item
            sx={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '32px',
            justifyContent: 'center',
          } }
            xs={ 12 }
          >
            <FaSchool size={ 26 } />

            <Typography sx={ { marginLeft: 3 } } variant="h2">
              { t('title') }
            </Typography>
          </Grid>
        </Stack>

        <Grid item xs={ 12 }>
          {/* Vertical Timeline */}
          <VerticalTimeline>
            { experiences.map((experience) => {
              const isWork = experience.type === 'work'

              const styleArrow = {
                borderRight: `7px solid  var(--background-${isWork ? 'primary' : 'secondary'}-color)`
              }
              const styleContent = {
                background: `var(--background-${isWork ? 'primary' : 'secondary'}-color)`,
                color: 'var(--text-color)',
              }

              return (
                <VerticalTimelineElement
                  visible
                  contentArrowStyle={ styleArrow }
                  contentStyle={ styleContent }
                  date={ experience.date }
                  icon={ isWork ? <MdWork /> : <FaSchool /> }
                  iconStyle={ styleContent }
                  key={ experience.title }
                >
                  <Typography variant="h3">
                    { experience.title }
                  </Typography>

                  <Typography variant="h4">
                    { experience.role }
                  </Typography>

                  <Typography variant="h5">
                    { experience.location }
                  </Typography>


                  <Stack gap={ 1.5 }>
                    { !!experience.description && (
                      <Typography component="p" variant="body1">
                        { experience.description }
                      </Typography>
                    ) }

                    { !!experience.technologies && (
                      <Typography component="span" variant="body1">
                        <strong>{ `${t('technologies')}: ` }</strong>

                        { experience.technologies }
                      </Typography>
                    ) }
                  </Stack>

                </VerticalTimelineElement>
              )
            }) }

            <VerticalTimelineElement
              visible
              icon={ <FaStar /> }
              iconStyle={ styleStar }
            />
          </VerticalTimeline>
        </Grid>
      </Grid>
    </Stack>
  )
}
