<?php

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
