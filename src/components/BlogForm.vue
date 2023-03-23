<script lang="ts">
import BlogComment from './BlogComment.vue'	
import { nextTick } from 'vue';
export default {

	// props:["blog_id"],
	// setup(props){

	// 	const state = toRaw(props)

	// 	return { 
			
	// 		blog:{

	// 			// id:state.blog_id,
	// 			// id:this.$route.params.id,
	// 			authd_user:false,
	// 			reply_to:"pitsolu"
	// 		}
	// 	}
	// },
	data(){

		return {

			form:{

				fullname:"",
				email:"",
				comment_id:0
			},
			info:{

				success: true,
				message: "info-msg"
			},
			blog:{

				authd_user:false,
				reply_to:"None",
				id:0
			},
			show_comments:false
		};
	},
	components:{

		BlogComment
	},
	methods:{

		commentSubmit(event:any){

			console.log(event);
		},
		async showComments(){

			this.show_comments = false
			await nextTick()
			this.show_comments = true
		},
		redirectToLogin(){

			this.$router.push("/login")
		},
		clearForm(){

			console.log("clear-form")
		}
	},
	created(){

		// @ts-ignore
		this.blog.id = this.$route.params.id
		this.show_comments = true
	}
}
</script>
<template>
	<!--Comments-->
	<!-- <a class="show-comments" style="padding-left:50px"
		@click='showComments($event)'>Refresh Comments</a> -->
	<a class="show-comments" style="padding-left:50px"
		@click='showComments'>Refresh Comments</a>
	<div v-if="!show_comments" class="col-md-4 please-wait" text-center>Please wait..</div>
	<BlogComment v-if="show_comments"/>
	<!--Comments-->
	<div style="padding-left:50px" class="comment-template">
		<h4>Leave a comment</h4>
		<p class="color-black">Please leave a comment
			<span v-if="!blog.authd_user">with your details or 
				<a style="cursor:pointer;color:darkblue;"
					@click="redirectToLogin">Login</a>
			</span>
		</p>
		<div v-if="info" 
				:class="[info.success ? 'msg-info' : 'msg-warn']">	
			{{ info.message }}
		</div>
		<!-- <form ng-init="clearForm()" ng-submit="commentSubmit()"> -->
		<form @submit.prevent="commentSubmit" ref="comment-form">
			<input type="hidden" ref="comment-id" v-model="form.comment_id">
			<!-- <input :value="form.reply_to" v-model="reply_to"> -->
			<p>
				<label for="reply_to">Reply To:</label>
				<span>
					<b name="reply_to" ref="reply-to">&nbsp;{{blog.reply_to}}</b>
				</span>
			</p>
			<p v-if="!blog.authd_user">
				<input type="text" v-model="form.fullname"
						placeholder="Your Name" required>
				<input type="email" v-model="form.email" 
						placeholder="Your Email" required>
			</p>
			<p>
				<!-- {{250 - form.message.length}} left -->
				<!-- <textarea name="message" id="message" maxlength="250"  
							v-model="form.message"
							cols="30" rows="10" placeholder="Your Message" required> -->
				<textarea name="message" id="message" maxlength="250"
							cols="30" rows="10" placeholder="Your Message" required>
				</textarea>
			</p>
			<p><input type="submit" value="Submit"></p>
		</form>
	</div>
</template>