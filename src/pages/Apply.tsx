import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Apply() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 0 }}>
              Register your interest!
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={9}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, textAlign: 'center', marginBottom: '2rem' }}>
              Interested in being a part of Nakshatra? Fill out the form below so that you're the first to know when we have roles to open up.
            </p>
            <div
              className="glass-card"
              role="status"
              aria-label="Google Form placeholder"
              style={{
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
              }}
            >
              Google Form will be embedded here.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
