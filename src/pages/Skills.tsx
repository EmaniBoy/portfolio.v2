import React from 'react';
import SkillsComponent from '../components/Skills';
import CertificationsComponent from '../components/Certifications';
import AnimatedSection from '../components/AnimatedSection';

export default function Skills() {
  return (
    <AnimatedSection className="min-h-screen">
      <SkillsComponent />
      <CertificationsComponent />
    </AnimatedSection>
  );
}