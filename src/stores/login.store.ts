import { defineStore } from 'pinia'
import axios from "axios";
// import { useStorage } from "vue3-storage";

import router from '@/router';
import { useStorage } from '@vueuse/core'

export const useLoginStore = defineStore({
	id:"login",
	state:function(){

		// const storage = useStorage();
		// const user = storage.getStorage({key:"user"})


		return {

			form:{

				email:"",
				username:"",
				password:""
			},
			email:"",
			user: useStorage("user", {

				email:null,
				name:null
			}),	
			// user: user,	
			// user: storage.setStorageSync("user", {

			// 	email:"",
			// 	username:""
			// }),	
		}
	},
  	actions:{

  		async autoAuth(){

		    try{

		    	let formData = new FormData();
		    	formData.append("email", this.form.email)

				const res = await axios.post("/auto/login", formData);

				this.user = {

					email:res.data.email,
					name:res.data.username
				}

				// useStorage("user", {

				// 	email:this.email,
				// 	name:res.data?.[0].username || res.data.username
				// })

				// const storage = useStorage()
				// storage.setStorageSync("user", {

					// email:this.email,
					// name:res.data?.[0].username || res.data.username
				// })
				// const storeRes = await storage.getStorage({key:"user"})
				// console.log("Email: "+ storeRes.data.email)

				return {

					success:true,
					message: "Login successful."
				}
			}
			catch(error){

				console.log(error)

				return {

					success:false,
					message: "Operation failed!"
				}
			}
	  	},
	  	async auth(){

		    try{

		    	let formData = new FormData();
		    	formData.append("username", this.form.username)
		    	formData.append("password", this.form.password)

		        const res = await axios.post("/login", formData);

		        return {

		    		"success":true,
		    		"message":"Login successful."
		    	};			    
	    	}
	    	catch(error){

				console.log(error)

				return {

			    	"success":false,
			    	"message":"Operation failed!"
			    }
	    	}
	  	},
	  	logout() {
	  		
            this.user = {email:null, name:null};
            router.push('/');
        }
  	}
})
