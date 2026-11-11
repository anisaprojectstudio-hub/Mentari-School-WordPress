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
    if ('mis-jakarta' === $slug) {
        return mentari_jakarta_content($field_id);
    }

    if ('mis-bintaro' === $slug) {
        return mentari_bintaro_content($field_id);
    }

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


function mentari_early_years_sections()
{
    return array(
        'hero' => array(
            'title' => __('Hero Banner', 'mentari-school'),
            'fields' => array(
                'hero_label' => array('text', 'Label kecil', 'Early Childhood'),
                'hero_title' => array('text', 'Judul', 'Early Years Education'),
                'hero_desc' => array('textarea', 'Deskripsi', '“What we learn with pleasure, we never forget.” Nurturing young minds through play-based discovery.'),
                'hero_badge' => array('text', 'Badge usia', 'Ages 2 - 5'),
            ),
        ),
        'content' => array(
            'title' => __('Konten Utama', 'mentari-school'),
            'fields' => array(
                'content_title' => array('text', 'Judul', 'Nurturing Natural Curiosity'),
                'content_lead' => array('textarea', 'Paragraf utama', 'Our Early Years curriculum is a child-centered, developmental program inspired by Montessori and inquiry-based principles.'),
                'content_text' => array('textarea', 'Paragraf kedua', 'We foster gross and fine motor skills, language acquisition, social emotional foundation, and sensory discovery in warm, safe, and stimulating spaces.'),
                'content_btn' => array('text', 'Teks tombol', 'Apply for Early Years'),
                'content_image' => array('image', 'Gambar', 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1c0f3d35-d3ae-4cc5-9adc-18948a8b41a5/DSC08102.jpg'),
                'content_image_alt' => array('text', 'Alt teks gambar', 'Early Years Classroom'),
            ),
        ),
    );
}

/**
 * Ambil nilai satu field. Dipakai di template:
 * echo esc_html(mentari_early_years('hero_title'));
 */
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


/*** Mentari School - Positive Education Page Customizer ***/

/**
 * Definisi semua field halaman Positive Education.
 * Format: section => array(title, fields => array(key => array(type, label, default)))
 * type: text | textarea | image
 */
function mentari_pe_sections()
{
    return array(
        'hero' => array(
            'title' => 'Hero',
            'fields' => array(
                'hero_label' => array('text', 'Label kecil', 'School Culture'),
                'hero_title' => array('text', 'Judul', 'Positive Education at MIS'),
                'hero_desc' => array('textarea', 'Deskripsi', 'Shaping students to thrive academically and personally in a deeply supportive and nurturing environment.'),
                'hero_badge' => array('text', 'Teks badge', 'PERMAH Wellbeing Framework'),
            ),
        ),
        'framework' => array(
            'title' => 'Wellbeing Framework',
            'fields' => array(
                'fw_label' => array('text', 'Label kecil', 'Wellbeing Framework'),
                'fw_title' => array('text', 'Judul', 'Curiosity at the Heart of Learning'),
                'fw_lead' => array('textarea', 'Paragraf utama', 'Positive Education brings together the science of positive psychology with best practice teaching to encourage individuals, schools, and communities to flourish.'),
                'fw_text' => array('textarea', 'Paragraf kedua', 'At MIS, we embed the PERMAH framework (Positive Emotion, Engagement, Relationships, Meaning, Accomplishment, and Health) throughout our daily school life. When students feel psychologically safe and valued, their cognitive capacity and creative problem-solving thrive.'),
                'fw_image' => array('image', 'Gambar', 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/72228bbc-8e5a-4a15-81fb-105f3a73bd50/Teaching+103.jpg'),
                'feat1_icon' => array('text', 'Poin 1 - Class ikon Font Awesome', 'fa-solid fa-heart'),
                'feat1_title' => array('text', 'Poin 1 - Judul', 'Emotional Well-being'),
                'feat1_desc' => array('textarea', 'Poin 1 - Deskripsi', 'Cultivating resilience, gratitude, and empathy in everyday interactions.'),
                'feat2_icon' => array('text', 'Poin 2 - Class ikon Font Awesome', 'fa-solid fa-brain'),
                'feat2_title' => array('text', 'Poin 2 - Judul', 'Character Strengths'),
                'feat2_desc' => array('textarea', 'Poin 2 - Deskripsi', 'Helping students discover and build upon their unique innate gifts.'),
            ),
        ),
    );
}

/** Ambil nilai satu field Positive Education (dari Customizer, atau default bila belum diubah). */
function mentari_pe($key)
{
    static $defaults = null;
    if (null === $defaults) {
        $defaults = array();
        foreach (mentari_pe_sections() as $section) {
            foreach ($section['fields'] as $field_key => $field) {
                $defaults[$field_key] = $field[2];
            }
        }
    }
    $default = isset($defaults[$key]) ? $defaults[$key] : '';
    return get_theme_mod('mentari_pe_' . $key, $default);
}

function mentari_pe_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_pe_panel', array(
        'title' => __('Positive Education Page', 'mentari-school'),
        'priority' => 102,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_pe_sections() as $section_id => $section) {
        $wp_customize->add_section('mentari_pe_' . $section_id, array(
            'title' => $section['title'],
            'panel' => 'mentari_pe_panel',
        ));

        foreach ($section['fields'] as $key => $field) {
            list($type, $label, $default) = $field;
            $setting_id = 'mentari_pe_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {
                $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, $setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_pe_' . $section_id,
                )));
            } else {
                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_pe_' . $section_id,
                    'type' => $type,
                ));
            }
        }
    }
}
add_action('customize_register', 'mentari_pe_customize_register');

/*** Mentari School - High School Page Customizer ***/

/**
 * Definisi semua field halaman High School.
 * Format: section => array(title, fields => array(key => array(type, label, default)))
 * type: text | textarea | image
 */
function mentari_hs_sections()
{
    return array(
        'hero' => array(
            'title' => 'Hero',
            'fields' => array(
                'hero_label' => array('text', 'Label kecil', 'Diploma Pathway'),
                'hero_title' => array('text', 'Judul', 'Senior High School'),
                'hero_desc' => array('textarea', 'Deskripsi', 'Cambridge IGCSE & IB Diploma Programme (DP) — The premier gateway to world-renowned universities.'),
                'hero_badge' => array('text', 'Teks badge', 'Grades 9 - 12'),
            ),
        ),
        'main' => array(
            'title' => 'Program Overview',
            'fields' => array(
                'main_title' => array('text', 'Judul', 'Excellence in IB Diploma & IGCSE'),
                'main_lead' => array('textarea', 'Paragraf utama', 'MIS High School students consistently achieve world-class scores in the IB Diploma examinations, with average scores well above global averages.'),
                'main_text' => array('textarea', 'Paragraf kedua', 'Our curriculum emphasizes rigorous academics, Creativity, Activity, Service (CAS), Theory of Knowledge (TOK), and a 4,000-word Extended Essay that thoroughly prepares students for university-level research.'),
                'main_button' => array('text', 'Teks tombol (ke Admission)', 'Apply for High School'),
                'main_image' => array('image', 'Gambar', 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1576ef94-cf1a-4ef4-86e4-2411b5967bb8/High+School+2.jpg'),
            ),
        ),
    );
}

/** Ambil nilai satu field High School (dari Customizer, atau default bila belum diubah). */
function mentari_hs($key)
{
    static $defaults = null;
    if (null === $defaults) {
        $defaults = array();
        foreach (mentari_hs_sections() as $section) {
            foreach ($section['fields'] as $field_key => $field) {
                $defaults[$field_key] = $field[2];
            }
        }
    }
    $default = isset($defaults[$key]) ? $defaults[$key] : '';
    return get_theme_mod('mentari_hs_' . $key, $default);
}

function mentari_hs_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_hs_panel', array(
        'title' => __('High School Page', 'mentari-school'),
        'priority' => 103,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_hs_sections() as $section_id => $section) {
        $wp_customize->add_section('mentari_hs_' . $section_id, array(
            'title' => $section['title'],
            'panel' => 'mentari_hs_panel',
        ));

        foreach ($section['fields'] as $key => $field) {
            list($type, $label, $default) = $field;
            $setting_id = 'mentari_hs_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {
                $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, $setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_hs_' . $section_id,
                )));
            } else {
                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_hs_' . $section_id,
                    'type' => $type,
                ));
            }
        }
    }
}
add_action('customize_register', 'mentari_hs_customize_register');

/*** Mentari School - University Counseling Page Customizer ***/

/**
 * Definisi semua field halaman University Counseling.
 * Format: section => array(title, fields => array(key => array(type, label, default)))
 * type: text | textarea | image
 */
function mentari_uc_sections()
{
    return array(
        'hero' => array(
            'title' => 'Hero',
            'fields' => array(
                'hero_label' => array('text', 'Label kecil', 'College Pathways'),
                'hero_title' => array('text', 'Judul', 'University Counseling'),
                'hero_desc' => array('textarea', 'Deskripsi', 'Empowering our graduates to gain acceptance into the world’s most prestigious universities.'),
                'hero_badge' => array('text', 'Teks badge', 'Top 100 Global Unis'),
            ),
        ),
        'main' => array(
            'title' => 'Guidance Overview',
            'fields' => array(
                'main_title' => array('text', 'Judul', 'Personalized Higher Education Guidance'),
                'main_lead' => array('textarea', 'Paragraf utama', 'Our dedicated University Counseling Office assists students individually from Grade 9 onward in goal-setting, portfolio building, and standardized test preparation.'),
                'item1' => array('text', 'Poin 1', '1-on-1 college admissions advisory & career profiling'),
                'item2' => array('text', 'Poin 2', 'Essay workshops, interview simulation & recommendation letters'),
                'item3' => array('text', 'Poin 3 (kosongkan untuk menyembunyikan)', 'Annual MIS International University Fairs with 70+ global universities'),
                'main_button' => array('text', 'Teks tombol (ke Contact)', 'Book a Counseling Session'),
                'main_image' => array('image', 'Gambar', 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/8f65bfce-676a-43d1-a0f6-17db6974c471/Screenshot+2025-07-30+at+10.25.50.png'),
            ),
        ),
    );
}

/** Ambil nilai satu field University Counseling (dari Customizer, atau default bila belum diubah). */
function mentari_uc($key)
{
    static $defaults = null;
    if (null === $defaults) {
        $defaults = array();
        foreach (mentari_uc_sections() as $section) {
            foreach ($section['fields'] as $field_key => $field) {
                $defaults[$field_key] = $field[2];
            }
        }
    }
    $default = isset($defaults[$key]) ? $defaults[$key] : '';
    return get_theme_mod('mentari_uc_' . $key, $default);
}

function mentari_uc_customize_register($wp_customize)
{
    $wp_customize->add_panel('mentari_uc_panel', array(
        'title' => __('University Counseling Page', 'mentari-school'),
        'priority' => 104,
    ));

    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );

    foreach (mentari_uc_sections() as $section_id => $section) {
        $wp_customize->add_section('mentari_uc_' . $section_id, array(
            'title' => $section['title'],
            'panel' => 'mentari_uc_panel',
        ));

        foreach ($section['fields'] as $key => $field) {
            list($type, $label, $default) = $field;
            $setting_id = 'mentari_uc_' . $key;

            $wp_customize->add_setting($setting_id, array(
                'default' => $default,
                'sanitize_callback' => $sanitizers[$type],
                'transport' => 'refresh',
            ));

            if ('image' === $type) {
                $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, $setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_uc_' . $section_id,
                )));
            } else {
                $wp_customize->add_control($setting_id, array(
                    'label' => $label,
                    'section' => 'mentari_uc_' . $section_id,
                    'type' => $type,
                ));
            }
        }
    }
}
add_action('customize_register', 'mentari_uc_customize_register');

/**
 * MIS Jakarta Campus Customizer
 */

/**
 * Konfigurasi field MIS Jakarta
 */
function mentari_jakarta_sections()
{
    return array(

        // HERO SECTION
        'hero_label' => array(
            'label'   => 'Hero Label',
            'default' => 'MENTARI INTERCULTURAL SCHOOL',
            'type'    => 'text',
        ),

        'hero_title' => array(
            'label'   => 'Hero Title',
            'default' => 'Mentari Intercultural School Jakarta',
            'type'    => 'text',
        ),

        'hero_description' => array(
            'label'   => 'Hero Description',
            'default' => 'Discover a learning environment that inspires students to grow, explore, and achieve their best.',
            'type'    => 'textarea',
        ),

        'hero_badge' => array(
            'label'   => 'Hero Badge',
            'default' => 'Jakarta Campus',
            'type'    => 'text',
        ),

        // CAMPUS SECTION
        'campus_title' => array(
            'label'   => 'Campus Title',
            'default' => 'Welcome to Mentari Intercultural School Jakarta',
            'type'    => 'text',
        ),

        'campus_paragraph_1' => array(
            'label'   => 'Campus Paragraph 1',
            'default' => 'Mentari Intercultural School Jakarta provides an inspiring educational environment that supports students in developing their academic abilities and personal potential.',
            'type'    => 'textarea',
        ),

        'campus_paragraph_2' => array(
            'label'   => 'Campus Paragraph 2',
            'default' => 'With dedicated teachers and a supportive learning community, students are encouraged to become confident, creative, and responsible global citizens.',
            'type'    => 'textarea',
        ),

        // CAMPUS IMAGE
        'campus_image' => array(
            'label'   => 'Campus Image',
            'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1c0f3d35-d3ae-4cc5-9adc-18948a8b41a5/DSC08102.jpg',
            'type'    => 'image',
        ),

        'campus_image_alt' => array(
            'label'   => 'Campus Image Alt',
            'default' => 'Mentari Intercultural School Jakarta Campus',
            'type'    => 'text',
        ),

        // BUTTON
        'cta_text' => array(
            'label'   => 'Button Text',
            'default' => 'Explore Our Campus',
            'type'    => 'text',
        ),

        'cta_url' => array(
            'label'   => 'Button URL',
            'default' => '#',
            'type'    => 'url',
        ),

    );
}




/**
 * MIS Bintaro Campus Customizer
 */
function mentari_bintaro_sections()
{
    return array(
        'hero_label' => array(
            'label'   => 'Hero Label',
            'default' => 'MENTARI INTERCULTURAL SCHOOL',
            'type'    => 'text',
        ),
        'hero_title' => array(
            'label'   => 'Hero Title',
            'default' => 'Mentari Intercultural School Bintaro',
            'type'    => 'text',
        ),
        'hero_description' => array(
            'label'   => 'Hero Description',
            'default' => 'Discover a learning environment that inspires students to grow, explore, and achieve their best.',
            'type'    => 'textarea',
        ),
        'hero_badge' => array(
            'label'   => 'Hero Badge',
            'default' => 'Bintaro Campus',
            'type'    => 'text',
        ),
        'campus_title' => array(
            'label'   => 'Campus Title',
            'default' => 'Welcome to Mentari Intercultural School Bintaro',
            'type'    => 'text',
        ),
        'campus_paragraph_1' => array(
            'label'   => 'Campus Paragraph 1',
            'default' => 'Mentari Intercultural School Bintaro provides an inspiring educational environment that supports students in developing their academic abilities and personal potential.',
            'type'    => 'textarea',
        ),
        'campus_paragraph_2' => array(
            'label'   => 'Campus Paragraph 2',
            'default' => 'With dedicated teachers and a supportive learning community, students are encouraged to become confident, creative, and responsible global citizens.',
            'type'    => 'textarea',
        ),
        'campus_image' => array(
            'label'   => 'Campus Image',
            'default' => 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/1c0f3d35-d3ae-4cc5-9adc-18948a8b41a5/DSC08102.jpg',
            'type'    => 'image',
        ),
        'campus_image_alt' => array(
            'label'   => 'Campus Image Alt',
            'default' => 'Mentari Intercultural School Bintaro Campus',
            'type'    => 'text',
        ),
        'cta_text' => array(
            'label'   => 'Button Text',
            'default' => 'Explore Our Campus',
            'type'    => 'text',
        ),
        'cta_url' => array(
            'label'   => 'Button URL',
            'default' => '#',
            'type'    => 'url',
        ),
    );
}

function mentari_bintaro_customizer($wp_customize)
{
    $section_id = 'mentari_bintaro_section';

    $wp_customize->add_section($section_id, array(
        'title'       => 'MIS Bintaro Campus',
        'priority'    => 36,
        'description' => 'Edit content halaman MIS Bintaro Campus.',
    ));

    foreach (mentari_bintaro_sections() as $key => $field) {
        $setting_id = 'mentari_bintaro_' . $key;

        $wp_customize->add_setting($setting_id, array(
            'default'           => 'image' === $field['type'] ? 0 : $field['default'],
            'sanitize_callback' => (
                'url' === $field['type']
                    ? 'esc_url_raw'
                    : ('image' === $field['type']
                        ? 'absint'
                        : ('textarea' === $field['type']
                            ? 'sanitize_textarea_field'
                            : 'sanitize_text_field'))
            ),
            'transport' => 'refresh',
        ));

        if ('image' === $field['type']) {
            $wp_customize->add_control(
                new WP_Customize_Media_Control(
                    $wp_customize,
                    $setting_id,
                    array(
                        'label'     => $field['label'],
                        'section'   => $section_id,
                        'settings'  => $setting_id,
                        'mime_type' => 'image',
                    )
                )
            );
        } else {
            $wp_customize->add_control($setting_id, array(
                'label'   => $field['label'],
                'section' => $section_id,
                'type'    => $field['type'],
            ));
        }
    }
}
add_action('customize_register', 'mentari_bintaro_customizer');

function mentari_bintaro_content($field)
{
    $fields = mentari_bintaro_sections();

    if (!isset($fields[$field])) {
        return '';
    }

    $setting_id = 'mentari_bintaro_' . $field;

    if ('image' === $fields[$field]['type']) {
        $image_id = get_theme_mod($setting_id, 0);
        $image_url = $image_id ? wp_get_attachment_url($image_id) : false;

        return $image_url ? $image_url : $fields[$field]['default'];
    }

    $value = get_theme_mod($setting_id, $fields[$field]['default']);

    if (!is_string($value) || '' === trim($value)) {
        return $fields[$field]['default'];
    }

    return $value;
}

/**
 * Register MIS Jakarta Customizer
 */
function mentari_jakarta_customizer($wp_customize)
{
    $wp_customize->add_section('mentari_jakarta_section', array(
        'title'       => 'MIS Jakarta Campus',
        'priority'    => 35,
        'description' => 'Edit content halaman MIS Jakarta Campus.',
    ));

    $fields = mentari_jakarta_sections();

    foreach ($fields as $key => $field) {

        $setting_id = 'mentari_jakarta_' . $key;

        $wp_customize->add_setting($setting_id, array(
            'default'           => 'image' === $field['type'] ? 0 : $field['default'],
            'sanitize_callback' => (
                $field['type'] === 'url'
                ? 'esc_url_raw'
                : ($field['type'] === 'image'
                    ? 'absint'
                    : ($field['type'] === 'textarea'
                        ? 'sanitize_textarea_field'
                        : 'sanitize_text_field'))
            ),
            'transport' => 'refresh',
        ));

        if ($field['type'] === 'image') {

            $wp_customize->add_control(
                new WP_Customize_Media_Control(
                    $wp_customize,
                    $setting_id,
                    array(
                        'label'     => $field['label'],
                        'section'   => 'mentari_jakarta_section',
                        'settings'  => $setting_id,
                        'mime_type' => 'image',
                    )
                )
            );

        } else {
            $wp_customize->add_control($setting_id, array(
                'label'   => $field['label'],
                'section' => 'mentari_jakarta_section',
                'type'    => $field['type'],
            ));
        }
    }
}
add_action('customize_register', 'mentari_jakarta_customizer');


/**
 * Ambil konten MIS Jakarta
 */
function mentari_jakarta_content($field)
{
    $fields = mentari_jakarta_sections();

    if (!isset($fields[$field])) {
        return '';
    }

    $setting_id = 'mentari_jakarta_' . $field;
    if ($fields[$field]['type'] === 'image') {
        $image_id = get_theme_mod($setting_id, 0);
        $image_url = $image_id ? wp_get_attachment_url($image_id) : false;

        return $image_url ? $image_url : $fields[$field]['default'];
    }

    return get_theme_mod(
        $setting_id,
        $fields[$field]['default']
    );
}
