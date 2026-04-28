import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="section" style={{ padding: '8rem 0' }}>
          <div className="container">
            <div className="glass" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
              <h2>About <span className="text-gradient">Arrit Solutions</span></h2>
              <p style={{ maxWidth: '800px', fontSize: '1.25rem', margin: '0 auto' }}>
                We are a team of passionate technologists dedicated to solving complex business challenges. 
                With a focus on innovation and excellence, we partner with our clients to deliver 
                transformative digital solutions that drive real results.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
