<!--<script setup lang="js">-->
<script >
export default {

	data(){

		return {

			contacts:{
				addresses:[

					"address-cap1",
					"address-cap2",
					"address-cap3",
				]
			},
			form:{

				name:"",
				email:"",
				descr:""
			},
			info:{

				success:true,
				message:"info-message"
			},
			isSaving:false		
		};
	},
	setup(){

		setTimeout(function(){

			console.log("abc")
			$.contentWayPoint();

		}, 1000);
	},
	methods:{

		messageSubmit(){

			this.isSaving = true

			setTimeout(this.clearForm, 1000)

			console.log("message-submit")
		},
		clearForm(){

			this.isSaving = false
			this.form.email = ""; 
			this.form.name = ""; 
			this.form.descr = ""; 
		}
	}
}
</script>
<template>
	<div id="fh5co-contact">
		<div class="row animate-box">
			<div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
				<h2>Contact Us</h2>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 col-md-push-1 animate-box">
				<h3>Our Address</h3>
				<ul class="contact-info">
					<li v-for="address in contacts.addresses">
						<i class="icon-globe2"></i>
						{{ address }}
					</li>
				</ul>
			</div>
			<div class="col-md-7 col-md-push-1 animate-box">
				<div v-if="info" class="container-wrap login-strip" ng-cloak>	
					 <center v-if="info.success" style="color:black;font-weight:bold">{{ info.message }}</center>
					 <center v-if="!info.success" style="color:red;font-weight:bold">{{ info.message }}</center>
				</div>
				<form @submit.prevent="messageSubmit">
					<div class="row">
						<fieldset :disabled="isSaving">
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" 
											v-model="form.name" placeholder="Name" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input type="email" class="form-control" 
											v-model="form.email" placeholder="Email" required>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<textarea name="" class="form-control" id="" cols="30" rows="7" 
										v-model="form.descr" placeholder="Message" required></textarea>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<input type="submit" value="Send Message" class="btn btn-primary btn-modify">
								</div>
							</div>
						</fieldset>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>