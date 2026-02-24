import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Certifications } from './components/Certifications';
import { AMC } from './components/AMC';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Certifications />
        <AMC />
      </main>
      <Footer />
    </div>
  );
}
