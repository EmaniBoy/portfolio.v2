import React from 'react';
import ProjectsComponent from '../components/Projects';
import AnimatedSection from '../components/AnimatedSection';

export default function Projects() {
  return (
    <AnimatedSection className="min-h-screen">
      <ProjectsComponent />
    </AnimatedSection>
  );
}