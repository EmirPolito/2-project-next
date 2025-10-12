import { ModeToggle } from '@/components/ui/buttonDL';
import { HeroParallaxDemo } from '@/components/heroParallaxDemo';
import { StickyScrollRevealDemo } from '@/components/stickyScrollDemo';
import { CardHoverEffectDemo } from '@/components/cardHoverEffectDemo';

function HomePage() {
  return (
    <div>
    <ModeToggle />
   <HeroParallaxDemo />
    <StickyScrollRevealDemo />
    <CardHoverEffectDemo />
    </div>
  )
}

export default HomePage;