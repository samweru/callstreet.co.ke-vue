<script lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from "@/stores/login.store"
export default {

	setup(){

		const loginStore = useLoginStore()
		const { form } = storeToRefs(loginStore)

		return {

			loginStore,
			form
		}
	},
	data(){

		return {

			showpass:false,
			disable_email:false,
			disable_username:true,
			disable_password:true,
			info:{

				success:false,
				message:""
			}
		};
	},
	methods:{

		redirectToHome(){

			this.$router.push("/")
		},
		disableLogin(disable:boolean = true){

			this.disable_password = disable
			this.disable_username = disable
		},
		disableAutoLogin(disable:boolean = true){

			this.disable_email = disable
		},
		showAutoLogin(toggle:boolean){

			this.showpass = !toggle
			this.disableLogin(toggle)
			this.disableAutoLogin(!toggle)
		},
		async loginSubmit(event:any){

			let disableForm = this.disableLogin

			try{

				this.info = {

					success:true,
					message:"Wait..."
				}

				if(this.showpass){

					disableForm()
					this.info = await this.loginStore.auth()
				}

				if(!this.showpass){

					disableForm = this.disableAutoLogin
					disableForm()
					this.info = await this.loginStore.autoAuth()
				}

				if(this.info.success)
					setTimeout(this.redirectToHome, 1000)

				if(!this.info.success)
					disableForm(false)
			}
			catch(error){

				disableForm(false)

				this.info = {

					success:false,
					message:"Operation failed!"
				}
			}
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
	                    <a @click="showAutoLogin(false)" 
	                        :class="[showpass ? 'lg-active':'lg-inactive']">Login</a>
	                        &nbsp;&nbsp;|&nbsp;&nbsp;
	                    <a @click="showAutoLogin(true)" 
	                        :class="[showpass ? 'lg-inactive':'lg-active']">Auto-Login</a>
	                </div>
	                <div v-if="info" class="col-md-10">
	                    <center v-if="info?.success" style="color:black;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                     <center v-if="!info?.success" style="color:red;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                </div>
	                <form @submit.prevent="loginSubmit">
	                    <div class="col-md-10" v-show="!showpass">
	                        <div class="form-group">
	                            <input type="email" class="form-control"
	                                    v-model="form.email" placeholder="email" 
	                                    :disabled="disable_email" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" v-show="showpass">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="form.username" placeholder="Username" 
	                                    :disabled="disable_username" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10" v-show="showpass">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    v-model="form.password" placeholder="Password"
	                                    :disabled="disable_password" required>
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