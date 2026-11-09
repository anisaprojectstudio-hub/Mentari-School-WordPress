<?php
/**
 * Template: Positive Education At MIS
 * Slug WordPress: positive-education
 * Sumber desain: positive-education.html
 * Isi bisa diubah di: Customize > Positive Education Page
 */
get_header();
?>

<main>

    <!-- Page Hero Banner -->
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
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"><?php echo esc_html(mentari_pe('hero_label')); ?></span>
                    <h1 class="display-4 fw-bold text-white mb-3"><?php echo esc_html(mentari_pe('hero_title')); ?></h1>
                    <p class="text-white-50 fs-5 mb-0"><?php echo esc_html(mentari_pe('hero_desc')); ?></p>
                </div>
                <div class="col-lg-4 text-lg-end" data-aos="fade-left">
                    <span class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm"><?php echo esc_html(mentari_pe('hero_badge')); ?></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Wellbeing Framework -->
    <section class="py-5 py-lg-6 bg-white">
        <div class="container py-lg-4">
            <div class="row align-items-center g-5">
                <div class="col-lg-6" data-aos="fade-up">
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"><?php echo esc_html(mentari_pe('fw_label')); ?></span>
                    <h2 class="display-6 fw-bold text-forest mb-4"><?php echo esc_html(mentari_pe('fw_title')); ?></h2>
                    <p class="text-dark-slate lead-text mb-3"><?php echo esc_html(mentari_pe('fw_lead')); ?></p>
                    <p class="text-muted mb-4"><?php echo esc_html(mentari_pe('fw_text')); ?></p>
                    <div class="d-flex flex-column gap-3">
                        <?php for ($i = 1; $i <= 2; $i++) : ?>
                            <div class="d-flex align-items-start gap-3">
                                <div class="p-2 rounded-circle bg-forest text-gold"><i class="<?php echo esc_attr(mentari_pe('feat' . $i . '_icon')); ?>"></i></div>
                                <div>
                                    <h5 class="fw-bold text-forest mb-1"><?php echo esc_html(mentari_pe('feat' . $i . '_title')); ?></h5>
                                    <p class="text-muted fs-7 mb-0"><?php echo esc_html(mentari_pe('feat' . $i . '_desc')); ?></p>
                                </div>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>
                <div class="col-lg-6 text-center" data-aos="zoom-in" data-aos-delay="200">
                    <?php $pe_img = mentari_pe('fw_image'); ?>
                    <?php if ($pe_img) : ?>
                        <img src="<?php echo esc_url($pe_img); ?>" alt="<?php echo esc_attr(mentari_pe('hero_title')); ?>" class="img-fluid rounded-4 shadow-lg">
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
