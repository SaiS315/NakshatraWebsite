import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sponsorPlaceholders = Array.from({ length: 6 }, (_, index) => index + 1);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const body = [
    `Name: ${formData.get('name')}`,
    `Organization: ${formData.get('organization')}`,
    `Email: ${formData.get('email')}`,
    `Phone: ${formData.get('phone') || 'Not provided'}`,
    `Sponsorship interest: ${formData.get('interest')}`,
    '',
    'Message:',
    `${formData.get('message')}`,
  ].join('\n');
  const params = new URLSearchParams({
    subject: `Sponsorship inquiry from ${formData.get('organization')}`,
    body,
  });

  window.location.href = `mailto:nakshatrauw@gmail.com?${params.toString()}`;
}

export default function Sponsors() {
  return (
    <div className="page-wrapper sponsors-page">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <p className="sponsors-eyebrow">Partner With Us</p>
            <h1 className="sponsors-heading">Become a Sponsor</h1>
            <p className="sponsors-intro">
              Want to support Nakshatra? Fill out the form below and
              let us know how you and your organization would like to support
              us in bringing the best collegiate Indian classical dance teams
              to Madison.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={9} xl={8}>
            <div className="glass-card sponsor-form-card">
              <h2 className="sponsor-section-heading">Sponsorship Inquiry</h2>
              <p className="sponsor-form-note">
                Complete the details below and your email app will open with a
                message ready for you to review and send.
              </p>
              <form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <label className="form-label-dark" htmlFor="sponsor-name">Full Name</label>
                    <input id="sponsor-name" name="name" className="form-control form-control-dark" autoComplete="name" required />
                  </Col>
                  <Col md={6}>
                    <label className="form-label-dark" htmlFor="sponsor-organization">Company or Organization</label>
                    <input id="sponsor-organization" name="organization" className="form-control form-control-dark" autoComplete="organization" required />
                  </Col>
                  <Col md={6}>
                    <label className="form-label-dark" htmlFor="sponsor-email">Email</label>
                    <input id="sponsor-email" name="email" type="email" className="form-control form-control-dark" autoComplete="email" required />
                  </Col>
                  <Col md={6}>
                    <label className="form-label-dark" htmlFor="sponsor-phone">Phone <span className="sponsor-optional">(optional)</span></label>
                    <input id="sponsor-phone" name="phone" type="tel" className="form-control form-control-dark" autoComplete="tel" />
                  </Col>
                  <Col xs={12}>
                    <label className="form-label-dark" htmlFor="sponsor-interest">How would you like to support Nakshatra?</label>
                    <select id="sponsor-interest" name="interest" className="form-select form-select-dark" defaultValue="" required>
                      <option value="" disabled>Select an area of interest</option>
                      <option>Financial sponsorship</option>
                      <option>Products or services</option>
                      <option>Community or promotional partnership</option>
                      <option>Other</option>
                    </select>
                  </Col>
                  <Col xs={12}>
                    <label className="form-label-dark" htmlFor="sponsor-message">Message</label>
                    <textarea id="sponsor-message" name="message" className="form-control form-control-dark" rows={4} placeholder="Share any questions or details about your sponsorship idea." required />
                  </Col>
                  <Col xs={12}>
                    <button className="btn-ghost sponsor-submit" type="submit">Continue to Email</button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>

        <section className="sponsor-gallery" aria-labelledby="past-sponsors-heading">
          <div className="text-center">
            <h2 id="past-sponsors-heading" className="sponsor-section-heading">Past Sponsors</h2>
            <p className="sponsor-gallery-intro">
              We are grateful to the organizations that have supported Nakshatra.
            </p>
          </div>
          <Row className="g-3 justify-content-center">
            {sponsorPlaceholders.map(number => (
              <Col key={number} xs={6} sm={4} lg={3}>
                <div className="sponsor-logo-placeholder" aria-label={`Past sponsor logo placeholder ${number}`}>
                  <span aria-hidden="true">✦</span>
                  <span>Sponsor Logo</span>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}
