<script lang="ts">
export default {

	data(){

		return {

			showpass:false,
			form:{

				email:"",
				username:"",
				password:""
			},
			info:{

				success: true,
				message: "info-msg"
			}
		};
	},
	methods:{

		loginSubmit(event:any){

			console.log(event);
		},
	}
}
</script>
<template>
	<div id="fh5co-contact">
	    <div class="row">
	        <div class="col-md-7 col-md-offset-3 text-center">
	            <div class="row">
	                <div class="col-md-10 text-left which-login">
	                    <a @click="showpass = true" 
	                        :class="[showpass ? 'lg-active':'lg-inactive']">Login</a>
	                        &nbsp;&nbsp;|&nbsp;&nbsp;
	                    <a @click="showpass = false" 
	                        :class="[showpass ? 'lg-inactive':'lg-active']">Auto-Login</a>
	                </div>
	                <div v-if="info" class="col-md-10">
	                    <center v-if="info.success" style="color:black;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                     <center v-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                </div>
	                <form @submit.prevent="loginSubmit">
	                    <div class="col-md-10" v-show="!showpass">
	                        <div class="form-group">
	                            <input type="email" class="form-control"
	                                    v-model="form.email" placeholder="email" 
	                                    :disabled="showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" v-show="showpass">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="form.username" placeholder="Username" 
	                                    :disabled="!showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" v-show="showpass">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    v-model="form.password" placeholder="Password"
	                                    :disabled="!showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10 text-right">
	                        <div class="form-group">
	                            <RouterLink to="/forgot/password" class="color-black">Forgot Password</RouterLink>
	                            &nbsp;&nbsp;|&nbsp;&nbsp;
	                            <RouterLink to="/register" class="color-black">Register</RouterLink>
	                            &nbsp;&nbsp;OR&nbsp;&nbsp;
	                            <input type="submit" value="Login" class="btn btn-primary btn-modify">
	                        </div>
	                    </div>
	                </form>
	            </div>
	        </div>
	    </div>
	</div>
</template>