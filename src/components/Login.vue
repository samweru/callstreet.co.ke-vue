<script lang="ts">
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
	                    <a ng-click="showpass = true" 
	                        ng-class="showpass ? 'lg-active':'lg-inactive'">Login</a>
	                        &nbsp;&nbsp;|&nbsp;&nbsp;
	                    <a ng-click="showpass = false"
	                        ng-class="showpass ? 'lg-inactive':'lg-active'">Auto-Login</a>
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
	                    <!-- <div class="col-md-10" ng-hide="showpass"> -->
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="email" class="form-control"
	                                    v-model="email" placeholder="email" 
	                                    required>
	                                    <!-- ng-disabled="showpass" required> -->
	                        </div>
	                    </div>
	                    <!-- <div class="col-md-10" ng-hide="!showpass"> -->
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="username" placeholder="Username" 
	                                    required>
	                                    <!-- ng-disabled="!showpass" required> -->
	                        </div>
	                    </div>
	                    <!-- <div class="col-md-10" ng-hide="!showpass"> -->
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    v-model="password" placeholder="Password"
	                                    required="">
	                                    <!-- ng-disabled="!showpass" required> -->
	                        </div>
	                    </div>
	                    <div class="col-md-10 text-right">
	                        <div class="form-group">
	                            <!-- <a href="#!/forgot/password" class="color-black">Forgot Password</a>-->
	                            <RouterLink to="/forgot/password">Forgot Password</RouterLink>
	                            &nbsp;&nbsp;|&nbsp;&nbsp;
	                            <!-- <a href="#!/register" class="color-black">Register</a>-->
	                            <RouterLink to="/register">Register</RouterLink>
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