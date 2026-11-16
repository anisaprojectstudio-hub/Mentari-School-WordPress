<?php

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
        filemtime(get_template_directory() . '/scripts/main.js'),
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
