<?php

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
