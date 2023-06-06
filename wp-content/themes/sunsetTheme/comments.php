<div class="comments-wrapper">

	<div class="comments" id="comments">

		<div class="comments-header">
			<h2 class="comment-reply-title">
                <?php
                    if( !have_comments()){
                        echo "Leave A Comment";
                    }
                    else{
                        echo get_comments_count(). " Comments";
                    }
                ?>
            </h2><!-- .comments-title -->
        </div><!-- .comments-header -->
        <div class="comments-inner">
                    <?php
                        wp_list_comments(
                            array(
                                'avatar_size' => 120,
                                'style' => 'div'
                            )
                        );
                    ?>
        </div><!--comments-inner -->

	</div><!-- comments -->

        <hr class="" aria-hidden="true">
        <div id="respond" class="comment-respond">
            <h2 id="reply-title" class="comment-reply-title">
                Leave a Reply 
                <small>
                    <a rel="nofollow"
                        id="cancel-comment-reply-link" href="/?p=1#respond" style="display:none;">
                        Cancel
                        reply
                    </a>
                </small>
            </h2>
        </div><!-- #respond -->
	</div>

</div>
<!--//container-->