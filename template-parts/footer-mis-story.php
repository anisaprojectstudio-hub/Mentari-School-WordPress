<?php
$privacy_url = mentari_footer_link_url(
    'mentari_footer_privacy_url',
    function_exists('get_privacy_policy_url') ? get_privacy_policy_url() : ''
);
$terms_url = mentari_footer_link_url('mentari_footer_terms_url');
?>
<footer id="contact-footer" class="site-footer bg-dark-forest text-white pt-5 pb-4">
    <div class="container pt-lg-4 pb-3">
        <div class="row g-4 g-lg-5 mb-5">
            <div class="col-lg-4 col-md-12">
                <div class="footer-brand mb-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/d6e41847-b8e8-4150-9b20-8c32cd909701/jhbjhj%402x.png"
                        alt="Mentari Intercultural School" class="footer-logo mb-3"
                        style="max-height: 50px; filter: brightness(0) invert(1);">
                    <p class="text-white-50 fs-6">
                        Mentari Intercultural School is one of the top and fastest growing international schools in
                        Jakarta, offering globally recognized IB & Cambridge curricula within a positive, nurturing
                        culture.
                    </p>
                </div>
                <div class="footer-social-wrap mb-4">
                    <h6 class="text-gold text-uppercase fw-bold fs-7 tracking-wider mb-3">Follow us to see our
                        activities!</h6>
                    <div class="d-flex gap-2">
                        <a href="https://www.instagram.com/mis.sch.id/?hl=en" target="_blank" rel="noopener noreferrer"
                            class="social-circle-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/Mentari-Intercultural-Schools-103222332045123" target="_blank"
                            rel="noopener noreferrer" class="social-circle-btn" aria-label="Facebook"><i
                                class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/channel/UCj50_pq1NlKjWuh9pTeQ-xg" target="_blank"
                            rel="noopener noreferrer" class="social-circle-btn" aria-label="YouTube"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <h5 class="footer-heading text-white fw-bold mb-3 pb-2 border-bottom border-secondary-subtle">Our
                    Campuses</h5>
                <ul class="footer-links list-unstyled">
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-jakarta')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> MIS Jakarta (Cipete)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-bintaro')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> MIS Bintaro (Sektor 9)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-grand-surya')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> MIS Grand Surya</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mentari-preschool')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> Mentari Preschool Jakarta</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('sunflower-preschool')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> Sunflower Preschool</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <h5 class="footer-heading text-white fw-bold mb-3 pb-2 border-bottom border-secondary-subtle">Useful
                    Links</h5>
                <ul class="footer-links list-unstyled">
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-story')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> MIS Story</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('positive-education')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> Positive Education</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('early-years')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> School Curricula</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('university-counseling')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> University Placements</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('admission')); ?>"><i
                                class="fa-solid fa-angle-right me-2 text-gold"></i> Online Admission</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-12">
                <h5 class="footer-heading text-white fw-bold mb-3 pb-2 border-bottom border-secondary-subtle">Admissions
                    Office</h5>
                <div class="footer-contact-info text-white-50">
                    <p class="mb-2"><i class="fa-solid fa-location-dot text-gold me-2"></i> Jl. H. Jian No. 2, Cipete
                        Utara, Jakarta Selatan 12150</p>
                    <p class="mb-2"><i class="fa-solid fa-phone text-gold me-2"></i> +62 21 725 5410</p>
                    <p class="mb-2"><i class="fa-solid fa-envelope text-gold me-2"></i> info@mentarischool.com</p>
                    <a href="<?php echo esc_url(mentari_page_url('admission')); ?>"
                        class="btn btn-sm btn-outline-light rounded-pill px-3 py-1 mt-2">Inquire Admission</a>
                </div>
            </div>
        </div>

        <div
            class="footer-bottom border-top border-secondary-subtle pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between text-white-50 fs-7">
            <div>&copy; 2026 Mentari Intercultural School. All rights reserved.</div>
            <div class="mt-2 mt-md-0 d-flex gap-3">
                <?php if ($privacy_url): ?>
                    <a href="<?php echo esc_url($privacy_url); ?>" class="text-white-50 text-decoration-none">Privacy
                        Policy</a>
                <?php else: ?>
                    <span class="text-white-50 text-decoration-none">Privacy Policy</span>
                <?php endif; ?>
                <span class="text-muted">|</span>
                <?php if ($terms_url): ?>
                    <a href="<?php echo esc_url($terms_url); ?>" class="text-white-50 text-decoration-none">Terms &amp;
                        Conditions</a>
                <?php else: ?>
                    <span class="text-white-50 text-decoration-none">Terms &amp; Conditions</span>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>