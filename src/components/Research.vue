<script lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from "@/stores/login.store"
export default {

	setup(){

		setTimeout(function(){

			// @ts-ignore
			$.contentWayPoint();

		}, 1000);

		const loginStore = useLoginStore()
		const { user } = storeToRefs(loginStore)

		return {

			user
		}
	},
	data(){

		return {

			isReady:false,
			papers:[
				{
					id:"",
					name:""
				}
			],
			research_type:"",
			is_authd:false
		};
	},
	methods:{

		downloadInsight: function(insight:any){

			this.redirectToLogin()
		},
		downloadStudy: function(study:any){

			this.redirectToLogin()
		},
		complete: function(){

			this.isReady = true;	
		},
		redirectToLogin(){

			this.$router.push("/login")
		},
		async getResearch(type:String):Promise<void>{

			if(type == "insight"){

				this.research_type = "Insights"
				type = "insights"
			}

			if(type == "studies")
				this.research_type = "Studies"

			const papers = await this.axios.post("/research/"+type+"/list")
			this.papers = papers.data
		}
	},
	async created(){

		if(this.user?.name)
			this.is_authd = true

		setTimeout(this.complete, 1000)
		const type = this.$route.params.type as string
		await this.getResearch(type)
	},
	async beforeRouteUpdate (to, from, next) {

		if(this.user?.name)
			this.is_authd = true

	  	const type = this.$route.params.type as string
		await this.getResearch(type)
	  	next();
	}
}
</script>
<template>
	<div v-if="!isReady" class="col-md-4 please-wait" text-center>Please wait..</div>
	<div id="fh5co-about">
		<div class="row animate-box">
			<div class="col-md-6 col-md-offset-3 text-center heading-section">
				<h3>{{ research_type }}</h3>
				<!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->
			</div>
		</div>
		<div class="row">
			<div class="col-md-8 col-md-offset-2 text-center animate-box">
				<div class="about-desc">
					<table class="research">
						<tr v-for="paper in papers">
							<td align="left">{{ paper.name }}</td>
							<!-- <td class="actions"><a href="#">Details</a></td> -->
							<td v-if="!is_authd" class="actions">
								<a v-if="research_type == 'Insights'" 
									@click='downloadInsight(paper.id)'>Download</a>
								<a v-if="research_type == 'Studies'" 
									@click='downloadStudy(paper.id)'>Download</a>
							</td>
							<td v-if="is_authd" class="actions">
								<RouterLink v-if="research_type == 'Insights'" 
									:to="{ path: `/research/insights/${paper.id}/download` }" download>
									Download
								</RouterLink>
								<RouterLink v-if="research_type == 'Studies'" 
									:to="{ path: `/research/studies/${paper.id}/download` }" download>
									Download
								</RouterLink>
								<!-- <a v-if="research_type == 'Insights'" 
									href="/research/insights/{{paper.id}}/download" download>Download</a>
								<a v-if="research_type == 'Studies'" 
									href="/research/studies/{{paper.id}}/download" download>Download</a> -->
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>