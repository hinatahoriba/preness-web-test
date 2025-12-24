import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import AnalysisShowcase from './components/AnalysisShowcase';
import LearningFlow from './components/LearningFlow';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-100 selection:text-brand-900 relative">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <AnalysisShowcase />
        <LearningFlow />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
