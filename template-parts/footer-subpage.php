<?php
$privacy_url = mentari_footer_link_url(
    'mentari_footer_privacy_url',
    function_exists('get_privacy_policy_url') ? get_privacy_policy_url() : ''
);
$terms_url = mentari_footer_link_url('mentari_footer_terms_url');
?>
<footer class="site-footer bg-dark-forest text-white pt-5 pb-4">
    <div class="container py-lg-4">
        <div class="row g-4 g-lg-5 mb-5">
            <div class="col-lg-4 col-md-6">
                <div class="footer-brand mb-3">
                    <img src="https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/d6e41847-b8e8-4150-9b20-8c32cd909701/jhbjhj%402x.png"
                        alt="MIS Logo" class="footer-logo mb-3" style="height: 48px; filter: brightness(0) invert(1);">
                    <p class="text-white-50 fs-7 pe-lg-3">
                        Mentari Intercultural School nurtures both mind and heart, fostering globally-minded,
                        compassionate learners prepared for a life of purpose and positive contribution.
                    </p>
                </div>
                <div class="d-flex gap-3">
                    <a href="https://www.instagram.com/mis.sch.id/?hl=en" target="_blank" rel="noopener noreferrer"
                        class="btn btn-sm btn-outline-light rounded-circle"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCj50_pq1NlKjWuh9pTeQ-xg" target="_blank"
                        rel="noopener noreferrer" class="btn btn-sm btn-outline-light rounded-circle"><i
                            class="fa-brands fa-youtube"></i></a>
                    <a href="<?php echo esc_url(mentari_page_url('contact')); ?>"
                        class="btn btn-sm btn-outline-light rounded-circle"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>

            <div class="col-lg-2 col-6">
                <h6 class="text-gold fw-bold text-uppercase mb-3 tracking-wider">Programs</h6>
                <ul class="list-unstyled footer-links">
                    <li><a href="<?php echo esc_url(mentari_page_url('early-years')); ?>">Early Years</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('elementary')); ?>">Elementary (PYP)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('middle-school')); ?>">Middle School (MYP)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('high-school')); ?>">High School (DP)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('university-counseling')); ?>">University
                            Counseling</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-6">
                <h6 class="text-gold fw-bold text-uppercase mb-3 tracking-wider">Campuses</h6>
                <ul class="list-unstyled footer-links">
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-jakarta')); ?>">MIS Jakarta (Cipete)</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-bintaro')); ?>">MIS Bintaro</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mis-grand-surya')); ?>">MIS Grand Surya</a></li>
                    <li><a href="<?php echo esc_url(mentari_page_url('mentari-preschool')); ?>">Mentari Preschool</a>
                    </li>
                    <li><a href="<?php echo esc_url(mentari_page_url('sunflower-preschool')); ?>">Sunflower
                            Preschool</a></li>
                </ul>
            </div>

            <div class="col-lg-4 col-md-6">
                <h6 class="text-gold fw-bold text-uppercase mb-3 tracking-wider">Get in Touch</h6>
                <p class="text-white-50 fs-7 mb-2"><i class="fa-solid fa-location-dot text-gold me-2"></i> Jl. H. Jian
                    No. 2, Cipete Utara, Jakarta Selatan 12150</p>
                <p class="text-white-50 fs-7 mb-2"><i class="fa-solid fa-phone text-gold me-2"></i> +62 21 725 5410 /
                    +62 21 745 8410</p>
                <p class="text-white-50 fs-7 mb-3"><i class="fa-solid fa-envelope text-gold me-2"></i>
                    info@mentarischool.com</p>
                <a href="<?php echo esc_url(mentari_page_url('admission')); ?>"
                    class="btn btn-mis-primary btn-pill btn-sm">Online Admission 2026/2027 <i
                        class="fa-solid fa-arrow-right ms-1"></i></a>
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