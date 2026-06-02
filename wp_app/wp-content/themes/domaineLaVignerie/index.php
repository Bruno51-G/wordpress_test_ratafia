<?php
get_header();
?>

<h2>INDEX.PHP</h2>
<div class="monTheme">
    <?php
        if(have_posts()):
            while(have_posts()):
                the_post();
    ?>
    <article class="themeArticle">
        <h1><?php the_title(); ?></h1>
        <?php the_post_thumbnail('thumbnail'); ?>
        <div>
            <?php the_content(); ?>
        </div>
    </article>

    <?php
        endwhile;
    else:
        echo 'Aucun contenu';
    endif;
    ?>
</div>

<?php
get_footer();
