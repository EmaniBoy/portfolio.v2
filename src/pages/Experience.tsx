import React from 'react';
import ExperienceComponent from '../components/Experience';
import EducationComponent from '../components/Education';
import AnimatedSection from '../components/AnimatedSection';

export default function Experience() {
  return (
    <AnimatedSection className="min-h-screen">
      <ExperienceComponent />
      <EducationComponent />
    </AnimatedSection>
  );
}