'use client'

import React from 'react'
import { Grid, Typography } from '@mui/material'
import { FaSchool } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function ExperienceSection() {
  return (
    <Grid
      container
      component="section"
      direction="column"
      padding={ 4 }
      sx={ {
        // backgroundColor: 'rgba(25, 25, 41, 0.1)',
        // backdropFilter: 'blur(1px)',
      } }
    >
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

        <Typography sx={ { marginLeft: 3 } } variant="h4">Experience</Typography>
      </Grid>

      <Grid item xs={ 12 }>
        {/* Vertical Timeline */}
        <VerticalTimeline>
          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--work"
            contentArrowStyle={ { borderRight: '7px solid  rgb(33, 150, 243)' } }
            contentStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
            date="2011 - present"
            icon={ <MdWork /> }
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>

            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>

            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            // className="vertical-timeline-element--work"
            date="2010 - 2011"
            icon={ <MdWork /> }
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>

            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>

            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            icon={ <MdWork /> }
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>

            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>

            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            icon={ <MdWork /> }
            iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>

            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>

            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--education"
            date="April 2013"
            icon={ <FaSchool /> }
            iconStyle={ { background: 'rgb(233, 30, 99)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>

            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>

            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--education"
            date="November 2012"
            icon={ <FaSchool /> }
            iconStyle={ { background: 'rgb(233, 30, 99)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>

            <h4 className="vertical-timeline-element-subtitle">Certification</h4>

            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            icon={ <FaSchool /> }
            iconStyle={ { background: 'rgb(233, 30, 99)', color: '#fff' } }
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>

            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>

            <p>
              Creative Direction, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible
            // icon={ <StarIcon /> }
            iconStyle={ { background: 'rgb(16, 204, 82)', color: '#fff' } }
          />
        </VerticalTimeline>
      </Grid>
    </Grid>
  )
}
