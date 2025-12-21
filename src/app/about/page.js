import HeroSectionMinimal from '@/components/about/HeroSectionMinimal'
import OurStorySection from '@/components/about/OurStorySection'
import MissionSection from '@/components/about/MissionSection'
import VisionSection from '@/components/about/VisionSection'
import WhatWeDoSection from '@/components/about/WhatWeDoSection'
import CoreValuesSection from '@/components/about/CoreValuesSection'
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection'
import TeamSection from '@/components/about/TeamSection'
import BrandPromiseSection from '@/components/about/BrandPromiseSection'
import CTAFooterSection from '@/components/about/CTAFooterSection'

export const metadata = {
  title: 'About Designing Vidya',
  description: 'Designing Vidya — design education, mentorship and portfolio-building for global opportunities.'
}

export default function AboutPage(){
  return (
    <main id="main-content" role="main">
      <HeroSectionMinimal />
      <OurStorySection />
      <MissionSection />
      <VisionSection />
      <WhatWeDoSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <BrandPromiseSection />
      <CTAFooterSection />
    </main>
  )
}
