<?php
/**
 * Template: Contact Us
 * Slug WordPress: contact
 * Sumber: contact.html
 */
get_header();
?>

<main>

    <section class="page-hero-banner position-relative overflow-hidden">
        <div class="subpage-ambient-layer">
            <div class="subpage-blob blob-1"></div>
            <div class="subpage-blob blob-2"></div>
            <div class="subpage-grid-pattern"></div>
            <div class="subpage-particle sp-1"><i class="fa-solid fa-sparkles"></i></div>
            <div class="subpage-particle sp-2"><i class="fa-solid fa-star"></i></div>
        </div>
        <div class="container py-lg-4 position-relative" style="z-index: 2;">
            <div class="row align-items-center g-4">
                <div class="col-lg-8" data-aos="fade-right">
                    <span
                        class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"></span>
                    <h1 class="display-4 fw-bold text-white mb-3">
                        </h1>
                    <p class="text-white-50 fs-5 mb-0">
                        </p>
                </div>

                <div class="col-lg-4 text-lg-end" data-aos="fade-left">
                    <span
                        class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm"></span>
                </div>
            </div>
        </div>
    </section>


    <section class="py-5 py-lg-6 bg-white">
        <div class="container py-lg-4">
            <div class="row g-4 mb-5">
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-4 rounded-4 bg-cream border border-light h-100 shadow-sm">
                        <span
                            class="badge bg-forest text-gold mb-3"></span>
                        <h4 class="text-forest fw-bold mb-2">
                            </h4>
                        <p class="text-muted fs-7 mb-3"><i class="fa-solid fa-location-dot me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-1"><i class="fa-solid fa-phone me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-0"><i class="fa-solid fa-envelope me-1 text-gold"></i>
                            </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="p-4 rounded-4 bg-cream border border-light h-100 shadow-sm">
                        <span
                            class="badge bg-forest text-gold mb-3"></span>
                        <h4 class="text-forest fw-bold mb-2">
                            </h4>
                        <p class="text-muted fs-7 mb-3"><i class="fa-solid fa-location-dot me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-1"><i class="fa-solid fa-phone me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-0"><i class="fa-solid fa-envelope me-1 text-gold"></i>
                            </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div class="p-4 rounded-4 bg-cream border border-light h-100 shadow-sm">
                        <span
                            class="badge bg-forest text-gold mb-3"></span>
                        <h4 class="text-forest fw-bold mb-2">
                            </h4>
                        <p class="text-muted fs-7 mb-3"><i class="fa-solid fa-location-dot me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-1"><i class="fa-solid fa-phone me-1 text-gold"></i>
                            </p>
                        <p class="text-muted fs-7 mb-0"><i class="fa-solid fa-envelope me-1 text-gold"></i>
                            </p>
                    </div>
                </div>
            </div>

            <!-- Interactive Contact Form -->
            <div class="row justify-content-center mt-5">
                <div class="col-lg-8" data-aos="fade-up">
                    <div class="bg-cream p-4 p-md-5 rounded-4 shadow-sm border border-light">
                        <div class="text-center mb-4">
                            <span
                                class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-1"></span>
                            <h3 class="text-forest fw-bold">
                                </h3>
                            <p class="text-muted fs-7">
                                </p>
                        </div>
                        <form id="contact-form"
                            action="<?php echo esc_url(admin_url('admin-ajax.php?action=mentari_contact')); ?>"
                            method="POST" data-ajax-form="true">
                            <div class="form-alert-container"></div>
                            <?php wp_nonce_field('mentari_contact', 'mentari_nonce'); ?>
                            <div style="position:absolute;left:-9999px;" aria-hidden="true"><label>Leave this field
                                    empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
                            </div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="text" name="name" class="form-control rounded-3"
                                        placeholder=""
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="email" name="email" class="form-control rounded-3"
                                        placeholder=""
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="tel" name="phone" class="form-control rounded-3"
                                        placeholder="">
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <select name="campus" class="form-select rounded-3">
                                        <option value="all">
                                            
                                        </option>
                                        <option value="jakarta">
                                            
                                        </option>
                                        <option value="bintaro">
                                            
                                        </option>
                                        <option value="grandsurya">
                                            
                                        </option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="text" name="subject" class="form-control rounded-3"
                                        placeholder=""
                                        required>
                                </div>
                                <div class="col-12">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <textarea name="message" class="form-control rounded-3" rows="4"
                                        placeholder=""
                                        required></textarea>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-mis-primary btn-pill px-5 py-2">
                                         <i
                                            class="fa-solid fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>