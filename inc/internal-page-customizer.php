<?php

function mentari_page_field($label, $default, $type = 'text')
{
    return array(
        'label' => $label,
        'default' => $default,
        'type' => $type,
    );
}

function mentari_internal_pages_config()
{
    static $pages = null;

    if (null !== $pages) {
        return $pages;
    }

    $pages = array(
        'admission' => array(
            'title' => 'Online Admission',
            'fields' => array(
                'seo_title' => mentari_page_field('SEO Title', 'Online Admission - Mentari Intercultural School'),
                'seo_description' => mentari_page_field('SEO Description', 'Apply online for admission at Mentari Intercultural School.', 'textarea'),
                'hero_label' => mentari_page_field('Hero Label', 'Admissions'),
                'hero_title' => mentari_page_field('Hero Title', 'Online Admission'),
                'hero_description' => mentari_page_field('Hero Description', 'Join our vibrant intercultural school community. Start your child’s application for AY 2026/2027.', 'textarea'),
                'hero_badge' => mentari_page_field('Hero Badge', 'AY 2026/2027 Open'),
                'parent_name_label' => mentari_page_field('Parent Name Label', 'Parent / Guardian Name *'),
                'parent_name_placeholder' => mentari_page_field('Parent Name Placeholder', 'Full Name'),
                'email_label' => mentari_page_field('Email Label', 'Email Address *'),
                'email_placeholder' => mentari_page_field('Email Placeholder', 'name@domain.com'),
                'phone_label' => mentari_page_field('Phone Label', 'Phone / WhatsApp *'),
                'phone_placeholder' => mentari_page_field('Phone Placeholder', '+62 812...'),
                'campus_label' => mentari_page_field('Campus Label', 'Campus Preference *'),
                'campus_placeholder' => mentari_page_field('Campus Placeholder', 'Select Campus'),
                'campus_option_jakarta' => mentari_page_field('Campus Option: Jakarta', 'MIS Jakarta (Cipete)'),
                'campus_option_bintaro' => mentari_page_field('Campus Option: Bintaro', 'MIS Bintaro'),
                'campus_option_grandsurya' => mentari_page_field('Campus Option: Grand Surya', 'MIS Grand Surya'),
                'campus_option_mentari_preschool' => mentari_page_field('Campus Option: Mentari Preschool', 'Mentari Preschool Jakarta'),
                'campus_option_sunflower' => mentari_page_field('Campus Option: Sunflower', 'Sunflower Preschool'),
                'grade_level_label' => mentari_page_field('Grade Level Label', 'Grade Level *'),
                'grade_level_placeholder' => mentari_page_field('Grade Level Placeholder', 'Select Level'),
                'grade_option_early_years' => mentari_page_field('Grade Option: Early Years', 'Early Childhood (Ages 2-5)'),
                'grade_option_elementary' => mentari_page_field('Grade Option: Elementary', 'Elementary (Grades 1-5)'),
                'grade_option_middle_school' => mentari_page_field('Grade Option: Middle School', 'Middle School (Grades 6-8)'),
                'grade_option_high_school' => mentari_page_field('Grade Option: High School', 'High School (Grades 9-12)'),
                'student_name_label' => mentari_page_field('Student Name Label', 'Student Full Name'),
                'student_name_placeholder' => mentari_page_field('Student Name Placeholder', 'Student Name'),
                'message_label' => mentari_page_field('Message Label', 'Message / Inquiries'),
                'message_placeholder' => mentari_page_field('Message Placeholder', 'Tell us about your child or ask any questions...'),
                'submit_text' => mentari_page_field('Submit Button Text', 'Submit Admission Inquiry'),
                'process_title' => mentari_page_field('Process Title', 'Admission Process Steps'),
                'process_1_title' => mentari_page_field('Process Step 1 Title', 'Submit Inquiry / Form'),
                'process_1_description' => mentari_page_field('Process Step 1 Description', 'Fill out our online inquiry form or visit our admissions office.', 'textarea'),
                'process_2_title' => mentari_page_field('Process Step 2 Title', 'Campus Tour & Consultation'),
                'process_2_description' => mentari_page_field('Process Step 2 Description', 'Experience our learning spaces and meet our academic leadership.', 'textarea'),
                'process_3_title' => mentari_page_field('Process Step 3 Title', 'Assessment & Enrollment'),
                'process_3_description' => mentari_page_field('Process Step 3 Description', 'Student observation/assessment and completion of registration.', 'textarea'),
            ),
        ),
        'contact' => array(
            'title' => 'Contact Us',
            'fields' => array(
                'seo_title' => mentari_page_field('SEO Title', 'Contact Us - Mentari Intercultural School'),
                'seo_description' => mentari_page_field('SEO Description', 'Contact Mentari Intercultural School across all campuses.', 'textarea'),
                'hero_label' => mentari_page_field('Hero Label', 'Get in Touch'),
                'hero_title' => mentari_page_field('Hero Title', 'Contact Us'),
                'hero_description' => mentari_page_field('Hero Description', 'Discover more of what MIS has to offer across our Greater Jakarta campuses.', 'textarea'),
                'hero_badge' => mentari_page_field('Hero Badge', 'We’re Here to Help'),
                'campus_jakarta_badge' => mentari_page_field('Jakarta Campus Badge', 'Cipete Campus'),
                'campus_jakarta_title' => mentari_page_field('Jakarta Campus Name', 'MIS Jakarta'),
                'campus_jakarta_address' => mentari_page_field('Jakarta Address', 'Jl. H. Jian No. 2, Cipete Utara, Jakarta Selatan 12150', 'textarea'),
                'campus_jakarta_phone' => mentari_page_field('Jakarta Phone', '+62 21 725 5410 / 725 5411'),
                'campus_jakarta_email' => mentari_page_field('Jakarta Email', 'misj@mentarischool.com', 'email'),
                'campus_bintaro_badge' => mentari_page_field('Bintaro Campus Badge', 'Bintaro Campus'),
                'campus_bintaro_title' => mentari_page_field('Bintaro Campus Name', 'MIS Bintaro'),
                'campus_bintaro_address' => mentari_page_field('Bintaro Address', 'Jl. Bintaro Utama Sektor 9, Pondok Aren, Tangerang Selatan', 'textarea'),
                'campus_bintaro_phone' => mentari_page_field('Bintaro Phone', '+62 21 745 8410'),
                'campus_bintaro_email' => mentari_page_field('Bintaro Email', 'misb@mentarischool.com', 'email'),
                'campus_grandsurya_badge' => mentari_page_field('Grand Surya Campus Badge', 'Grand Surya Campus'),
                'campus_grandsurya_title' => mentari_page_field('Grand Surya Campus Name', 'MIS Grand Surya'),
                'campus_grandsurya_address' => mentari_page_field('Grand Surya Address', 'Perumahan Grand Surya, Kalideres, Jakarta Barat', 'textarea'),
                'campus_grandsurya_phone' => mentari_page_field('Grand Surya Phone', '+62 21 5437 2100'),
                'campus_grandsurya_email' => mentari_page_field('Grand Surya Email', 'misgs@mentarischool.com', 'email'),
                'form_label' => mentari_page_field('Form Label', 'Get in Touch'),
                'form_title' => mentari_page_field('Form Title', 'Send Us a Direct Message'),
                'form_description' => mentari_page_field('Form Description', 'Have a specific question? Leave a message and our administration team will respond promptly.', 'textarea'),
                'name_label' => mentari_page_field('Name Label', 'Full Name *'),
                'name_placeholder' => mentari_page_field('Name Placeholder', 'Your Name'),
                'email_label' => mentari_page_field('Email Label', 'Email Address *'),
                'email_placeholder' => mentari_page_field('Email Placeholder', 'yourname@domain.com'),
                'phone_label' => mentari_page_field('Phone Label', 'Phone / WhatsApp'),
                'phone_placeholder' => mentari_page_field('Phone Placeholder', '+62 812...'),
                'campus_label' => mentari_page_field('Campus Inquiry Label', 'Campus Inquiry'),
                'campus_option_all' => mentari_page_field('Campus Option: General', 'All / General Inquiries'),
                'campus_option_jakarta' => mentari_page_field('Campus Option: Jakarta', 'MIS Jakarta (Cipete)'),
                'campus_option_bintaro' => mentari_page_field('Campus Option: Bintaro', 'MIS Bintaro'),
                'campus_option_grandsurya' => mentari_page_field('Campus Option: Grand Surya', 'MIS Grand Surya'),
                'subject_label' => mentari_page_field('Subject Label', 'Subject *'),
                'subject_placeholder' => mentari_page_field('Subject Placeholder', 'Inquiry subject...'),
                'message_label' => mentari_page_field('Message Label', 'Message *'),
                'message_placeholder' => mentari_page_field('Message Placeholder', 'Write your message here...'),
                'submit_text' => mentari_page_field('Submit Button Text', 'Send Message'),
            ),
        ),
    );

    return $pages;
}

function mentari_register_internal_pages_customizer($wp_customize)
{
    $panel_id = 'mentari_internal_admission_contact_panel';

    $wp_customize->add_panel($panel_id, array(
        'title' => __('Internal Pages - Admission & Contact', 'mentari-school'),
        'priority' => 110,
    ));

    foreach (mentari_internal_pages_config() as $slug => $page) {
        $page_id = str_replace('-', '_', $slug);
        $section_id = 'mentari_page_' . $page_id . '_section';

        $wp_customize->add_section($section_id, array(
            'title' => $page['title'],
            'panel' => $panel_id,
            'priority' => 10,
        ));

        foreach ($page['fields'] as $field_id => $field) {
            $setting_id = 'mentari_' . $page_id . '_' . $field_id;
            $type = $field['type'];
            $sanitize_callback = 'sanitize_text_field';
            $control_type = 'text';

            if ('textarea' === $type) {
                $sanitize_callback = 'sanitize_textarea_field';
                $control_type = 'textarea';
            } elseif ('email' === $type) {
                $sanitize_callback = 'sanitize_email';
                $control_type = 'email';
            }

            $wp_customize->add_setting($setting_id, array(
                'default' => $field['default'],
                'sanitize_callback' => $sanitize_callback,
                'transport' => 'refresh',
            ));

            $wp_customize->add_control($setting_id, array(
                'label' => $field['label'],
                'section' => $section_id,
                'type' => $control_type,
            ));
        }
    }
}
add_action('customize_register', 'mentari_register_internal_pages_customizer', 20);

function mentari_page_content($slug, $field_id)
{
    $pages = mentari_internal_pages_config();

    if (!isset($pages[$slug]['fields'][$field_id])) {
        return '';
    }

    $field = $pages[$slug]['fields'][$field_id];
    $setting_id = 'mentari_' . str_replace('-', '_', $slug) . '_' . $field_id;
    $value = get_theme_mod($setting_id, $field['default']);

    if (!is_string($value) || '' === trim($value)) {
        return $field['default'];
    }

    return $value;
}

/*** Mentari School - MIS Story Page Customizer ***/

/**
 * Definisi semua field halaman MIS Story.
 * Format: section => array(title, fields => array(key => array(type, label, default)))
 * type: text | textarea | image
 * Untuk menambah field baru, cukup tambah baris di sini lalu pakai mentari_story('key') di template.
 */
function mentari_story_sections()
{
    $img = 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/';

    return array(
        'hero' => array(
            'title' => 'Hero',
            'fields' => array(
                'hero_label' => array('text', 'Label kecil', 'About Mentari'),
                'hero_title' => array('text', 'Judul', 'The MIS Story'),
                'hero_desc' => array('textarea', 'Deskripsi', 'From a humble house with five students in 1994 to thousands of thriving learners across Greater Jakarta.'),
                'hero_badge' => array('text', 'Teks badge', 'Est. 1994 • 30+ Years of Excellence'),
            ),
        ),
        'origin' => array(
            'title' => 'Our Origins',
            'fields' => array(
                'origin_label' => array('text', 'Label kecil', 'Our Origins'),
                'origin_title' => array('text', 'Judul', 'Founded with Heart, Built Brick by Brick'),
                'origin_lead' => array('textarea', 'Paragraf utama', 'Yayasan Perkembangan Anak Indonesia (YPAI) was established in 1994 by five mothers with a dream of providing a transformative education for a better future for our children.'),
                'origin_text' => array('textarea', 'Paragraf kedua', 'The founders were the very first educators in the institution, nurturing each student with devotion. It started in Mentari Preschool (formerly known as Sunshine Preschool) with just five students and five teachers. We were close as a family, supporting one another through every milestone and growth.'),
                'origin_stat1_num' => array('text', 'Statistik 1 - Angka', '1994'),
                'origin_stat1_text' => array('text', 'Statistik 1 - Keterangan', 'Founded by 5 dedicated mothers'),
                'origin_stat2_num' => array('text', 'Statistik 2 - Angka', '5 Campuses'),
                'origin_stat2_text' => array('text', 'Statistik 2 - Keterangan', 'Serving Greater Jakarta'),
                'origin_image' => array('image', 'Gambar', $img . '5dece523-f2aa-4d83-bf13-34f01f47627f/DSC09182.jpg'),
            ),
        ),
        'traits' => array(
            'title' => 'Core Learner Traits',
            'fields' => array(
                'traits_label' => array('text', 'Label kecil', 'Our Philosophy'),
                'traits_title' => array('text', 'Judul', 'Mentari Core Learner Traits'),
                'traits_desc' => array('textarea', 'Deskripsi', 'We believe true education nurtures both intellectual excellence and moral character.'),
                'trait1_title' => array('text', 'Trait 1 - Judul', 'Morally Upright'),
                'trait1_desc' => array('textarea', 'Trait 1 - Deskripsi', 'Acting with integrity, honesty, and deep respect for cultural diversity and shared humanity.'),
                'trait1_image' => array('image', 'Trait 1 - Gambar', $img . 'cac3216d-e682-4c29-a20b-25bc8b71723f/Morally+Upright+%28Mentari+Traits%29+15.png'),
                'trait2_title' => array('text', 'Trait 2 - Judul', 'Engaging Communicator'),
                'trait2_desc' => array('textarea', 'Trait 2 - Deskripsi', 'Expressing ideas confidently and empathetically in multiple languages and collaborative settings.'),
                'trait2_image' => array('image', 'Trait 2 - Gambar', $img . '2579f3ea-7f6e-4d3a-8456-2b57bd0c2ba1/Engaging+Communicator+%28Mentari+Traits%29+9.png'),
                'trait3_title' => array('text', 'Trait 3 - Judul', 'Compassionate Leader'),
                'trait3_desc' => array('textarea', 'Trait 3 - Deskripsi', 'Actively contributing to positive change in school, local communities, and global society.'),
                'trait3_image' => array('image', 'Trait 3 - Gambar', $img . 'af28e894-75c3-4e35-b022-e759f8631805/Never+Too+Busy+%28Mentari+Traits%29+15.png'),
            ),
        ),
        'cta' => array(
            'title' => 'Call to Action',
            'fields' => array(
                'cta_title' => array('text', 'Judul', 'Be Part of the Mentari Story'),
                'cta_desc' => array('textarea', 'Deskripsi', "Discover how our values-driven education can unlock your child's highest potential."),
                'cta_btn1' => array('text', 'Teks tombol 1 (ke Admission)', 'Apply Now'),
                'cta_btn2' => array('text', 'Teks tombol 2 (ke Contact)', 'Schedule Campus Tour'),
            ),
        ),
    );
}

/** Ambil nilai satu field MIS Story (dari Customizer, atau default bila belum diubah). */
function mentari_story($key)
{
    static $defaults = null;
    if (null === $defaults) {
        $defaults = array();
        foreach (mentari_story_sections() as $section) {
            foreach ($section['fields'] as $field_key => $field) {
                $defaults[$field_key] = $field[2];
            }
        }
    }
    $default = isset($defaults[$key]) ? $defaults[$key] : '';
    return get_theme_mod('mentari_story_' . $key, $default);
}

function mentari_story_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_story_panel', array(
        'title' => __('MIS Story Page', 'mentari-school'),
        'priority' => 101,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_story_sections() as $section_id => $section) {
        $wp_customize->add_section('mentari_story_' . $section_id, array(
            'title' => $section['title'],
            'panel' => 'mentari_story_panel',
        ));

        foreach ($section['fields'] as $key => $field) {
            list($type, $label, $default) = $field;
            $setting_id = 'mentari_story_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {
                $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, $setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_story_' . $section_id,
                )));
            } else {
                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_story_' . $section_id,
                    'type' => $type,
                ));
            }
        }
    }
}
add_action('customize_register', 'mentari_story_customize_register');

function mentari_early_years($key)
{
    foreach (mentari_early_years_sections() as $section) {
        if (isset($section['fields'][$key])) {
            return get_theme_mod('mentari_early_years_' . $key, $section['fields'][$key][2]);
        }
    }
    return '';
}

function mentari_early_years_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_early_years_panel', array(
        'title' => __('Early Years Page', 'mentari-school'),
        'priority' => 102,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_early_years_sections() as $section_id => $section) {
        $wp_customize->add_section('mentari_early_years_' . $section_id, array(
            'title' => $section['title'],
            'panel' => 'mentari_early_years_panel',
        ));

        foreach ($section['fields'] as $key => $field) {
            list($type, $label, $default) = $field;
            $setting_id = 'mentari_early_years_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {
                $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, $setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_early_years_' . $section_id,
                )));
            } else {
                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_early_years_' . $section_id,
                    'type' => $type,
                ));
            }
        }
    }
}
add_action('customize_register', 'mentari_early_years_customize_register');



/*** Mentari School - MIS Bintaro Campus Customizer ***/

/**
 * Konfigurasi field halaman MIS Bintaro.
 */
function mentari_bintaro_sections()
{
    return array(
        'hero' => array(
            'title' => 'Hero Section',
            'fields' => array(
                'hero_label' => array(
                    'text',
                    'Hero Label',
                    'Campus Location'
                ),
                'hero_title' => array(
                    'text',
                    'Hero Title',
                    'MIS Bintaro'
                ),
                'hero_address' => array(
                    'textarea',
                    'Campus Address',
                    'Jl. Bintaro Utama Sektor 9, Pondok Aren, Tangerang Selatan'
                ),
                'hero_badge' => array(
                    'text',
                    'Hero Badge',
                    'Green Campus'
                ),
            ),
        ),

        'welcome' => array(
            'title' => 'Welcome Section',
            'fields' => array(
                'welcome_title' => array(
                    'text',
                    'Welcome Title',
                    'Welcome to MIS Bintaro'
                ),
                'welcome_lead' => array(
                    'textarea',
                    'Main Description',
                    'An expansive, green campus serving Early Childhood, Elementary, Middle School, and High School with cutting-edge academic and sports facilities.'
                ),
                'welcome_description' => array(
                    'textarea',
                    'Additional Description',
                    'MIS Bintaro fosters a close-knit, supportive community where students are empowered to lead, innovate, and excel in an international learning environment.'
                ),
                'welcome_button' => array(
                    'text',
                    'Button Text',
                    'Visit MIS Bintaro'
                ),
                'welcome_image' => array(
                    'image',
                    'Campus Image',
                    'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/7d1ed6cb-ede3-4e77-b77a-1b433961e04e/11.jpg'
                ),
            ),
        ),
    );
}


/**
 * Mengambil nilai Customizer MIS Bintaro.
 */
function mentari_bintaro($key)
{
    foreach (mentari_bintaro_sections() as $section) {
        if (isset($section['fields'][$key])) {
            $field = $section['fields'][$key];

            return get_theme_mod(
                'mentari_bintaro_' . $key,
                $field[2]
            );
        }
    }

    return '';
}


/**
 * Mendaftarkan Customizer MIS Bintaro.
 */
function mentari_bintaro_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_bintaro_panel', array(
        'title' => __('MIS Bintaro Campus', 'mentari-school'),
        'priority' => 103,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_bintaro_sections() as $section_id => $section) {

        $section_name = 'mentari_bintaro_' . $section_id;

        $wp_customize->add_section($section_name, array(
            'title' => $section['title'],
            'panel' => 'mentari_bintaro_panel',
        ));

        foreach ($section['fields'] as $key => $field) {

            list($type, $label, $default) = $field;

            $setting_id = 'mentari_bintaro_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {

                $wp_customize->add_control(
                    new WP_Customize_Image_Control(
                        $wp_customize,
                        $setting_id,
                        array(
                            'label' => $label,
                            'section' => $section_name,
                        )
                    )
                );

            } else {

                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => $section_name,
                    'type' => $type,
                ));

            }
        }
    }
}

add_action(
    'customize_register',
    'mentari_bintaro_customize_register'
);
