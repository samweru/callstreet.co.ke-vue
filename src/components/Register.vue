<script lang="ts">
import { storeToRefs } from "pinia";
import { useRegisterStore } from "@/stores/register.store";
export default{

	setup(){

		const registerStore = useRegisterStore()
		const { form } = storeToRefs(registerStore)

		return {

			registerStore,
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

		async registerSubmit(event:any){

			const result = await this.registerStore.create()
			this.info = result
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
	                <div v-if="info" class="col-md-12">
	                    <center v-if="info?.success" style="color:black;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                     <center v-if="!info.success" style="color:red;font-weight:bold">
	                        {{ info?.message }}
	                    </center>
	                </div>
	                <form @submit.prevent="registerSubmit">
	                    <div class="col-md-5">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="form.surname" placeholder="Surname" required>
	                        </div>
	                    </div>
	                    <div class="col-md-7">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="form.othernames" placeholder="Othernames" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="text" class="form-control" 
	                                    v-model="form.username" placeholder="Username" required>
	                        </div>
	                    </div>
	                    <div class="col-md-12">
	                        <div class="form-group">
	                            <input type="email" class="form-control" 
	                                    v-model="form.email" placeholder="Email" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    v-model="form.password" placeholder="Password" required>
	                        </div>
	                    </div>
	                    <div class="col-md-6">
	                        <div class="form-group">
	                            <input type="password" class="form-control" 
	                                    v-model="form.repassword" placeholder="Re-Enter Password" required>
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