<script setup lang="ts">
	const info = {

		message:"info-message-cap"
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
	                <div ng-if="info" class="col-md-10">
	                    <center ng-if="info.success" style="color:black;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                     <center ng-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                </div>
	                <form ng-submit="loginSubmit()">
	                    <div class="col-md-10" ng-hide="showpass">
	                        <div class="form-group">
	                            <input type="email" class="form-control"
	                                    ng-model="email" placeholder="email" 
	                                    ng-disabled="showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" ng-hide="!showpass">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    ng-model="username" placeholder="Username" 
	                                    ng-disabled="!showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" ng-hide="!showpass">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    ng-model="password" placeholder="Password"
	                                    ng-disabled="!showpass" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10 text-right">
	                        <div class="form-group">
	                            <a href="#!/forgot/password" class="color-black">Forgot Password</a>&nbsp;&nbsp;|&nbsp;&nbsp;
	                            <a href="#!/register" class="color-black">Register</a>
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