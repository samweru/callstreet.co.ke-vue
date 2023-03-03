<script setup lang="ts">


const info = {

	message: "info-msg"
}

const blog = {

	user_authd:true,
	reply_to:"pitsolu"
}

</script>
<template>
	<!--Comments-->
	<a class="show-comments" style="padding-left:50px"
		ng-click='showComments($event)'>Refresh Comments</a>
	<comment-ls></comment-ls>
	<!--Comments-->
	<div style="padding-left:50px" class="comment-template">
		<h4>Leave a comment</h4>
		<p class="color-black">Please leave a comment
			<span ng-if="!blog.authd_user">with your details or 
				<a style="cursor:pointer;color:darkblue;"
					ng-click="redirectToLogin()">Login</a>
			</span>
		</p>
		<div ng-if="info" 
				ng-class="info.success === true ? 'msg-info' : 'msg-warn'">	
			{{ info.message }}
		</div>
		<form ng-init="clearForm()" ng-submit="commentSubmit()">
			<input type="hidden" ng-model="form.reply_to">
			<p>
				<label for="reply_to">Reply To:<label>
				<span>
					<b name="reply_to">&nbsp;{{blog.reply_to}}</b>
				</span>
			</p>
			<p ng-if="!blog.authd_user">
				<input type="text" ng-model="form.fullname" 
						placeholder="Your Name" required>
				<input type="email" ng-model="form.email" 
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