<?php

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
