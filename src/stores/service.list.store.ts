import { defineStore } from 'pinia'
import axios from "axios";
export const useServiceListStore = defineStore({
	id:"serviceList",
	state:function(){

		return {

			service:{

				name:"",
				title:"",
				descr:""
			}		
		}
	},
  	actions:{

	  	async getService(id:number):Promise<void>{

			const service = await axios.post("/ref/service/" + id)
			this.service  = service.data
		}
  	}
})
