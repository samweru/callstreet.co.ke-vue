<script setup lang="ts">
const replies = [

	{
		comment_id:1,
		author:{

			name:"pitsolu"
		},
		has_replies:false,
		descr: "descr-cap1",
		date: "date-cap1"
	},
	{
		comment_id:2,
		author:{

			name:"peterparker"
		},
		has_replies:false,
		descr: "descr-cap2",
		date: "date-cap2"
	}
]
</script>
<template>
	<div class="single-comment-body child" v-for="reply in replies">
		<!--reply-->
		<div class="comment-user-avater">
			<!-- <img src="{{ reply.author.avater }}" alt=""> -->
		</div>
		<div class="comment-text-body" data-id="{{reply.comment_id}}">
			<h4>{{ reply.author.name }} 
				<span class="comment-date">{{ reply.date }}</span> 
				<a ng-click='replyTo(reply.author.name, reply.comment_id)' class="reply-to">reply</a>
			</h4>
			<p>{{ reply.descr }}</p>
			<a class="show-reply" 
				ng-hide="!reply.has_replies"
				ng-click='showReplies($event, reply.comment_id)'>Show Replies</a>
		</div>
		<!--reply-->
	</div>
</template>