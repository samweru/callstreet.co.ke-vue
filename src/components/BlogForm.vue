<script lang="ts">
import BlogComment from './BlogComment.vue'	

export default {

	data(){

		return {

			form:{

				fullname:"",
				email:""
			},
			info:{

				success: true,
				message: "info-msg"
			},
			blog:{

				authd_user:false,
				reply_to:"pitsolu"
			}
		};
	},
	methods:{

		commentSubmit(event:any){

			console.log(event);
		},
		showComments(){

			console.log("show-comments")
		},
		redirectToLogin(){

			console.log("redirect-to-login")
		},
		clearForm(){

			console.log("clear-form")
		}
	}
}

// const redirectToLogin = function(){

// 	alert("login")
// }

</script>
<template>
	<!--Comments-->
	<!-- <a class="show-comments" style="padding-left:50px"
		@click='showComments($event)'>Refresh Comments</a> -->
	<a class="show-comments" style="padding-left:50px"
		@click='showComments'>Refresh Comments</a>
	<BlogComment/>
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
		<form @submit.prevent="commentSubmit" @created="clearForm">
			<!-- <input type="hidden" :value="form.reply_to" v-model="reply_to"> -->
			<!-- <input :value="form.reply_to" v-model="reply_to"> -->
			<p>
				<label for="reply_to">Reply To:</label>
				<span>
					<b name="reply_to">&nbsp;{{blog.reply_to}}</b>
				</span>
			</p>
			<p v-if="!blog.authd_user">
				<input type="text" v-model="form.fullname"
						placeholder="Your Name" required>
				<input type="email" v-model="form.email" 
						placeholder="Your Email" required>
			</p>
			<p>
				<!--{{250 - form.message.length}} left-->
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