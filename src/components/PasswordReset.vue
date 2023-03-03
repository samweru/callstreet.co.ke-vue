<script setup lang="ts">
	const info = {

		message:"info-message"
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
	                <div ng-if="info" class="col-md-10">
	                    <center ng-if="info.success" style="color:black;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                     <center ng-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                </div>
	                <form ng-submit="resetPassword()">
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    ng-model="password" placeholder="password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    ng-model="repassword" placeholder="rePassword" required>
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