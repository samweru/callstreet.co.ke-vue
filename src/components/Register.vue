<script setup lang="ts">
	const info = {

		message:"info-message"
	}
</script>
<template>
	<div id="fh5co-contact">
	    <div class="row">
	        <div class="col-md-6 col-md-offset-3 text-center">
	            <div class="row">
	                <!-- <div ng-if="validation" class="col-md-12 text-left msg-alert">
	                    {{validation}}
	                </div> -->
	                <div class="col-md-12 text-left">
	                    <h3>Register</h3>
	                </div>
	                <div ng-if="info" class="col-md-12">
	                    <center ng-if="info.success" style="color:black;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                     <center ng-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info.message }}
	                    </center>
	                </div>
	                <form ng-submit="registerSubmit()">
	                    <div class="col-md-5">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    ng-model="surname" placeholder="Surname" required>
	                        </div>
	                    </div>
	                    <div class="col-md-7">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    ng-model="othernames" placeholder="Othernames" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    ng-model="username" placeholder="Username" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="email" class="form-control" 
	                                    ng-model="email" placeholder="Email" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    ng-model="password" placeholder="Password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    ng-model="repassword" placeholder="Re-Enter Password" required>
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