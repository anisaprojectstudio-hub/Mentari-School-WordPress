
<?php
/*
Template Name: MIS Bintaro Campus
Template Post Type: page
*/

get_header();
?>

<main>

    <!-- HERO SECTION -->
    <section class="page-hero-banner position-relative overflow-hidden">

        <div class="subpage-ambient-layer">

            <div class="subpage-blob blob-1"></div>
            <div class="subpage-blob blob-2"></div>
            <div class="subpage-grid-pattern"></div>

            <div class="subpage-particle sp-1">
                <i class="fa-solid fa-sparkles"></i>
            </div>

            <div class="subpage-particle sp-2">
                <i class="fa-solid fa-star"></i>
            </div>

        </div>

        <div class="container py-lg-4 position-relative" style="z-index: 2;">

            <div class="row align-items-center g-4">

                <!-- HERO CONTENT -->
                <div class="col-lg-8" data-aos="fade-right">

                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2">

                        <?php echo esc_html(mentari_bintaro('hero_label')); ?>

                    </span>

                    <h1 class="display-4 fw-bold text-white mb-3">

                        <?php echo esc_html(mentari_bintaro('hero_title')); ?>

                    </h1>

                    <p class="text-white-50 fs-5 mb-0">

                        <?php echo nl2br(esc_html(mentari_bintaro('hero_address'))); ?>

                    </p>

                </div>


                <!-- HERO BADGE -->
                <div class="col-lg-4 text-lg-end" data-aos="fade-left">

                    <span class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm">

                        <?php echo esc_html(mentari_bintaro('hero_badge')); ?>

                    </span>

                </div>

            </div>

        </div>

    </section>


    <!-- WELCOME SECTION -->
    <section class="py-5 py-lg-6 bg-white">

        <div class="container py-lg-4">

            <div class="row align-items-center g-5">

                <!-- WELCOME CONTENT -->
                <div class="col-lg-6" data-aos="fade-up">

                    <h2 class="display-6 fw-bold text-forest mb-4">

                        <?php echo esc_html(mentari_bintaro('welcome_title')); ?>

                    </h2>


                    <p class="lead-text text-dark-slate mb-3">

                        <?php echo esc_html(mentari_bintaro('welcome_lead')); ?>

                    </p>


                    <p class="text-muted mb-4">

                        <?php echo esc_html(mentari_bintaro('welcome_description')); ?>

                    </p>


                    <!-- BUTTON -->
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>"
                       class="btn btn-mis-primary btn-pill">

                        <?php echo esc_html(mentari_bintaro('welcome_button')); ?>

                        <i class="fa-solid fa-arrow-right ms-2"></i>

                    </a>

                </div>


                <!-- CAMPUS IMAGE -->
                <div class="col-lg-6" data-aos="zoom-in">

                    <img
                        src="<?php echo esc_url(mentari_bintaro('welcome_image')); ?>"
                        alt="<?php echo esc_attr(mentari_bintaro('hero_title')); ?>"
                        class="img-fluid rounded-4 shadow-lg"
                    >

                </div>

            </div>

        </div>

    </section>

</main>

<?php get_footer(); ?>
