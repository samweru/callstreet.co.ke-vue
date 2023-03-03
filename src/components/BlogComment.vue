<script setup lang="ts">
	const blog = {

		comments:{

			how_many:2,
			list:[

				{

					comment_id:1,
					author:{

						name:"pitsolu"
					},
					has_replies:false,
					date:"date-cap1",
					descr:"descr-cap1"
				},
				{

					comment_id:2,
					author:{

						name:"peterpaker"
					},
					has_replies:false,
					date:"date-cap2",
					descr:"descr-cap2"
				}
			]
		}
	}
</script>
<template>
	<div v-if="blog.comments.how_many > 0" class="comments-list-wrap">
		<h3 class="comment-count-title">
			Comments {{ blog.comments.how_many }}
		</h3>
		<div v-for="comment in blog.comments.list" class="comment-list">
			<div class="single-comment-body">
				<div class="comment-user-avater">
					<!-- <img src="{{ comment.author.avater }}" alt=""> -->
				</div>
				<!--comment-->
				<div v-if="comment.author" class="comment-text-body" data-id="{{comment.comment_id}}">
					<h4>{{ comment.author.name }}
						<span class="comment-date">{{ comment.date }}</span> 
						<a ng-click="replyTo(comment.author.name, comment.comment_id)" 
							class="reply-to">reply</a>
					</h4>
					<p>{{ comment.descr }}</p>
					<!--replies-->
					<a class="show-reply" 
						ng-hide="!comment.has_replies"
						ng-click='showReplies($event, comment.comment_id)'>Show Replies</a>
					<!--replies-->
				</div>
			</div>
		</div>
	</div>
</template>