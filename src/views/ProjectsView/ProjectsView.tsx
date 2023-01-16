import React from 'react'
import "./ProjectsView.css";
import { Section } from '../../components/Section'
import { ComingSoonBox } from '../../components/Box';

function ProjectsView() {
  return (
    <Section class="section-projects">
        <ComingSoonBox />
        <ComingSoonBox />
        <ComingSoonBox />
    </Section>
  )
}

export default ProjectsView