<?php
/**
 * Template: Contact Us
 * Slug WordPress: contact
 */
$content = static function ($field) {
    return mentari_page_content('contact', $field);
};

$campuses = array(
    array('jakarta', 'jakarta'),
    array('bintaro', 'bintaro'),
    array('grandsurya', 'grandsurya'),
);

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
                    <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-2">
                        <?php echo esc_html($content('hero_label')); ?>
                    </span>
                    <h1 class="display-4 fw-bold text-white mb-3">
                        <?php echo esc_html($content('hero_title')); ?>
                    </h1>
                    <p class="text-white-50 fs-5 mb-0">
                        <?php echo esc_html($content('hero_description')); ?>
                    </p>
                </div>
                <div class="col-lg-4 text-lg-end" data-aos="fade-left">
                    <span class="badge bg-gold text-dark fs-6 px-4 py-2 rounded-pill shadow-sm">
                        <?php echo esc_html($content('hero_badge')); ?>
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 py-lg-6 bg-white">
        <div class="container py-lg-4">
            <div class="row g-4 mb-5">
                <?php foreach ($campuses as $index => $campus): ?>
                    <?php
                    $prefix = 'campus_' . $campus[0] . '_';
                    ?>
                    <div class="col-lg-4 col-md-6<?php echo 2 === $index ? ' mx-auto' : ''; ?>" data-aos="fade-up"
                        data-aos-delay="<?php echo esc_attr((string) (($index + 1) * 100)); ?>">
                        <div class="p-4 rounded-4 bg-cream border border-light h-100 shadow-sm">
                            <span class="badge bg-forest text-gold mb-3">
                                <?php echo esc_html($content($prefix . 'badge')); ?>
                            </span>
                            <h4 class="text-forest fw-bold mb-2">
                                <?php echo esc_html($content($prefix . 'title')); ?>
                            </h4>
                            <p class="text-muted fs-7 mb-3">
                                <i class="fa-solid fa-location-dot me-1 text-gold"></i>
                                <?php echo esc_html($content($prefix . 'address')); ?>
                            </p>
                            <p class="text-muted fs-7 mb-1">
                                <i class="fa-solid fa-phone me-1 text-gold"></i>
                                <?php echo esc_html($content($prefix . 'phone')); ?>
                            </p>
                            <p class="text-muted fs-7 mb-0">
                                <i class="fa-solid fa-envelope me-1 text-gold"></i>
                                <?php echo esc_html($content($prefix . 'email')); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-lg-8" data-aos="fade-up">
                    <div class="bg-cream p-4 p-md-5 rounded-4 shadow-sm border border-light">
                        <div class="text-center mb-4">
                            <span class="sub-label text-gold fw-bold text-uppercase tracking-wider d-block mb-1">
                                <?php echo esc_html($content('form_label')); ?>
                            </span>
                            <h3 class="text-forest fw-bold">
                                <?php echo esc_html($content('form_title')); ?>
                            </h3>
                            <p class="text-muted fs-7">
                                <?php echo esc_html($content('form_description')); ?>
                            </p>
                        </div>
                        <form id="contact-form"
                            action="<?php echo esc_url(admin_url('admin-ajax.php?action=mentari_contact')); ?>"
                            method="POST" data-ajax-form="true">
                            <div class="form-alert-container"></div>
                            <?php wp_nonce_field('mentari_contact', 'mentari_nonce'); ?>
                            <div style="position:absolute;left:-9999px;" aria-hidden="true">
                                <label>Leave this field empty
                                    <input type="text" name="website" tabindex="-1" autocomplete="off">
                                </label>
                            </div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="contact-name" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('name_label')); ?>
                                    </label>
                                    <input id="contact-name" type="text" name="name" class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('name_placeholder')); ?>" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="contact-email" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('email_label')); ?>
                                    </label>
                                    <input id="contact-email" type="email" name="email" class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('email_placeholder')); ?>" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="contact-phone" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('phone_label')); ?>
                                    </label>
                                    <input id="contact-phone" type="tel" name="phone" class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('phone_placeholder')); ?>">
                                </div>
                                <div class="col-md-6">
                                    <label for="contact-campus" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('campus_label')); ?>
                                    </label>
                                    <select id="contact-campus" name="campus" class="form-select rounded-3">
                                        <option value="all">
                                            <?php echo esc_html($content('campus_option_all')); ?>
                                        </option>
                                        <?php foreach ($campuses as $campus): ?>
                                            <option value="<?php echo esc_attr($campus[0]); ?>">
                                                <?php echo esc_html($content('campus_option_' . $campus[0])); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="contact-subject" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('subject_label')); ?>
                                    </label>
                                    <input id="contact-subject" type="text" name="subject"
                                        class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('subject_placeholder')); ?>"
                                        required>
                                </div>
                                <div class="col-12">
                                    <label for="contact-message" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('message_label')); ?>
                                    </label>
                                    <textarea id="contact-message" name="message" class="form-control rounded-3"
                                        rows="4"
                                        placeholder="<?php echo esc_attr($content('message_placeholder')); ?>"
                                        required></textarea>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-mis-primary btn-pill px-5 py-2">
                                        <?php echo esc_html($content('submit_text')); ?>
                                        <i class="fa-solid fa-paper-plane ms-2"></i>
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
