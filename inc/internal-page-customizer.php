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
