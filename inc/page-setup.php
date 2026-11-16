<?php

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
