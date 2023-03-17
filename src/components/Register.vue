<script lang="ts">
export default{

	data(){

		return {

			form:{

				surname:"",
				othernames:"",
				username:"",
				email:"",
				password:"",
				repassword:""
			},
			info:{

				message:"info-message"
			}
		}
	},
	methods:{

		registerSubmit(event:any){

			console.log(event)
		}	
	}
}
</script>
<template>
	<div id="fh5co-contact">
	    <div class="row">
	        <div class="col-md-6 col-md-offset-3 text-center">
	            <div class="row">
	                <!-- <div v-if="validation" class="col-md-12 text-left msg-alert">
	                    {{validation}}
	                </div> -->
	                <div class="col-md-12 text-left">
	                    <h3>Register</h3>
	                </div>
	                <div ng-if="info" class="col-md-12">
	                    <center v-if="info.success" style="color:black;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                     <center v-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                </div>
	                <form @submit.prevent="registerSubmit">
	                    <div class="col-md-5">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="surname" placeholder="Surname" required>
	                        </div>
	                    </div>
	                    <div class="col-md-7">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="othernames" placeholder="Othernames" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="username" placeholder="Username" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="email" class="form-control" 
	                                    v-model="email" placeholder="Email" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    v-model="password" placeholder="Password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    v-model="repassword" placeholder="Re-Enter Password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12 text-right">
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