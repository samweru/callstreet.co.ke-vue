<script lang="ts">
import BlogCommentReply from "./BlogCommentReply.vue"
import { isProxy, toRaw } from 'vue';
export default {

	data(){

		return {

			blog:{

				comments:{

					how_many:0,
					list:[

						{

							comment_id:0,
							author:{

								name:"-"
							},
							has_replies:false,
							date:"-",
							descr:"-",
							replies:[]
						}
					]
				}
			}
		};
	},
	components:{

		BlogCommentReply
	},
	methods:{

		async getComments(){

			const res_comments = await this.axios.get("/comments")
			const comments = res_comments.data

			this.blog.comments.how_many = comments.length
			this.blog.comments.list = comments
		},
		async showReplies(event:any, comment_id){

			// console.log(event)
			// console.log(comment_id)

			const res_replies = await this.axios.get("/replies")
			const replies = toRaw(res_replies.data)
			// console.log("===")
			// console.log(replies)
			// this.blog.comments.list[0].replies = replies

			for(let idx in this.blog.comments.list)
				if(this.blog.comments.list[idx].id == comment_id)
					this.blog.comments.list[idx].replies = replies
					// this.comment.replies = replies;

			// console.log("===")
			// console.log(this.blog)
		},
		replyTo(author_name, comment_id){

			//
		},
	},
	async created(){

		await this.getComments()
	}
}
</script>
<template>
	<!-- <div v-if="blog.comments.how_many > 0" class="comments-list-wrap"> -->
	<div class="comments-list-wrap">
		<h3 class="comment-count-title">
			Comments {{ blog.comments.how_many }}
		</h3>
		<div v-for="comment in blog.comments.list" class="comment-list">
			<div class="single-comment-body">
				<div class="comment-user-avater">
					<!-- <img src="{{ comment.author.avater }}" alt=""> -->
				</div>
				<!--comment-->
				<!-- <div v-if="comment.author" class="comment-text-body" data-id="{{comment.comment_id}}"> -->
				<div class="comment-text-body" data-id="{{comment.comment_id}}">
					<h4>{{ comment.author.name }}
						<span class="comment-date">{{ comment.date }}</span> 
						<a @click="replyTo(comment.author.name, comment.comment_id)" 
							class="reply-to">reply</a>
					</h4>
					<p>{{ comment.descr }}</p>
					<!--replies-->
					<!-- <a class="show-reply" 
						v-show="comment.has_replies"
						ng-click='showReplies($event, comment.comment_id)'>Show Replies</a> -->
					<a class="show-reply" 
						v-show="comment.has_replies"
						@click='showReplies($event, comment.id)'>Show Replies</a>				
					<!-- <template v-if="comment.replies">
						<BlogCommentReply v-for="replies in comment.replies"
											:key="replies.id" :replies="replies" />
					</template>	 -->
					<!-- <template v-for="replies in comment.replies"> -->
					<template v-for="replies in comment.replies">
						<!-- <B>A</B> -->
						<BlogCommentReply v-bind:replies="replies" />
					</template>		
					<!--replies-->
				</div>
			</div>
		</div>
	</div>
</template>