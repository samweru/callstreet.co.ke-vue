<script lang="ts">
export default{

	data(){

		return {

			form:{

				email:""
			},
			info:{

				success:false,
				message:""
			}
		}
	},
	methods:{

		async sendEmail(event:any){

			try{

				const res = await this.axios.post("/forgot/password", {

					"email":this.form.email

				},{ headers: { 'Content-Type': 'multipart/form-data' }})

				this.info = {

					success:true,
					message: "Please check your email."
				}
			}
			catch(error){

				this.info = {

					success:false,
					message: "Operation failed!"
				}
			}
		}
	}
}
</script>
<template>
	<div id="fh5co-contact">
	    <div class="row">
	        <div class="col-md-7 col-md-offset-3 text-center">
	            <div class="row">
	                <div class="col-md-10 text-left">
	                    <h3>Reset Password</h3>
	                </div>
	                <div v-if="info" class="col-md-10">
	                    <center v-if="info?.success" style="color:black;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                     <center v-if="!info?.success" style="color:red;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                </div>
	                <form @submit.prevent="sendEmail">
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="email" class="form-control" 
	                                    v-model="form.email" placeholder="email" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10 text-right">
	                        <div class="form-group">
	                            <input type="submit" value="Submit" class="btn btn-primary btn-modify">
	                        </div>
	                    </div>
	                </form>
	            </div>
	        </div>
	    </div>
	</div>
</template>