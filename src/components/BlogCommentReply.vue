<script>
import { isProxy, toRaw, toRefs } from 'vue';
export default {

	props:["replies"],
	setup(props){

		const replies = toRefs(props, "replies")

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
			// show_replies:true,
			replies_all:[],
			sub_replies:[]
		}
	},
	methods:{

		
		replyTo(author_name, comment_id){

			// @ts-ignore
			this.$parent.replyTo(author_name, comment_id)
		},
		async showReplies(event, comment_id){

			const res_replies = await this.axios.get("/replies")
			const replies = toRaw(res_replies.data)
			this.sub_replies = replies
			console.log(this.sub_replies)
		}
	},
	created(){

		this.replies_all = toRaw(this.replies)
		// console.log(this.replies_all)
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
			<!-- <a class="show-reply" 
				v-show="reply.has_replies"
				@click='showReplies($event, reply.comment_id)'>Show Replies</a> -->
			<a class="show-reply"
				@click='showReplies($event, reply.comment_id)'>Show Replies</a>
				<template v-for="other_replies in sub_replies">
					<BlogCommentReply :replies="other_replies"/>
				</template>
		</div>
		<!--reply-->
	</div>
</template>