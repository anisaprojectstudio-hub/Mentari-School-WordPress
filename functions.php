<?php

require_once __DIR__ . '/inc/internal-page-customizer.php';

function mentari_school_enqueue_assets()
{
    $theme_uri = get_template_directory_uri();

    // CSS utama dan vendor
    wp_enqueue_style(
        'mentari-vendor',
        $theme_uri . '/styles/vendor.css',
        array(),
        '1.0.0'
    );

    wp_enqueue_style(
        'mentari-main',
        $theme_uri . '/styles/main.css',
        array('mentari-vendor'),
        '1.0.0'
    );

    // Modernizr dimuat di bagian head
    wp_enqueue_script(
        'mentari-modernizr',
        $theme_uri . '/scripts/modernizr.js',
        array(),
        '1.0.0',
        false
    );

    // JavaScript vendor
    wp_enqueue_script(
        'mentari-vendor-js',
        $theme_uri . '/scripts/vendor.js',
        array('jquery'),
        '1.0.0',
        true
    );

    // JavaScript utama, setelah vendor
    wp_enqueue_script(
        'mentari-main-js',
        $theme_uri . '/scripts/main.js',
        array('mentari-vendor-js'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'mentari_school_enqueue_assets');

function mentari_sanitize_hero_title($value)
{
    return wp_kses($value, array(
        'br' => array(),
        'span' => array(
            'class' => array(),
        ),
    ));
}

function mentari_footer_link_url($setting_id, $default = '')
{
    $url = get_theme_mod($setting_id, $default);

    return is_string($url) ? esc_url($url) : '';
}

function mentari_google_translate_is_selected()
{
    return isset($_COOKIE['googtrans'])
        && '/en/id' === sanitize_text_field(wp_unslash($_COOKIE['googtrans']));
}

function mentari_enqueue_google_translate()
{
    if (mentari_google_translate_is_selected()) {
        wp_enqueue_script(
            'mentari-google-translate',
            'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
            array('mentari-main-js'),
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'mentari_enqueue_google_translate', 20);

/*** Mentari School - Homepage Customizer ***/
function mentari_school_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_homepage_panel', array(
        'title' => __('Homepage', 'mentari-school'),
        'priority' => 100,
    ));

    $wp_customize->add_section('mentari_homepage_section', array(
        'title' => __('Hero & School Purpose', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 30,
    ));

    // Pengaturan teks utama dan teks highlight judul hero
    $wp_customize->add_setting('mentari_hero_title_main', array(
        'default' => 'More than lessons.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_hero_title_main_control', array(
        'label' => 'Judul Hero - Teks Utama',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_title_main',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_hero_title_highlight', array(
        'default' => 'It’s life.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_hero_title_highlight_control', array(
        'label' => 'Judul Hero - Teks Highlight',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_title_highlight',
        'type' => 'text',
    ));

    // Pengaturan deskripsi hero
    $wp_customize->add_setting('mentari_main_hero_description', array(
        'default' => 'At MIS, learning goes beyond the classroom—nurturing minds, building characters, and shaping futures.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('mentari_hero_description_control', array(
        'label' => 'Deskripsi Hero Homepage',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_main_hero_description',
        'type' => 'textarea',
    ));


    // Pengaturan gambar slide 1 hero
    $wp_customize->add_setting('mentari_hero_slide_1_image', array(
        'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/ab3c27cc-230e-4a3b-b217-5118e9f7e903/HeroPage2%402x.png',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'mentari_hero_slide_1_image_control',
            array(
                'label' => 'Gambar Hero Slide 1',
                'section' => 'mentari_homepage_section',
                'settings' => 'mentari_hero_slide_1_image',
            )
        )
    );


    // Pengaturan gambar slide 2 sampai 5
    $hero_slides = array(
        2 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/3ed09e47-5337-4d3c-8f42-775ec47323bd/Teaching+142.jpg',
        3 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/b2ac868c-6af4-4273-b5a2-fe1d37ff187a/HS+Inspiring.jpg',
        4 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/2c601019-8f7e-49d9-b418-5f9477ed8e5b/MENTARISHOW-262.JPG',
        5 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1576ef94-cf1a-4ef4-86e4-2411b5967bb8/High+School+2.jpg',
    );

    foreach ($hero_slides as $number => $default_image) {
        $setting_id = 'mentari_hero_slide_' . $number . '_image';

        $wp_customize->add_setting($setting_id, array(
            'default' => $default_image,
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $setting_id . '_control',
                array(
                    'label' => 'Gambar Hero Slide ' . $number,
                    'section' => 'mentari_homepage_section',
                    'settings' => $setting_id,
                )
            )
        );
    }

    // Pengaturan tombol Admission
    $wp_customize->add_setting('mentari_hero_admission_button_text', array(
        'default' => 'Admission',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_hero_admission_button_text_control', array(
        'label' => 'Teks Tombol Admission',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_admission_button_text',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_hero_admission_button_url', array(
        'default' => '#admission',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('mentari_hero_admission_button_url_control', array(
        'label' => 'Link Tombol Admission',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_admission_button_url',
        'type' => 'text',
    ));


    // Pengaturan tombol Watch Story
    $wp_customize->add_setting('mentari_hero_story_button_text', array(
        'default' => 'Watch Story',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_hero_story_button_text_control', array(
        'label' => 'Teks Tombol Watch Story',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_story_button_text',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_hero_story_button_url', array(
        'default' => '#listen-video',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('mentari_hero_story_button_url_control', array(
        'label' => 'Link Tombol Watch Story',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_story_button_url',
        'type' => 'text',
    ));

    // Pengaturan teks badge hero
    $wp_customize->add_setting('mentari_hero_badge_text', array(
        'default' => 'IB World School & Cambridge Accredited',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_hero_badge_text_control', array(
        'label' => 'Teks Badge Hero',
        'section' => 'mentari_homepage_section',
        'settings' => 'mentari_hero_badge_text',
        'type' => 'text',
    ));

    // Statistik hero 1
    $hero_stats = array(
        1 => array(
            'value' => '30+ Years',
            'label' => 'Educational Legacy',
        ),
        2 => array(
            'value' => '100+',
            'label' => 'Top Uni Placements',
        ),
        3 => array(
            'value' => '3',
            'label' => 'Campuses in Jakarta',
        ),
    );

    foreach ($hero_stats as $number => $stat) {
        $value_id = 'mentari_hero_stat_' . $number . '_value';
        $label_id = 'mentari_hero_stat_' . $number . '_label';

        $wp_customize->add_setting($value_id, array(
            'default' => $stat['value'],
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control($value_id . '_control', array(
            'label' => 'Statistik ' . $number . ' - Angka',
            'section' => 'mentari_homepage_section',
            'settings' => $value_id,
            'type' => 'text',
        ));

        $wp_customize->add_setting($label_id, array(
            'default' => $stat['label'],
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control($label_id . '_control', array(
            'label' => 'Statistik ' . $number . ' - Keterangan',
            'section' => 'mentari_homepage_section',
            'settings' => $label_id,
            'type' => 'text',
        ));
    }

    // SECTION 2: PURPOSE & IB DP SCORE

    $purpose_settings = array(
        'mentari_purpose_label' => array(
            'label' => 'Purpose - Label',
            'default' => 'Our Mission & Purpose',
        ),
        'mentari_purpose_title' => array(
            'label' => 'Purpose - Judul',
            'default' => 'Nurturing Both Mind and Heart',
        ),
        'mentari_purpose_paragraph_1' => array(
            'label' => 'Purpose - Paragraf Utama',
            'default' => 'Mentari Intercultural School was founded with a clear purpose: to nurture both the mind and the heart. We offer a values-driven, globally minded education that empowers students to grow with purpose, reach their full potential, and become compassionate leaders who make a difference in their communities and the world.',
        ),
        'mentari_purpose_paragraph_2' => array(
            'label' => 'Purpose - Paragraf Kedua',
            'default' => 'Curious about who we are and what we believe in? Let’s take you there.',
        ),
        'mentari_purpose_button_text' => array(
            'label' => 'Purpose - Teks Tombol',
            'default' => 'Learn More',
        ),
        'mentari_purpose_button_url' => array(
            'label' => 'Purpose - Link Tombol',
            'default' => 'mis-story.html',
        ),
    );

    foreach ($purpose_settings as $setting_id => $item) {
        $is_url = ('mentari_purpose_button_url' === $setting_id);

        $wp_customize->add_setting($setting_id, array(
            'default' => $item['default'],
            'sanitize_callback' => $is_url
                ? 'esc_url_raw'
                : 'sanitize_text_field',
        ));

        $wp_customize->add_control($setting_id . '_control', array(
            'label' => $item['label'],
            'section' => 'mentari_homepage_section',
            'settings' => $setting_id,
            'type' => 'text',
        ));
    }

    // Gambar IB DP Score
    $wp_customize->add_setting('mentari_purpose_score_image', array(
        'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/b4ca3fd0-d14d-4be3-b507-849bb6c1c95c/MISJ+IB+DP+Score+2025+%281%29.png',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'mentari_purpose_score_image_control',
            array(
                'label' => 'Purpose - Gambar IB DP Score',
                'section' => 'mentari_homepage_section',
                'settings' => 'mentari_purpose_score_image',
            )
        )
    );


    // SECTION 3: OVER 27 YEARS OF DEDICATION

    $dedication_settings = array(
        'mentari_dedication_label' => array(
            'label' => 'Dedication - Label',
            'default' => 'Excellence in Education',
        ),
        'mentari_dedication_title' => array(
            'label' => 'Dedication - Judul',
            'default' => 'Over 27 Years of Dedication',
        ),
        'mentari_dedication_description' => array(
            'label' => 'Dedication - Deskripsi',
            'default' => 'Empowering generations of confident, empathetic, and future-ready thinkers.',
        ),
        'mentari_dedication_card_1_title' => array(
            'label' => 'Dedication - Kartu 1 Judul',
            'default' => 'Teaching',
        ),
        'mentari_dedication_card_1_description' => array(
            'label' => 'Dedication - Kartu 1 Deskripsi',
            'default' => 'Inspiring a lifelong love of learning.',
        ),
        'mentari_dedication_card_2_title' => array(
            'label' => 'Dedication - Kartu 2 Judul',
            'default' => 'Inspiring',
        ),
        'mentari_dedication_card_2_description' => array(
            'label' => 'Dedication - Kartu 2 Deskripsi',
            'default' => 'Encouraging students to discover their potential.',
        ),
        'mentari_dedication_card_3_title' => array(
            'label' => 'Dedication - Kartu 3 Judul',
            'default' => 'Caring',
        ),
        'mentari_dedication_card_3_description' => array(
            'label' => 'Dedication - Kartu 3 Deskripsi',
            'default' => 'Building a supportive and caring community.',
        ),
    );

    foreach ($dedication_settings as $setting_id => $item) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $item['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control($setting_id . '_control', array(
            'label' => $item['label'],
            'section' => 'mentari_homepage_section',
            'settings' => $setting_id,
            'type' => 'text',
        ));
    }

    // SECTION 3: DEDICATION CARD HEADINGS

    $dedication_heading_settings = array(
        'mentari_dedication_card_1_heading' => array(
            'label' => 'Dedication - Kartu 1 Heading',
            'default' => 'Teaching with Heart',
        ),
        'mentari_dedication_card_2_heading' => array(
            'label' => 'Dedication - Kartu 2 Heading',
            'default' => 'Igniting Potential',
        ),
        'mentari_dedication_card_3_heading' => array(
            'label' => 'Dedication - Kartu 3 Heading',
            'default' => 'Rooted in Compassion',
        ),
    );

    foreach ($dedication_heading_settings as $setting_id => $item) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $item['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control($setting_id . '_control', array(
            'label' => $item['label'],
            'section' => 'mentari_homepage_section',
            'settings' => $setting_id,
            'type' => 'text',
        ));
    }

    // SECTION 3: DEDICATION CARD IMAGES

    $dedication_image_settings = array(
        'mentari_dedication_card_1_image' => array(
            'label' => 'Dedication - Gambar Kartu 1',
            'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/3ed09e47-5337-4d3c-8f42-775ec47323bd/Teaching+142.jpg',
        ),
        'mentari_dedication_card_2_image' => array(
            'label' => 'Dedication - Gambar Kartu 2',
            'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/b2ac868c-6af4-4273-b5a2-fe1d37ff187a/HS+Inspiring.jpg',
        ),
        'mentari_dedication_card_3_image' => array(
            'label' => 'Dedication - Gambar Kartu 3',
            'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/6e51620e-37bc-4346-aa52-fb68cb558536/Caring+%281%29.jpg',
        ),
    );

    foreach ($dedication_image_settings as $setting_id => $item) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $item['default'],
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $setting_id . '_control',
                array(
                    'label' => $item['label'],
                    'section' => 'mentari_homepage_section',
                    'settings' => $setting_id,
                )
            )
        );
    }

    // SECTION 4: CALLOUT BANNER

    $wp_customize->add_section('mentari_callout_section', array(
        'title' => __('Callout Banner', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 40,
    ));


    $callout_settings = array(
        'mentari_callout_title' => array(
            'label' => 'Judul Banner',
            'default' => 'Let’s grow as one.',
            'type' => 'text',
        ),
        'mentari_callout_description' => array(
            'label' => 'Deskripsi Banner',
            'default' => 'Because every family starts with belonging—and grows with purpose.',
            'type' => 'textarea',
        ),
        'mentari_callout_button_text' => array(
            'label' => 'Teks Tombol',
            'default' => 'Apply Now',
            'type' => 'text',
        ),
        'mentari_callout_button_url' => array(
            'label' => 'URL Tombol',
            'default' => '#admission',
            'type' => 'url',
        ),
    );

    foreach ($callout_settings as $setting_id => $setting) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $setting['default'],
            'sanitize_callback' => (
                $setting['type'] === 'textarea'
                ? 'sanitize_textarea_field'
                : ($setting['type'] === 'url'
                    ? 'esc_url_raw'
                    : 'sanitize_text_field')
            ),
            'transport' => 'refresh',
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => $setting['label'],
            'section' => 'mentari_callout_section',
            'type' => $setting['type'],
        ));
    }

    // Background image
    $wp_customize->add_setting('mentari_callout_background', array(
        'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/2c601019-8f7e-49d9-b418-5f9477ed8e5b/MENTARISHOW-262.JPG',
        'sanitize_callback' => 'esc_url_raw',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'mentari_callout_background',
            array(
                'label' => __('Gambar Latar Banner', 'mentari-school'),
                'section' => 'mentari_callout_section',
            )
        )
    );


    /* SECTION 5: SCHOOL CURRICULA */
    $wp_customize->add_section('mentari_curricula_section', array(
        'title' => __('School Curricula', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 50,
    ));

    $curricula_settings = array(
        'mentari_curricula_label' => array(
            'label' => 'Label Bagian',
            'default' => 'Academic Pathway',
            'type' => 'text',
        ),
        'mentari_curricula_title' => array(
            'label' => 'Judul Bagian',
            'default' => 'School Curricula',
            'type' => 'text',
        ),
        'mentari_curricula_description' => array(
            'label' => 'Deskripsi Bagian',
            'default' => 'Comprehensive educational programs from early childhood through to pre-university preparation.',
            'type' => 'textarea',
        ),
    );

    $curricula_cards = array(
        'early_years' => array(
            'title' => 'Early Years',
            'age' => 'Ages 2 - 5',
            'description' => 'Play-based, inquiry-driven learning nurturing natural curiosity and joyful discovery.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1c0f3d35-d3ae-4cc5-9adc-18948a8b41a5/DSC08102.jpg',
            'url' => mentari_page_url('early-years'),
            'button' => 'Explore Program',
        ),
        'elementary' => array(
            'title' => 'Elementary',
            'age' => 'Grades 1 - 5',
            'description' => 'IB Primary Years Programme (PYP) inspiring critical thinking and international mindedness.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/5837a716-b51d-4b88-966d-863b64140333/Elementary+7.png',
            'url' => mentari_page_url('elementary'),
            'button' => 'Explore Program',
        ),
        'middle_school' => array(
            'title' => 'Middle School',
            'age' => 'Grades 6 - 8',
            'description' => 'IB Middle Years Programme (MYP) developing academic mastery, empathy, and leadership.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/7530af28-f093-4e25-8353-e17589919861/School+Curricula+-+JHS+45_2.jpg',
            'url' => mentari_page_url('middle-school'),
            'button' => 'Explore Program',
        ),
        'high_school' => array(
            'title' => 'High School',
            'age' => 'Grades 9 - 12',
            'description' => 'Cambridge IGCSE and IB Diploma Programme (DP) preparing students for worldwide higher education success.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1576ef94-cf1a-4ef4-86e4-2411b5967bb8/High+School+2.jpg',
            'url' => mentari_page_url('high-school'),
            'button' => 'Explore Program',
        ),
        'university_counseling' => array(
            'title' => 'University Counseling',
            'age' => 'College Pathways',
            'description' => 'Dedicated 1-on-1 global admissions advisory assisting students into top world-renowned universities.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/8f65bfce-676a-43d1-a0f6-17db6974c471/Screenshot+2025-07-30+at+10.25.50.png',
            'url' => '#universities',
            'button' => 'Explore Placements',
        ),
    );

    foreach ($curricula_settings as $setting_id => $setting) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $setting['default'],
            'sanitize_callback' => $setting['type'] === 'textarea'
                ? 'sanitize_textarea_field'
                : 'sanitize_text_field',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => $setting['label'],
            'section' => 'mentari_curricula_section',
            'type' => $setting['type'],
        ));
    }

    foreach ($curricula_cards as $card_id => $card) {
        $fields = array(
            'title' => array(
                'label' => 'Judul',
                'type' => 'text',
            ),
            'age' => array(
                'label' => 'Usia / Tingkat Kelas',
                'type' => 'text',
            ),
            'description' => array(
                'label' => 'Deskripsi',
                'type' => 'textarea',
            ),
            'url' => array(
                'label' => 'URL Tombol',
                'type' => 'url',
            ),
            'button' => array(
                'label' => 'Teks Tombol',
                'type' => 'text',
            ),
        );

        foreach ($fields as $field_id => $field) {
            $setting_id = 'mentari_curricula_' . $card_id . '_' . $field_id;

            $wp_customize->add_setting($setting_id, array(
                'default' => $card[$field_id],
                'sanitize_callback' => $field['type'] === 'textarea'
                    ? 'sanitize_textarea_field'
                    : ($field['type'] === 'url'
                        ? 'esc_url_raw'
                        : 'sanitize_text_field'),
                'transport' => 'refresh',
            ));

            $wp_customize->add_control($setting_id, array(
                'label' => $card['title'] . ' — ' . $field['label'],
                'section' => 'mentari_curricula_section',
                'type' => $field['type'],
            ));
        }

        $image_setting_id = 'mentari_curricula_' . $card_id . '_image';

        $wp_customize->add_setting($image_setting_id, array(
            'default' => $card['image'],
            'sanitize_callback' => 'esc_url_raw',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $image_setting_id,
                array(
                    'label' => $card['title'] . ' — Gambar',
                    'section' => 'mentari_curricula_section',
                    'settings' => $image_setting_id,
                )
            )
        );
    }

    /* SECTION 6: CAMPUSES */
    $wp_customize->add_section('mentari_campuses_section', array(
        'title' => __('Campuses', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 60,
    ));

    $campuses_general = array(
        'mentari_campuses_label' => array(
            'label' => 'Label Bagian',
            'default' => 'Our Locations',
            'type' => 'text',
        ),
        'mentari_campuses_title' => array(
            'label' => 'Judul Bagian',
            'default' => 'Campuses',
            'type' => 'text',
        ),
        'mentari_campuses_description' => array(
            'label' => 'Deskripsi Bagian',
            'default' => 'Modern, vibrant, and safe learning environments across Greater Jakarta.',
            'type' => 'textarea',
        ),
    );

    foreach ($campuses_general as $setting_id => $setting) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $setting['default'],
            'sanitize_callback' => $setting['type'] === 'textarea'
                ? 'sanitize_textarea_field'
                : 'sanitize_text_field',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => $setting['label'],
            'section' => 'mentari_campuses_section',
            'type' => $setting['type'],
        ));
    }

    $campuses_cards = array(
        'bintaro' => array(
            'title' => 'MIS Bintaro',
            'location' => 'Bintaro Sektor 9',
            'description' => 'Comprehensive campus serving Early Childhood, Elementary, Middle School, and High School with state-of-the-art sports and arts facilities.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/7d1ed6cb-ede3-4e77-b77a-1b433961e04e/11.jpg',
            'url' => mentari_page_url('mis-bintaro'),
            'button' => 'Campus Details',
        ),
        'jakarta' => array(
            'title' => 'MIS Jakarta',
            'location' => 'Cipete, South Jakarta',
            'description' => 'Our flagship international campus in Cipete, renowned for its strong community, academic rigor, and vibrant student life.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/55ef63c0-1f26-4ef8-aacc-43a4fe82b0c4/DJI_0855.JPG',
            'url' => mentari_page_url('mis-jakarta'),
            'button' => 'Campus Details',
        ),
        'grand_surya' => array(
            'title' => 'MIS Grand Surya',
            'location' => 'West Jakarta',
            'description' => 'Purpose-built modern campus providing exceptional international curriculum and holistic development programs in West Jakarta.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/b9584050-a372-4b9f-95e7-2e57688e2f7f/DJI_0266.jpg',
            'url' => mentari_page_url('mis-grand-surya'),
            'button' => 'Campus Details',
        ),
        'preschool_jakarta' => array(
            'title' => 'Mentari Preschool Jakarta',
            'location' => 'Jakarta',
            'description' => 'Nurturing joyful discovery and developmental milestones for children in their most formative early years.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/c3d7a938-2ffe-460e-92a4-6a785a41fdb2/L1030398.jpg',
            'url' => mentari_page_url('mentari-preschool'),
            'button' => 'Campus Details',
        ),
        'sunflower' => array(
            'title' => 'Sunflower Preschool',
            'location' => 'Bintaro',
            'description' => 'A warm, homey, and stimulating space where little learners flourish through creative play and values-driven guidance.',
            'image' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/7bae7578-f323-4c61-952f-dc78f4ec141f/DSC01916-2.jpg',
            'url' => mentari_page_url('sunflower-preschool'),
            'button' => 'Campus Details',
        ),
    );

    $campus_fields = array(
        'title' => array(
            'label' => 'Nama Kampus',
            'type' => 'text',
        ),
        'location' => array(
            'label' => 'Lokasi',
            'type' => 'text',
        ),
        'description' => array(
            'label' => 'Deskripsi',
            'type' => 'textarea',
        ),
        'url' => array(
            'label' => 'URL Tombol',
            'type' => 'url',
        ),
        'button' => array(
            'label' => 'Teks Tombol',
            'type' => 'text',
        ),
    );

    foreach ($campuses_cards as $campus_id => $campus) {

        foreach ($campus_fields as $field_id => $field) {
            $setting_id = 'mentari_campus_' . $campus_id . '_' . $field_id;

            $wp_customize->add_setting($setting_id, array(
                'default' => $campus[$field_id],
                'sanitize_callback' => $field['type'] === 'textarea'
                    ? 'sanitize_textarea_field'
                    : ($field['type'] === 'url'
                        ? 'esc_url_raw'
                        : 'sanitize_text_field'),
                'transport' => 'refresh',
            ));

            $wp_customize->add_control($setting_id, array(
                'label' => $campus['title'] . ' — ' . $field['label'],
                'section' => 'mentari_campuses_section',
                'type' => $field['type'],
            ));
        }

        $image_setting_id = 'mentari_campus_' . $campus_id . '_image';

        $wp_customize->add_setting($image_setting_id, array(
            'default' => $campus['image'],
            'sanitize_callback' => 'esc_url_raw',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $image_setting_id,
                array(
                    'label' => $campus['title'] . ' — Gambar',
                    'section' => 'mentari_campuses_section',
                    'settings' => $image_setting_id,
                )
            )
        );
    }


    // ================= SECTION 7: LISTEN MORE ABOUT US =================

    $wp_customize->add_section('mentari_listen_video_section', array(
        'title' => __('Listen More About Us', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 70,
    ));

    $wp_customize->add_setting('mentari_listen_video_label', array(
        'default' => 'Community Voices',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_listen_video_label', array(
        'label' => __('Section Label', 'mentari-school'),
        'section' => 'mentari_listen_video_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_listen_video_title', array(
        'default' => 'Listen More About Us',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_listen_video_title', array(
        'label' => __('Section Title', 'mentari-school'),
        'section' => 'mentari_listen_video_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_listen_video_description', array(
        'default' => 'Take a moment to watch our testimonial video, where our community shares their heartfelt experiences. It’s a warm glimpse into the vibrant and supportive environment that makes MIS special.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('mentari_listen_video_description', array(
        'label' => __('Section Description', 'mentari-school'),
        'section' => 'mentari_listen_video_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('mentari_listen_video_thumbnail', array(
        'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/47202415-a773-47aa-9e81-0f07ca85d6ff/C0019T01.JPG',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'mentari_listen_video_thumbnail',
            array(
                'label' => __('Video Thumbnail', 'mentari-school'),
                'section' => 'mentari_listen_video_section',
            )
        )
    );

    $wp_customize->add_setting('mentari_listen_video_button_text', array(
        'default' => 'Click to Watch Community Story',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_listen_video_button_text', array(
        'label' => __('Text Below Play Button', 'mentari-school'),
        'section' => 'mentari_listen_video_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('mentari_listen_video_url', array(
        'default' => 'https://video.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/e9538798-62cd-4555-ba02-6405c339492f/1920_1080.mp4',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('mentari_listen_video_url', array(
        'label' => __('Testimonial Video URL', 'mentari-school'),
        'description' => __('Masukkan URL video testimonial yang akan diputar.', 'mentari-school'),
        'section' => 'mentari_listen_video_section',
        'type' => 'url',
    ));


    // ================= SECTION 8 & 9: UNIVERSITY PREPARATION & LOGOS =================

    $wp_customize->add_section('mentari_universities_section', array(
        'title' => __('University Preparation', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 80,
    ));

    // General Content
    $university_fields = array(
        'mentari_universities_label' => array(
            'label' => 'Section Label',
            'default' => 'Global Pathways',
            'type' => 'text',
        ),
        'mentari_universities_title' => array(
            'label' => 'Section Title',
            'default' => 'Your children’s future is limitless with MIS — preparing them for top universities both here and abroad.',
            'type' => 'textarea',
        ),
        'mentari_universities_description' => array(
            'label' => 'Section Description',
            'default' => 'Our graduates are accepted into world-leading institutions across the USA, UK, Canada, Australia, Asia, and Indonesia.',
            'type' => 'textarea',
        ),
    );

    foreach ($university_fields as $setting_id => $field) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $field['default'],
            'sanitize_callback' => 'sanitize_textarea_field',
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => __($field['label'], 'mentari-school'),
            'section' => 'mentari_universities_section',
            'type' => $field['type'],
        ));
    }

    // University Logo Images
    $university_logo_defaults = array(
        1 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/a75c8c18-14d1-43b2-883f-4c6691b46c39/Artboard+2.png',
        2 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/f15234c7-c7ca-4c71-be8b-a19458307c1e/Artboard+3.png',
        3 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/b80572e9-7e6d-4dcb-9882-8c32357699d7/Artboard+4.png',
        4 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/edcd355b-424f-4e68-870b-458b1d760405/Artboard+5.png',
        5 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/66560432-0044-4bba-b4fd-a138297e78b8/Artboard+6.png',
        6 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/067372b9-af02-47c1-9260-4f1e37945be0/Artboard+7.png',
        7 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/08ed2e26-c342-44ba-833b-08acb5281681/Artboard+8.png',
        8 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/e4281170-81fd-4ee7-b48a-b2c49e7d0621/Artboard+9.png',
        9 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/910715c8-ce3b-44c1-bf95-bb206f05eb23/Artboard+10.png',
        10 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/3ca46bba-5d16-4d0b-b983-d288d4c9d81a/Artboard+11.png',
        11 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/2d19b63d-ba74-4d3d-a7c3-32dda3b89fd8/Artboard+12.png',
        12 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/5f8c23f8-78d0-4414-9aad-a77301e8ef39/Artboard+13.png',
        13 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/79899ca7-4de3-4877-b5d6-eec3e47c0caa/Artboard+14.png',
        14 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/edaf7328-e65c-45cc-8857-ddeb7159e76c/Artboard+15.png',
        15 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/490346b7-e6fb-43cc-811c-558f4b6b8e5e/Artboard+16.png',
        16 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/d357258f-0363-49c7-97ab-f7f1533b0264/Artboard+17.png',
        17 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/0bbec192-2f13-4542-a1fe-2a2f04c1e846/Artboard+18.png',
        18 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/e4b4066b-9181-4ff7-90d5-0f89fa5ab42f/Artboard+19.png',
        19 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/004265a2-f4fc-46cf-a6b7-49474a1e2a61/Artboard+20.png',
        20 => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/a5706aeb-fff0-4bba-a849-f2192a66754a/Artboard+21.png',
    );

    foreach ($university_logo_defaults as $number => $image_url) {
        $setting_id = 'mentari_university_logo_' . $number;

        $wp_customize->add_setting($setting_id, array(
            'default' => $image_url,
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $setting_id,
                array(
                    'label' => sprintf(__('University Logo %d', 'mentari-school'), $number),
                    'section' => 'mentari_universities_section',
                )
            )
        );
    }


    // ================= SECTION 10: CONNECT WITH US =================

    $wp_customize->add_section('mentari_instagram_section', array(
        'title' => __('Connect With Us', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 90,
    ));

    // General Section Settings
    $instagram_fields = array(
        'mentari_instagram_label' => array(
            'label' => 'Section Label',
            'default' => 'Social Feed',
            'type' => 'text',
        ),
        'mentari_instagram_title' => array(
            'label' => 'Section Title',
            'default' => 'Connect with us',
            'type' => 'text',
        ),
        'mentari_instagram_description' => array(
            'label' => 'Section Description',
            'default' => 'Follow our daily stories, campus events, and student highlights on',
            'type' => 'textarea',
        ),
        'mentari_instagram_url' => array(
            'label' => 'Instagram Profile URL',
            'default' => 'https://www.instagram.com/mis.sch.id/?hl=en',
            'type' => 'url',
        ),
        'mentari_instagram_username' => array(
            'label' => 'Instagram Username',
            'default' => '@mis.sch.id',
            'type' => 'text',
        ),
        'mentari_instagram_cta' => array(
            'label' => 'Bottom Button Text',
            'default' => 'Join Our Instagram Community @mis.sch.id',
            'type' => 'text',
        ),
    );

    foreach ($instagram_fields as $setting_id => $field) {
        $sanitize = ($field['type'] === 'url')
            ? 'esc_url_raw'
            : (($field['type'] === 'textarea')
                ? 'sanitize_textarea_field'
                : 'sanitize_text_field');

        $wp_customize->add_setting($setting_id, array(
            'default' => $field['default'],
            'sanitize_callback' => $sanitize,
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => __($field['label'], 'mentari-school'),
            'section' => 'mentari_instagram_section',
            'type' => $field['type'],
        ));
    }

    // Instagram Post Defaults
    $instagram_posts = array(
        1 => array(
            'image' => 'images/A little look back at our Open House at MISB E. We honestly didn’t expect to welcome so many familie_kkfin.jpg',
            'alt' => 'MISB Open House',
            'type' => 'video',
            'likes' => 482,
            'comments' => 34,
        ),
        2 => array(
            'image' => 'images/From the first day of school to the last, our students have shown incredible growth and dedication throughout the year. We are so proud of their achievements and can.jp',
            'alt' => 'Student Growth and Dedication',
            'type' => 'image',
            'likes' => 619,
            'comments' => 41,
        ),
        3 => array(
            'image' => 'images/What a day! Our MISJ High School Open House brought together so many wonderful families who took the_12z9z.jpg',
            'alt' => 'MISJ High School Open House',
            'type' => 'video',
            'likes' => 530,
            'comments' => 29,
        ),
        4 => array(
            'image' => 'images/🌋 It’s not just dust. It’s a flight risk. ✈️ Why can volcanic ash stop planes from flying Swipe th_riojx.jpg',
            'alt' => 'Volcanic Ash Aviation Safety',
            'type' => 'image',
            'likes' => 395,
            'comments' => 18,
        ),
        5 => array(
            'image' => 'images/A little look back. 💙 From conversations with families to curious questions, classroom visits, and_fmxn2.jpg',
            'alt' => 'Family Connections at MIS',
            'type' => 'image',
            'likes' => 477,
            'comments' => 22,
        ),
        6 => array(
            'image' => 'images/🌋 PARENT REMINDER VOLCANIC ASHFALL Following the recent eruption of Anak Krakatau, volcanic ash h_hgd9z.jpg',
            'alt' => 'Parent Advisory & Safety',
            'type' => 'image',
            'likes' => 734,
            'comments' => 56,
        ),
        7 => array(
            'image' => 'images/A little look back at our MISB High School Open House. 💙✨ A day filled with meaningful conversation_u5yhm.jpg',
            'alt' => 'MISB High School Highlights',
            'type' => 'image',
            'likes' => 890,
            'comments' => 64,
        ),
        8 => array(
            'image' => 'images/A day of connection, discovery, and new possibilities. 💚 Last Saturday, we welcomed families to the_673mg.jpg',
            'alt' => 'Meaningful Learning at MIS',
            'type' => 'video',
            'likes' => 912,
            'comments' => 78,
        ),
    );

    // Individual Instagram Post Controls
    foreach ($instagram_posts as $post_number => $post) {

        $image_setting = 'mentari_instagram_post_' . $post_number . '_image';

        $wp_customize->add_setting($image_setting, array(
            'default' => $post['image'],
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $image_setting,
                array(
                    'label' => sprintf(__('Post %d - Image', 'mentari-school'), $post_number),
                    'section' => 'mentari_instagram_section',
                )
            )
        );

        $fields = array(
            'alt' => array(
                'label' => sprintf(__('Post %d - Image Description', 'mentari-school'), $post_number),
                'default' => $post['alt'],
                'type' => 'text',
                'sanitize' => 'sanitize_text_field',
            ),
            'type' => array(
                'label' => sprintf(__('Post %d - Content Type', 'mentari-school'), $post_number),
                'default' => $post['type'],
                'type' => 'select',
                'sanitize' => 'sanitize_text_field',
            ),
            'likes' => array(
                'label' => sprintf(__('Post %d - Likes', 'mentari-school'), $post_number),
                'default' => $post['likes'],
                'type' => 'number',
                'sanitize' => 'absint',
            ),
            'comments' => array(
                'label' => sprintf(__('Post %d - Comments', 'mentari-school'), $post_number),
                'default' => $post['comments'],
                'type' => 'number',
                'sanitize' => 'absint',
            ),
        );

        foreach ($fields as $field_name => $field) {

            $setting_id = 'mentari_instagram_post_' . $post_number . '_' . $field_name;

            $wp_customize->add_setting($setting_id, array(
                'default' => $field['default'],
                'sanitize_callback' => $field['sanitize'],
            ));

            $control_args = array(
                'label' => $field['label'],
                'section' => 'mentari_instagram_section',
                'type' => $field['type'],
            );

            if ($field_name === 'type') {
                $control_args['choices'] = array(
                    'image' => __('Photo', 'mentari-school'),
                    'video' => __('Reel', 'mentari-school'),
                );
            }

            $wp_customize->add_control($setting_id, $control_args);
        }
    }


    // SECTION 11: ONLINE ADMISSION CTA

    $wp_customize->add_section('mentari_admission_section', array(
        'title' => __('Online Admission CTA', 'mentari-school'),
        'panel' => 'mentari_homepage_panel',
        'priority' => 100,
    ));

    // Admission Label
    $wp_customize->add_setting('mentari_admission_label', array(
        'default' => 'Enrollment Open',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_admission_label', array(
        'label' => __('Section Label', 'mentari-school'),
        'section' => 'mentari_admission_section',
        'type' => 'text',
    ));

    // Admission Title
    $wp_customize->add_setting('mentari_admission_title', array(
        'default' => "Begin Your Child's Journey at Mentari",
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_admission_title', array(
        'label' => __('Section Title', 'mentari-school'),
        'section' => 'mentari_admission_section',
        'type' => 'text',
    ));

    // Admission Description
    $wp_customize->add_setting('mentari_admission_description', array(
        'default' => 'Admissions for Academic Year 2026/2027 are now open across all our campuses. Connect with our admissions counselors today.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('mentari_admission_description', array(
        'label' => __('Section Description', 'mentari-school'),
        'section' => 'mentari_admission_section',
        'type' => 'textarea',
    ));

    // Admission Button Text
    $wp_customize->add_setting('mentari_admission_button_text', array(
        'default' => 'Online Admission Form',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('mentari_admission_button_text', array(
        'label' => __('Button Text', 'mentari-school'),
        'section' => 'mentari_admission_section',
        'type' => 'text',
    ));

    // Admission Button URL
    $wp_customize->add_setting('mentari_admission_button_url', array(
        'default' => '#contact-footer',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('mentari_admission_button_url', array(
        'label' => __('Button URL', 'mentari-school'),
        'description' => __('Masukkan URL tujuan atau anchor seperti #contact-footer.', 'mentari-school'),
        'section' => 'mentari_admission_section',
        'type' => 'url',
    ));

    $wp_customize->add_section('mentari_footer_links_section', array(
        'title' => __('Footer - Site Links', 'mentari-school'),
        'priority' => 110,
    ));

    $footer_links = array(
        'mentari_footer_privacy_url' => array(
            'label' => __('Privacy Policy URL', 'mentari-school'),
            'default' => function_exists('get_privacy_policy_url') ? get_privacy_policy_url() : '',
        ),
        'mentari_footer_terms_url' => array(
            'label' => __('Terms & Conditions URL', 'mentari-school'),
            'default' => '',
        ),
        'mentari_footer_sitemap_url' => array(
            'label' => __('Sitemap URL', 'mentari-school'),
            'default' => home_url('/wp-sitemap.xml'),
        ),
    );

    foreach ($footer_links as $setting_id => $link) {
        $wp_customize->add_setting($setting_id, array(
            'default' => $link['default'],
            'sanitize_callback' => 'esc_url_raw',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control($setting_id, array(
            'label' => $link['label'],
            'section' => 'mentari_footer_links_section',
            'type' => 'url',
        ));
    }

}
add_action('customize_register', 'mentari_school_customize_register');

/*** Mentari School - Subpage integration ***/

/**
 * Daftar halaman subpage: slug => judul halaman WordPress.
 * Slug harus sama dengan nama template page-{slug}.php.
 */
function mentari_subpages()
{
    return array(
        'mis-story' => 'MIS Story',
        'positive-education' => 'Positive Education At MIS',
        'early-years' => 'Early Years',
        'elementary' => 'Elementary',
        'middle-school' => 'Middle School',
        'high-school' => 'High School',
        'university-counseling' => 'University Counseling',
        'mis-jakarta' => 'MIS Jakarta',
        'mis-bintaro' => 'MIS Bintaro',
        'mis-grand-surya' => 'MIS Grand Surya',
        'mentari-preschool' => 'Mentari Preschool Jakarta',
        'sunflower-preschool' => 'Sunflower Preschool',
        'admission' => 'Online Admission',
        'contact' => 'Contact Us',
    );
}

/** Grup menu dropdown (untuk status aktif parent). */
function mentari_nav_groups()
{
    return array(
        'about' => array('mis-story', 'positive-education'),
        'programs' => array('early-years', 'elementary', 'middle-school', 'high-school', 'university-counseling'),
        'campus' => array('mis-jakarta', 'mis-bintaro', 'mis-grand-surya', 'mentari-preschool', 'sunflower-preschool'),
    );
}

/** URL halaman berdasarkan slug (memakai permalink asli bila halaman sudah ada). */
function mentari_page_url($slug)
{
    $page = get_page_by_path($slug, OBJECT, 'page');
    if ($page && 'publish' === $page->post_status) {
        return get_permalink($page);
    }
    return home_url('/' . $slug . '/');
}

/** Link "Connect": anchor lokal di homepage, atau homepage + #connect dari halaman lain. */
function mentari_connect_url()
{
    return is_front_page() ? '#connect' : home_url('/#connect');
}

/** Class ' active' bila halaman saat ini adalah $slug. */
function mentari_active_class($slug)
{
    return is_page($slug) ? ' active' : '';
}

/** Class ' active' bila halaman saat ini ada di dalam grup dropdown. */
function mentari_group_active($group)
{
    $groups = mentari_nav_groups();
    if (isset($groups[$group]) && is_page($groups[$group])) {
        return ' active';
    }
    return '';
}

/** Ubah nilai Customizer lama seperti "mis-story.html" menjadi URL WordPress. */
function mentari_resolve_url($url)
{
    $url = trim((string) $url);
    if ('' === $url || '#' === $url[0] || preg_match('#^(https?:)?//#i', $url)) {
        return $url;
    }
    if (preg_match('#^([a-z0-9-]+)\.html(\#.*)?$#i', $url, $m)) {
        $anchor = isset($m[2]) ? $m[2] : '';
        if ('index' === strtolower($m[1])) {
            return home_url('/') . $anchor;
        }
        if (array_key_exists($m[1], mentari_subpages())) {
            return mentari_page_url($m[1]) . $anchor;
        }
    }
    return $url;
}

/** Judul dokumen per halaman (diambil dari <title> HTML sumber). */
function mentari_document_title()
{
    $titles = array(
        'mis-story' => 'MIS Story - Mentari Intercultural School',
        'positive-education' => 'Positive Education - Mentari Intercultural School',
        'early-years' => 'Early Years Education - Mentari Intercultural School',
        'elementary' => 'Elementary School - Mentari Intercultural School',
        'middle-school' => 'Middle School - Mentari Intercultural School',
        'high-school' => 'High School - Mentari Intercultural School',
        'university-counseling' => 'University Counseling - Mentari Intercultural School',
        'mis-jakarta' => 'MIS Jakarta Campus - Mentari Intercultural School',
        'mis-bintaro' => 'MIS Bintaro Campus - Mentari Intercultural School',
        'mis-grand-surya' => 'MIS Grand Surya Campus - Mentari Intercultural School',
        'mentari-preschool' => 'Mentari Preschool Jakarta - Mentari Intercultural School',
        'sunflower-preschool' => 'Sunflower Preschool - Mentari Intercultural School',
        'admission' => 'Online Admission - Mentari Intercultural School',
        'contact' => 'Contact Us - Mentari Intercultural School'
    );
    if (is_front_page()) {
        return 'Mentari Intercultural School - More than lessons, it\'s life';
    }
    if (is_page()) {
        $slug = get_post_field('post_name', get_queried_object_id());
        if (in_array($slug, array('admission', 'contact'), true)) {
            return mentari_page_content($slug, 'seo_title');
        }
        if (isset($titles[$slug])) {
            return $titles[$slug];
        }
    }
    return wp_get_document_title();
}

/** Meta description per halaman. */
function mentari_document_description()
{
    $descs = array(
        'mis-story' => 'MIS Story - Mentari Intercultural School history, founded in 1994 by 5 mothers with a vision for transformative international education.',
        'positive-education' => 'Positive Education at MIS nurtures academic mastery and personal flourishing through positive psychology.',
        'early-years' => 'Early Years Education at Mentari Intercultural School for ages 2-5.',
        'elementary' => 'Elementary School at Mentari Intercultural School offering the IB Primary Years Programme (PYP).',
        'middle-school' => 'Middle School at Mentari Intercultural School offering the IB Middle Years Programme (MYP).',
        'high-school' => 'Senior High School at Mentari Intercultural School offering Cambridge IGCSE and IB Diploma Programme.',
        'university-counseling' => 'University Counseling at Mentari Intercultural School guiding students to top global institutions.',
        'mis-jakarta' => 'Mentari Intercultural School Jakarta Campus in Cipete.',
        'mis-bintaro' => 'Mentari Intercultural School Bintaro Campus in Sektor 9.',
        'mis-grand-surya' => 'Mentari Intercultural School Grand Surya Campus in West Jakarta.',
        'mentari-preschool' => 'Mentari Preschool Jakarta providing early childhood education since 1994.',
        'sunflower-preschool' => 'Sunflower Preschool Bintaro providing early childhood education.',
        'admission' => 'Apply online for admission at Mentari Intercultural School.',
        'contact' => 'Contact Mentari Intercultural School across all campuses.'
    );
    if (is_page()) {
        $slug = get_post_field('post_name', get_queried_object_id());
        if (in_array($slug, array('admission', 'contact'), true)) {
            return mentari_page_content($slug, 'seo_description');
        }
        if (!empty($descs[$slug])) {
            return $descs[$slug];
        }
    }
    return 'Mentari Intercultural School is one of the top and fastest growing international schools in Jakarta. Nurturing minds, building characters, shaping futures.';
}

/** Google Fonts (Poppins & Urbanist) - ada di HTML sumber, belum dimuat oleh tema. */
function mentari_enqueue_fonts()
{
    wp_enqueue_style(
        'mentari-google-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'mentari_enqueue_fonts', 5);

/**
 * Buat entri Pages (slug sesuai template) bila belum ada.
 * Tidak menimpa halaman yang sudah dibuat pengguna.
 */
function mentari_seed_pages()
{
    $created = array();
    foreach (mentari_subpages() as $slug => $title) {
        if (get_page_by_path($slug, OBJECT, 'page')) {
            continue;
        }
        $id = wp_insert_post(array(
            'post_type' => 'page',
            'post_status' => 'publish',
            'post_title' => $title,
            'post_name' => $slug,
            'post_content' => '',
        ), true);
        if (!is_wp_error($id)) {
            $created[] = $slug;
        }
    }
    update_option('mentari_pages_seeded_v1', '1');
    return $created;
}
add_action('after_switch_theme', 'mentari_seed_pages');
add_action('admin_init', function () {
    if ('1' !== get_option('mentari_pages_seeded_v1') && current_user_can('edit_pages')) {
        mentari_seed_pages();
    }
});

/** Handler form Online Admission & Contact (AJAX, dipanggil oleh scripts/main.js). */
function mentari_form_respond($message, $status = 200, $errors = array())
{
    $body = array('message' => $message);
    if ($errors) {
        $body['errors'] = $errors;
    }
    wp_send_json($body, $status);
}

function mentari_form_handle($type)
{
    if (!isset($_POST['mentari_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['mentari_nonce'])), 'mentari_' . $type)) {
        mentari_form_respond('Sesi formulir kedaluwarsa. Silakan muat ulang halaman lalu coba lagi.', 403);
    }
    // Honeypot: bot mengisi field tersembunyi, pura-pura sukses.
    if (!empty($_POST['website'])) {
        mentari_form_respond('Thank you! Your inquiry has been received.');
    }

    $campuses = array(
        'all' => 'All / General Inquiries',
        'jakarta' => 'MIS Jakarta (Cipete)',
        'bintaro' => 'MIS Bintaro',
        'grandsurya' => 'MIS Grand Surya',
        'mentari-preschool' => 'Mentari Preschool Jakarta',
        'sunflower' => 'Sunflower Preschool',
    );
    $levels = array(
        'early-years' => 'Early Childhood (Ages 2-5)',
        'elementary' => 'Elementary (Grades 1-5)',
        'middle-school' => 'Middle School (Grades 6-8)',
        'high-school' => 'High School (Grades 9-12)',
    );
    $get = function ($key) {
        return isset($_POST[$key]) ? trim(sanitize_text_field(wp_unslash($_POST[$key]))) : '';
    };

    $errors = array();
    $email = sanitize_email(isset($_POST['email']) ? wp_unslash($_POST['email']) : '');
    $message = isset($_POST['message']) ? trim(sanitize_textarea_field(wp_unslash($_POST['message']))) : '';
    $phone = $get('phone');
    $campus = $get('campus');

    if (!is_email($email)) {
        $errors['email'] = array('Masukkan alamat email yang valid.');
    }
    if ($campus && !isset($campuses[$campus])) {
        $errors['campus'] = array('Pilihan kampus tidak valid.');
    }

    if ('admission' === $type) {
        $parent = $get('parent_name');
        $grade = $get('grade_level');
        if ('' === $parent) {
            $errors['parent_name'] = array('Nama orang tua/wali wajib diisi.');
        }
        if ('' === $phone) {
            $errors['phone'] = array('Nomor telepon/WhatsApp wajib diisi.');
        }
        if ('' === $campus) {
            $errors['campus'] = array('Pilih kampus.');
        }
        if (!isset($levels[$grade])) {
            $errors['grade_level'] = array('Pilih jenjang.');
        }
        $subject = 'Online Admission Inquiry - ' . $parent;
        $lines = array(
            'Parent / Guardian' => $parent,
            'Email' => $email,
            'Phone / WhatsApp' => $phone,
            'Campus Preference' => isset($campuses[$campus]) ? $campuses[$campus] : $campus,
            'Grade Level' => isset($levels[$grade]) ? $levels[$grade] : $grade,
            'Student Name' => $get('student_name'),
        );
        $name = $parent;
    } else {
        $name = $get('name');
        $subj = $get('subject');
        if ('' === $name) {
            $errors['name'] = array('Nama wajib diisi.');
        }
        if ('' === $subj) {
            $errors['subject'] = array('Subjek wajib diisi.');
        }
        if ('' === $message) {
            $errors['message'] = array('Pesan wajib diisi.');
        }
        $subject = 'Contact Form - ' . $subj;
        $lines = array(
            'Name' => $name,
            'Email' => $email,
            'Phone / WhatsApp' => $phone,
            'Campus Inquiry' => isset($campuses[$campus]) ? $campuses[$campus] : $campus,
            'Subject' => $subj,
        );
    }

    if ($errors) {
        mentari_form_respond('Periksa kembali isian formulir.', 422, $errors);
    }

    $body = '';
    foreach ($lines as $label => $value) {
        $body .= $label . ': ' . $value . "\n";
    }
    $body .= "\nMessage:\n" . $message . "\n";

    $to = apply_filters('mentari_form_recipient', get_option('admin_email'), $type);
    $headers = array('Reply-To: ' . $name . ' <' . $email . '>');
    $sent = wp_mail($to, '[' . get_bloginfo('name') . '] ' . $subject, $body, $headers);
    do_action('mentari_form_submitted', $type, $lines, $message, $sent);

    if (!$sent) {
        mentari_form_respond('Pesan belum dapat dikirim. Silakan coba lagi atau hubungi kami langsung.', 500);
    }
    mentari_form_respond('<strong>Thank you!</strong> Your inquiry has been received. Our team will contact you shortly.');
}

add_action('wp_ajax_mentari_admission', function () {
    mentari_form_handle('admission');
});
add_action('wp_ajax_nopriv_mentari_admission', function () {
    mentari_form_handle('admission');
});
add_action('wp_ajax_mentari_contact', function () {
    mentari_form_handle('contact');
});
add_action('wp_ajax_nopriv_mentari_contact', function () {
    mentari_form_handle('contact');
});
