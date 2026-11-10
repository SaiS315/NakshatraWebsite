import Container from 'react-bootstrap/Container';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '1300px', padding: '0 1rem' }}>
          <h1 className="hero-title">NAKSHATRA</h1>
          <p className="hero-subtitle">
            UW–Madison&apos;s Premier Indian Classical Dance Competition
          </p>
        </div>
      </section>

      <section className="home-countdown-section">
        <Container>
          <CountdownTimer />
        </Container>
      </section>
    </>
  );
}
