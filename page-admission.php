<?php
/**
 * Template: Online Admission
 * Slug WordPress: admission
 */
$content = static function ($field) {
    return mentari_page_content('admission', $field);
};

$campuses = array(
    array('jakarta', 'jakarta'),
    array('bintaro', 'bintaro'),
    array('grandsurya', 'grandsurya'),
    array('mentari-preschool', 'mentari_preschool'),
    array('sunflower', 'sunflower'),
);

$grade_levels = array(
    array('early-years', 'early_years'),
    array('elementary', 'elementary'),
    array('middle-school', 'middle_school'),
    array('high-school', 'high_school'),
);

$process_steps = array(1, 2, 3);

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
                            <div style="position:absolute;left:-9999px;" aria-hidden="true">
                                <label>Leave this field empty
                                    <input type="text" name="website" tabindex="-1" autocomplete="off">
                                </label>
                            </div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="admission-parent-name" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('parent_name_label')); ?>
                                    </label>
                                    <input id="admission-parent-name" type="text" name="parent_name"
                                        class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('parent_name_placeholder')); ?>"
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label for="admission-email" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('email_label')); ?>
                                    </label>
                                    <input id="admission-email" type="email" name="email"
                                        class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('email_placeholder')); ?>"
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label for="admission-phone" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('phone_label')); ?>
                                    </label>
                                    <input id="admission-phone" type="tel" name="phone"
                                        class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('phone_placeholder')); ?>"
                                        required>
                                </div>
                                <div class="col-md-6">
                                    <label for="admission-campus" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('campus_label')); ?>
                                    </label>
                                    <select id="admission-campus" name="campus" class="form-select rounded-3" required>
                                        <option value="" disabled selected>
                                            <?php echo esc_html($content('campus_placeholder')); ?>
                                        </option>
                                        <?php foreach ($campuses as $campus): ?>
                                            <option value="<?php echo esc_attr($campus[0]); ?>">
                                                <?php echo esc_html($content('campus_option_' . $campus[1])); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="admission-grade" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('grade_level_label')); ?>
                                    </label>
                                    <select id="admission-grade" name="grade_level" class="form-select rounded-3" required>
                                        <option value="" disabled selected>
                                            <?php echo esc_html($content('grade_level_placeholder')); ?>
                                        </option>
                                        <?php foreach ($grade_levels as $grade): ?>
                                            <option value="<?php echo esc_attr($grade[0]); ?>">
                                                <?php echo esc_html($content('grade_option_' . $grade[1])); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="admission-student-name" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('student_name_label')); ?>
                                    </label>
                                    <input id="admission-student-name" type="text" name="student_name"
                                        class="form-control rounded-3"
                                        placeholder="<?php echo esc_attr($content('student_name_placeholder')); ?>">
                                </div>
                                <div class="col-12">
                                    <label for="admission-message" class="form-label fw-semibold fs-7 text-dark-slate">
                                        <?php echo esc_html($content('message_label')); ?>
                                    </label>
                                    <textarea id="admission-message" name="message" class="form-control rounded-3"
                                        rows="3"
                                        placeholder="<?php echo esc_attr($content('message_placeholder')); ?>"></textarea>
                                </div>
                                <div class="col-12 mt-4">
                                    <button type="submit" class="btn btn-mis-primary btn-pill px-4 py-2 w-100">
                                        <?php echo esc_html($content('submit_text')); ?>
                                        <i class="fa-solid fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5" data-aos="fade-left">
                    <div class="p-4 p-md-5 rounded-4 bg-white shadow-sm border border-light mb-4">
                        <h4 class="text-forest fw-bold mb-3">
                            <?php echo esc_html($content('process_title')); ?>
                        </h4>
                        <div class="d-flex flex-column gap-3">
                            <?php foreach ($process_steps as $step): ?>
                                <div class="d-flex gap-3">
                                    <span
                                        class="badge bg-gold text-dark fs-6 rounded-circle d-flex align-items-center justify-content-center"
                                        style="width: 32px; height: 32px;">
                                        <?php echo esc_html((string) $step); ?>
                                    </span>
                                    <div>
                                        <h6 class="fw-bold mb-1">
                                            <?php echo esc_html($content('process_' . $step . '_title')); ?>
                                        </h6>
                                        <p class="text-muted fs-7 mb-0">
                                            <?php echo esc_html($content('process_' . $step . '_description')); ?>
                                        </p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
