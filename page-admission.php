<?php
/**
 * Template: Online Admission
 * Slug WordPress: admission
 * Sumber: admission.html
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


    <section class="py-5 py-lg-6 bg-cream">
        <div class="container py-lg-4">
            <div class="row g-5">
                <div class="col-lg-7" data-aos="fade-right">
                    <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
                        <form id="admission-form"
                            action="<?php echo esc_url(admin_url('admin-ajax.php?action=mentari_admission')); ?>"
                            method="POST" data-ajax-form="true">
                            <div class="form-alert-container"></div>
                            <?php wp_nonce_field('mentari_admission', 'mentari_nonce'); ?>
                            <div style="position:absolute;left:-9999px;" aria-hidden="true"><label>Leave this field
                                    empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
                            </div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="text" name="parent_name" class="form-control rounded-3"
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
                                        placeholder=""
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <select name="campus" class="form-select rounded-3" required>
                                        <option value="" disabled selected>
                                            
                                        </option>
                                        <option value="jakarta">
                                            
                                        </option>
                                        <option value="bintaro">
                                            
                                        </option>
                                        <option value="grandsurya">
                                            
                                        </option>
                                        <option value="mentari-preschool">
                                            
                                        </option>
                                        <option value="sunflower">
                                            
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <select name="grade_level" class="form-select rounded-3" required>
                                        <option value="" disabled selected>
                                            
                                        </option>
                                        <option value="early-years">
                                            
                                        </option>
                                        <option value="elementary">
                                            
                                        </option>
                                        <option value="middle-school">
                                            
                                        </option>
                                        <option value="high-school">
                                            
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <input type="text" name="student_name" class="form-control rounded-3"
                                        placeholder="">
                                </div>
                                <div class="col-12">
                                    <label
                                        class="form-label fw-semibold fs-7 text-dark-slate"></label>
                                    <textarea name="message" class="form-control rounded-3" rows="3"
                                        placeholder=""></textarea>
                                </div>
                                <div class="col-12 mt-4">
                                    <button type="submit"
                                        class="btn btn-mis-primary btn-pill px-4 py-2 w-100">
                                        <i class="fa-solid fa-paper-plane ms-2"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5" data-aos="fade-left">
                    <div class="p-4 p-md-5 rounded-4 bg-white shadow-sm border border-light mb-4">
                        <h4 class="text-forest fw-bold mb-3">
                            </h4>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex gap-3">
                                <span
                                    class="badge bg-gold text-dark fs-6 rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 32px; height: 32px;">1</span>
                                <div>
                                    <h6 class="fw-bold mb-1">
                                        
                                    </h6>
                                    <p class="text-muted fs-7 mb-0">
                                        
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex gap-3">
                                <span
                                    class="badge bg-gold text-dark fs-6 rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 32px; height: 32px;">2</span>
                                <div>
                                    <h6 class="fw-bold mb-1">
                                        
                                    </h6>
                                    <p class="text-muted fs-7 mb-0">
                                        
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex gap-3">
                                <span
                                    class="badge bg-gold text-dark fs-6 rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 32px; height: 32px;">3</span>
                                <div>
                                    <h6 class="fw-bold mb-1">
                                        
                                    </h6>
                                    <p class="text-muted fs-7 mb-0">
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>