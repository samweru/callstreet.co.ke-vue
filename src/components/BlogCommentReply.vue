<script>
import { isProxy, toRaw } from 'vue';
import { toRefs } from 'vue'
export default {

	props:["replies"],
	setup(props){

		const replies = toRefs(props, 'replies')

		return { replies }
	},
	data(){

		return {

			// replies_all:[{
			// 		comment_id:1,
			// 		author:{

			// 			name:"pitsolu"
			// 		},
			// 		has_replies:false,
			// 		descr: "descr-cap1",
			// 		date: "date-cap1"
			// 	}]
			replies_all:[]
		}
	},
	methods:{

		replyTo(author_name, comment_id){


		},
		showReplies(event, comment_id){


		}
	},
	created(){

		this.replies_all = toRaw(this.replies)
	}
}
</script>
<template>
	<div class="single-comment-body child" v-for="reply in replies_all">
		<!--reply-->
		<div class="comment-user-avater">
			<!-- <img src="{{ reply.author.avater }}" alt=""> -->
		</div>
		<div class="comment-text-body" data-id="{{reply.comment_id}}">
			<h4>{{ reply.author.name }} 
				<span class="comment-date">{{ reply.date }}</span> 
				<a @click='replyTo(reply.author.name, reply.comment_id)' class="reply-to">reply</a>
			</h4>
			<p>{{ reply.descr }}</p>
			<a class="show-reply" 
				v-show="reply.has_replies"
				@click='showReplies($event, reply.comment_id)'>Show Replies</a>
		</div>
		<!--reply-->
	</div>
</template>