
<?php
/*
Template Name: MIS Jakarta Campus
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

                <div class="col-lg-8" data-aos="fade-right">
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2">
                        Campus Location
                    </span>

                    <h1 class="display-4 fw-bold text-white mb-3">
                        MIS Jakarta (Cipete)
                    </h1>

                    <p class="text-white-50 fs-5 mb-0">
                        Jl. H. Jian No. 2, Cipete Utara, Kebayoran Baru,
                        Jakarta Selatan 12150
                    </p>
                </div>

                <div class="col-lg-4 text-lg-end" data-aos="fade-left">
                    <span class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm">
                        Flagship Campus
                    </span>
                </div>

            </div>
        </div>
    </section>


    <!-- WELCOME SECTION -->
    <section class="py-5 py-lg-6 bg-white">
        <div class="container py-lg-4">
            <div class="row align-items-center g-5">

                <div class="col-lg-6" data-aos="fade-up">

                    <h2 class="display-6 fw-bold text-forest mb-4">
                        Welcome to MIS Jakarta
                    </h2>

                    <p class="lead-text text-dark-slate mb-3">
                        Our founding international campus in Cipete offers
                        complete educational levels from Elementary through
                        Senior High School.
                    </p>

                    <p class="text-muted mb-4">
                        Equipped with science laboratories, design technology
                        labs, indoor sports complex, Olympic swimming pool,
                        performing arts auditorium, and rich library facilities.
                    </p>

                    <a href="<?php echo esc_url(home_url('/contact/')); ?>"
                       class="btn btn-mis-primary btn-pill">
                        Schedule Campus Tour
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                    </a>

                </div>

                <div class="col-lg-6" data-aos="zoom-in">

                    <img
                        src="https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/55ef63c0-1f26-4ef8-aacc-43a4fe82b0c4/DJI_0855.JPG"
                        alt="MIS Jakarta Campus"
                        class="img-fluid rounded-4 shadow-lg"
                    >

                </div>

            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
