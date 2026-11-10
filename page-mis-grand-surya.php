
<?php

/**
 * MENTARI SCHOOL - MIS GRAND SURYA PAGE CUSTOMIZER
 *
 * Customizer untuk mengatur konten halaman MIS Grand Surya.
 * Type: text | textarea | image
 */

/**
 * 1. Definisi field halaman MIS Grand Surya
 */
function mentari_grand_surya_sections() {

    $img = 'https://images.squarespace-cdn.com/content/v1/60c9a5215a821d628e0e1c65/';

    return array(

        // HERO SECTION
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
                    'MIS Grand Surya'
                ),

                'hero_description' => array(
                    'textarea',
                    'Hero Description',
                    'Perumahan Grand Surya, Pegadungan, Kalideres, Jakarta Barat'
                ),

                'hero_badge' => array(
                    'text',
                    'Hero Badge',
                    'West Jakarta Campus'
                ),

            ),
        ),

        // CAMPUS INTRODUCTION
        'introduction' => array(
            'title' => 'Campus Introduction',
            'fields' => array(

                'intro_title' => array(
                    'text',
                    'Introduction Title',
                    'Holistic Formation at Grand Surya'
                ),

                'intro_lead' => array(
                    'textarea',
                    'Introduction Lead',
                    'Purpose-built modern campus providing exceptional international curriculum and holistic development programs in West Jakarta.'
                ),

                'intro_description' => array(
                    'textarea',
                    'Introduction Description',
                    'Featuring smart classrooms, expansive outdoor sports facilities, creative arts and performance spaces, and dedicated STEM laboratories.'
                ),

                'intro_button' => array(
                    'text',
                    'Button Text',
                    'Contact Grand Surya'
                ),

                'intro_button_url' => array(
                    'text',
                    'Button URL',
                    'contact.html'
                ),

                'intro_image' => array(
                    'image',
                    'Campus Image',
                    $img . 'b9584050-a372-4b9f-95e7-2e57688e2f7f/DJI_0266.jpg'
                ),

            ),
        ),

    );
}


/**
 * 2. Mengambil nilai field Customizer
 */
function mentari_grand_surya($key) {

    static $defaults = null;

    if (null === $defaults) {

        $defaults = array();

        foreach (mentari_grand_surya_sections() as $section) {

            foreach ($section['fields'] as $field_key => $field) {

                $defaults[$field_key] = $field[2];

            }
        }
    }

    $default = isset($defaults[$key])
        ? $defaults[$key]
        : '';

    return get_theme_mod(
        'mentari_grand_surya_' . $key,
        $default
    );
}


/**
 * 3. Register Customizer
 */
function mentari_grand_surya_customize_register($wp_customize) {

    // PANEL
    $wp_customize->add_panel(
        'mentari_grand_surya_panel',
        array(
            'title' => __('MIS Grand Surya Page', 'mentari-school'),
            'priority' => 103,
        )
    );


    // SANITIZER
    $sanitizers = array(
        'text' => 'sanitize_text_field',
        'textarea' => 'sanitize_textarea_field',
        'image' => 'esc_url_raw',
    );


    // SECTION
    foreach (mentari_grand_surya_sections() as $section_id => $section) {

        $wp_customize->add_section(
            'mentari_grand_surya_' . $section_id,
            array(
                'title' => $section['title'],
                'panel' => 'mentari_grand_surya_panel',
            )
        );


        // FIELD
        foreach ($section['fields'] as $key => $field) {

            list($type, $label, $default) = $field;

            $setting_id = 'mentari_grand_surya_' . $key;


            // SETTING
            $wp_customize->add_setting(
                $setting_id,
                array(
                    'default' => $default,
                    'sanitize_callback' => $sanitizers[$type],
                    'transport' => 'refresh',
                )
            );


            // IMAGE CONTROL
            if ('image' === $type) {

                $wp_customize->add_control(
                    new WP_Customize_Image_Control(
                        $wp_customize,
                        $setting_id,
                        array(
                            'label' => $label,
                            'section' => 'mentari_grand_surya_' . $section_id,
                        )
                    )
                );

            } else {

                // TEXT / TEXTAREA CONTROL
                $wp_customize->add_control(
                    $setting_id,
                    array(
                        'label' => $label,
                        'section' => 'mentari_grand_surya_' . $section_id,
                        'type' => $type,
                    )
                );

            }
        }
    }
}

add_action(
    'customize_register',
    'mentari_grand_surya_customize_register'
);
