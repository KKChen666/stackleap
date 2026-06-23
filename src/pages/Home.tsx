import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import ParticleBackground from '@/components/three/ParticleBackground';

export default function Home() {
  return (
    <>
      <HeroSection>
        <ParticleBackground />
      </HeroSection>
      <FeaturedProjects />
      <AboutPreview />
    </>
  );
}
