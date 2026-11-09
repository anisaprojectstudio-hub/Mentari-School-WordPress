<?php
/**
 * Template: MIS Story
 * Slug WordPress: mis-story
 * Sumber desain: doc/mis-story.html
 * Isi bisa diubah di: Customize > MIS Story Page
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
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"><?php echo esc_html(mentari_story('hero_label')); ?></span>
                    <h1 class="display-4 fw-bold text-white mb-3"><?php echo esc_html(mentari_story('hero_title')); ?></h1>
                    <p class="text-white-50 fs-5 mb-0"><?php echo esc_html(mentari_story('hero_desc')); ?></p>
                </div>
                <div class="col-lg-4 text-lg-end" data-aos="fade-left">
                    <span class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm"><?php echo esc_html(mentari_story('hero_badge')); ?></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Story Section 1: Origins -->
    <section class="py-5 py-lg-6 bg-white">
        <div class="container py-lg-4">
            <div class="row align-items-center g-5">
                <div class="col-lg-6" data-aos="fade-up">
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"><?php echo esc_html(mentari_story('origin_label')); ?></span>
                    <h2 class="display-6 fw-bold text-forest mb-4"><?php echo esc_html(mentari_story('origin_title')); ?></h2>
                    <p class="text-dark-slate lead-text mb-3"><?php echo esc_html(mentari_story('origin_lead')); ?></p>
                    <p class="text-muted mb-4"><?php echo esc_html(mentari_story('origin_text')); ?></p>
                    <div class="row g-3">
                        <div class="col-6">
                            <div class="p-3 rounded-3 bg-light-green border border-light">
                                <h3 class="fw-bold text-forest mb-1"><?php echo esc_html(mentari_story('origin_stat1_num')); ?></h3>
                                <small class="text-muted"><?php echo esc_html(mentari_story('origin_stat1_text')); ?></small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 rounded-3 bg-light-green border border-light">
                                <h3 class="fw-bold text-forest mb-1"><?php echo esc_html(mentari_story('origin_stat2_num')); ?></h3>
                                <small class="text-muted"><?php echo esc_html(mentari_story('origin_stat2_text')); ?></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                    <?php $origin_img = mentari_story('origin_image'); ?>
                    <?php if ($origin_img) : ?>
                        <img src="<?php echo esc_url($origin_img); ?>" alt="<?php echo esc_attr(mentari_story('origin_title')); ?>" class="img-fluid rounded-4 shadow-lg">
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values & Mentari Traits -->
    <section class="py-5 py-lg-6 bg-cream">
        <div class="container py-lg-4">
            <div class="text-center max-w-750 mx-auto mb-5" data-aos="fade-up">
                <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2"><?php echo esc_html(mentari_story('traits_label')); ?></span>
                <h2 class="display-6 fw-bold text-forest"><?php echo esc_html(mentari_story('traits_title')); ?></h2>
                <p class="text-muted"><?php echo esc_html(mentari_story('traits_desc')); ?></p>
            </div>

            <div class="row g-4">
                <?php for ($i = 1; $i <= 3; $i++) : ?>
                    <?php
                    $trait_img   = mentari_story('trait' . $i . '_image');
                    $trait_title = mentari_story('trait' . $i . '_title');
                    $col_class   = (3 === $i) ? 'col-lg-4 col-md-6 mx-auto' : 'col-lg-4 col-md-6';
                    ?>
                    <div class="<?php echo esc_attr($col_class); ?>" data-aos="fade-up" data-aos-delay="<?php echo esc_attr($i * 100); ?>">
                        <div class="p-4 rounded-4 bg-white shadow-sm border border-light h-100 text-center">
                            <?php if ($trait_img) : ?>
                                <div class="mb-3">
                                    <img src="<?php echo esc_url($trait_img); ?>" alt="<?php echo esc_attr($trait_title); ?>" style="max-height: 120px;" class="img-fluid mb-2">
                                </div>
                            <?php endif; ?>
                            <h4 class="text-forest fw-bold mb-2"><?php echo esc_html($trait_title); ?></h4>
                            <p class="text-muted fs-7 mb-0"><?php echo esc_html(mentari_story('trait' . $i . '_desc')); ?></p>
                        </div>
                    </div>
                <?php endfor; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-forest text-white text-center">
        <div class="container py-lg-4">
            <h2 class="display-6 fw-bold text-white mb-3"><?php echo esc_html(mentari_story('cta_title')); ?></h2>
            <p class="text-white-50 max-w-750 mx-auto mb-4"><?php echo esc_html(mentari_story('cta_desc')); ?></p>
            <div class="d-flex justify-content-center gap-3">
                <a href="<?php echo esc_url(mentari_page_url('admission')); ?>" class="btn btn-gold btn-hero-pill"><?php echo esc_html(mentari_story('cta_btn1')); ?> <i class="fa-solid fa-arrow-right ms-2"></i></a>
                <a href="<?php echo esc_url(mentari_page_url('contact')); ?>" class="btn btn-outline-light btn-hero-pill"><?php echo esc_html(mentari_story('cta_btn2')); ?></a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
