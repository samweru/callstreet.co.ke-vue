<script lang="ts">
import { storeToRefs } from "pinia";
import { usePasswordStore } from "@/stores/password.store";
export default{

	setup(){

		const passwordStore = usePasswordStore()
		const { form } = storeToRefs(passwordStore)

		return {

			passwordStore,
			form
		}
	},
	data(){

		return {

			// form:form,
			info:{

				success:false,
				message:""
			}
		}
	},
	methods:{

		async resetPassword(event:any){

			const result = await this.passwordStore.reset()
			this.info = result
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
	                <form @submit.prevent="resetPassword">
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    v-model="form.password" placeholder="password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-10">
	                        <div class="form-group">
	                            <input type="password" class="form-control"
	                                    v-model="form.repassword" placeholder="rePassword" required>
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