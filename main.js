import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo">
        <span class="logo-text">Trisha's<br><small>Skin & Cosmetic Clinic</small></span>
      </a>
      
      <nav class="desktop-nav">
        <ul>
          <li><a href="#about">About Dr. Krunal</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="#" class="btn btn-primary open-booking-modal">Book Consultation <span class="material-icons-outlined">arrow_forward</span></a>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span class="material-icons-outlined">menu</span>
        </button>
      </div>
    </div>
  </header>
  
  <main>
    <section class="hero" id="home">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="trust-badge">
            <span class="material-icons-outlined">stars</span>
            <span>4.8/5 Rated Dermatologist in Vadodara</span>
          </div>
          <h1 class="hero-title">Expert Care for <span class="text-gradient">Healthy, Radiant Skin</span></h1>
          <p class="hero-subtitle">Led by Dr. Krunal Tralsawala, offering advanced medical dermatology and cosmetic treatments customized for your skin's unique needs.</p>
          
          <div class="hero-cta-group">
            <a href="#" class="btn btn-primary open-booking-modal">
              Book Your Visit (₹500)
            </a>
            <div class="clinic-hours">
              <span class="material-icons-outlined">schedule</span>
              <span>Mon-Sat: 5:00 PM – 8:30 PM</span>
            </div>
          </div>
          
          <div class="trust-signals">
            <div class="trust-item">
              <div class="trust-rating">5/5</div>
              <div class="trust-label">Practo</div>
            </div>
            <div class="trust-item">
              <div class="trust-rating">4.4/5</div>
              <div class="trust-label">Justdial</div>
            </div>
            <div class="trust-item">
              <div class="trust-rating">12+</div>
              <div class="trust-label">Years Exp.</div>
            </div>
          </div>
        </div>
        <div class="hero-image-wrapper">
            <img src="/hero.png" alt="Trisha Skin & Cosmetic Clinic Interior" loading="lazy">
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrapper">
            <img src="/dr_krunal.png" alt="Dr. Krunal Tralsawala" loading="lazy">
            <div class="experience-badge">
              <strong>12+</strong> Years Experience
            </div>
          </div>
          <div class="about-content">
            <span class="section-subtitle">Meet Your Specialist</span>
            <h2>Dr. Krunal Tralsawala</h2>
            <h3 class="doctor-credential">MBBS, MD in Dermatology, Venereology & Leprosy</h3>
            <p>With over 12 years of overall medical experience and 6 years specializing in dermatology and dermatosurgery, Dr. Krunal provides a personalized, ethical approach to treating skin conditions and aesthetic goals.</p>
            <p>Our clinic combines medical rigor with advanced aesthetic procedures to ensure you receive the safest, most effective treatments available in Vadodara.</p>
            
            <ul class="credentials-list">
              <li><span class="material-icons-outlined text-primary">check_circle</span> Medical Registration Verified</li>
              <li><span class="material-icons-outlined text-primary">check_circle</span> Government Medical College, Surat Alumnus</li>
              <li><span class="material-icons-outlined text-primary">check_circle</span> Specialist Dermatosurgeon & Cosmetologist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section services-section bg-light">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Our Expertise</span>
          <h2>Comprehensive Skin Care Solutions</h2>
          <p>From medical treatments to advanced cosmetic procedures, we offer a full spectrum of dermatological care.</p>
        </div>
        
        <div class="services-grid">
          <!-- Medical Dermatology -->
          <div class="service-card">
            <div class="service-icon">
              <span class="material-icons-outlined">health_and_safety</span>
            </div>
            <h3>Medical Dermatology</h3>
            <ul class="service-list">
              <li>Skin disease treatment</li>
              <li>Leprosy (Hansen’s disease)</li>
              <li>Sexually transmitted disease testing</li>
            </ul>
          </div>

          <!-- Acne & Skin Correction -->
          <div class="service-card">
            <div class="service-icon">
              <span class="material-icons-outlined">clean_hands</span>
            </div>
            <h3>Acne & Skin Correction</h3>
            <ul class="service-list">
              <li>Advanced Acne treatment</li>
              <li>Acne scar surgery</li>
              <li>Microneedling for scars</li>
              <li>Chemical peels</li>
            </ul>
          </div>

          <!-- Cosmetic Rejuvenation -->
          <div class="service-card">
            <div class="service-icon">
              <span class="material-icons-outlined">face</span>
            </div>
            <h3>Cosmetic Rejuvenation</h3>
            <ul class="service-list">
              <li>Anti-ageing treatments</li>
              <li>Pigmentation treatment</li>
              <li>Skin rejuvenation therapies</li>
              <li>Cosmetic dermatology</li>
            </ul>
          </div>

          <!-- Laser & Hair -->
          <div class="service-card">
            <div class="service-icon">
              <span class="material-icons-outlined">content_cut</span>
            </div>
            <h3>Laser & Hair Care</h3>
            <ul class="service-list">
              <li>Laser hair removal</li>
              <li>Advanced Laser skin therapy</li>
              <li>Hair loss treatments</li>
              <li>Hair transplant consultations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results / Social Proof Section -->
    <section id="results" class="section results-section">
      <div class="container">
        <div class="section-header">
           <span class="section-subtitle">Why Choose Us</span>
           <h2>Trusted by Thousands in Vadodara</h2>
        </div>
        <div class="reviews-grid">
           <div class="review-card">
              <div class="review-stars">
                 <span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span>
              </div>
              <p class="review-text">"Dr. Krunal is very knowledgeable and patient. My acne cleared up completely within a few months of following his treatment plan."</p>
              <div class="review-author">- Verified Patient</div>
           </div>
           <div class="review-card">
              <div class="review-stars">
                 <span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span>
              </div>
              <p class="review-text">"The clinic is spotlessly clean and the laser treatment results were fantastic. Highly recommend for any skin issues."</p>
              <div class="review-author">- Google Reviewer</div>
           </div>
        </div>
      </div>
    </section>

  </main>
  
  <footer id="contact" class="footer">
    <div class="container footer-container">
      <div class="footer-info">
         <h2 class="footer-logo">Trisha Skin & Cosmetic Clinic</h2>
         <p>Combining medical dermatology with aesthetic excellence to give you the skin you deserve.</p>
         <div class="footer-ratings">
           <span class="rating-badge">4.8★ on Google (328 reviews)</span>
         </div>
      </div>
      <div class="footer-contact">
         <h3>Contact Us</h3>
         <ul>
           <li>
             <span class="material-icons-outlined">location_on</span>
             <span>2nd Floor, SF-3 Earth Icon, New VIP Road,<br>Khodiyar Nagar Char Rasta, Ajwa Road,<br>Vadodara, Gujarat 390019</span>
           </li>
           <li>
             <span class="material-icons-outlined">phone</span>
             <span>088666 77746</span>
           </li>
           <li>
             <span class="material-icons-outlined">schedule</span>
             <span>Mon-Sat: 5:00 PM – 8:30 PM (₹500 Consultation Fee)</span>
           </li>
         </ul>
      </div>
    </div>
    <div class="footer-bottom container">
       <p>&copy; 2026 Trisha Skin & Cosmetic Clinic. All rights reserved.</p>
    </div>
  </footer>

  <!-- Booking Modal -->
  <div class="modal-overlay" id="bookingModal">
    <div class="modal">
      <button class="modal-close" id="closeModal" aria-label="Close">
        <span class="material-icons-outlined">close</span>
      </button>
      <div class="modal-header">
        <h2>Book a Consultation</h2>
        <p>Fill in your details and we'll confirm your appointment.</p>
      </div>
      <form id="bookingForm" class="booking-form">
        <div class="form-row">
          <div class="form-group">
            <label for="patientName">Full Name <span class="required">*</span></label>
            <input type="text" id="patientName" name="patientName" placeholder="Enter your full name" required />
          </div>
          <div class="form-group">
            <label for="patientPhone">Phone Number <span class="required">*</span></label>
            <input type="tel" id="patientPhone" name="patientPhone" placeholder="e.g. 088666 77746" required />
          </div>
        </div>
        <div class="form-group">
          <label for="patientEmail">Email Address</label>
          <input type="email" id="patientEmail" name="patientEmail" placeholder="your@email.com (optional)" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="preferredDate">Preferred Date <span class="required">*</span></label>
            <input type="date" id="preferredDate" name="preferredDate" required />
          </div>
          <div class="form-group">
            <label for="preferredTime">Preferred Time</label>
            <select id="preferredTime" name="preferredTime">
              <option value="">Select a time slot</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="serviceType">Service / Concern</label>
          <select id="serviceType" name="serviceType">
            <option value="">Select a concern (optional)</option>
            <option value="General Dermatology">General Dermatology Consultation</option>
            <option value="Acne Treatment">Acne Treatment</option>
            <option value="Acne Scar Treatment">Acne Scar / Microneedling</option>
            <option value="Pigmentation">Pigmentation Treatment</option>
            <option value="Anti-Ageing">Anti-Ageing Treatment</option>
            <option value="Laser Hair Removal">Laser Hair Removal</option>
            <option value="Laser Skin Therapy">Laser Skin Therapy</option>
            <option value="Hair Transplant">Hair Transplant Consultation</option>
            <option value="Chemical Peel">Chemical Peel</option>
            <option value="Skin Rejuvenation">Skin Rejuvenation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="patientMessage">Additional Notes</label>
          <textarea id="patientMessage" name="patientMessage" rows="3" placeholder="Briefly describe your concern or any questions..."></textarea>
        </div>
        <div class="form-footer">
          <p class="fee-note"><span class="material-icons-outlined">info</span> Consultation fee: ₹500 | Mon-Sat, 5:00 PM – 8:30 PM</p>
          <button type="submit" class="btn btn-primary btn-submit">Confirm Booking <span class="material-icons-outlined">check_circle</span></button>
        </div>
      </form>
      <div class="form-success" id="formSuccess" style="display:none;">
        <span class="material-icons-outlined success-icon">task_alt</span>
        <h3>Booking Request Sent!</h3>
        <p>Thank you! We'll contact you shortly to confirm your appointment.</p>
        <button class="btn btn-secondary" id="closeSuccessModal">Close</button>
      </div>
    </div>
  </div>
`

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#' && !this.classList.contains('open-booking-modal')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Booking Modal Logic
const modal = document.getElementById('bookingModal');
const closeBtn = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');
const closeSuccessBtn = document.getElementById('closeSuccessModal');

function openModal() {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('preferredDate').setAttribute('min', today);
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  // Reset form after closing
  setTimeout(() => {
    bookingForm.style.display = '';
    formSuccess.style.display = 'none';
    bookingForm.reset();
  }, 300);
}

// Open modal on all booking buttons
document.querySelectorAll('.open-booking-modal').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
closeSuccessBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Form submission
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Show success message
  bookingForm.style.display = 'none';
  formSuccess.style.display = 'flex';
});
