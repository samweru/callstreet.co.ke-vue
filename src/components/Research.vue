<script lang="ts">
export default{

	data(){

		return {

			papers:[

				{

					id:"id-cap1",
					name:"name-cap1"
				}
			],
			research_type:"Insights",
			is_authd:false
		};
	},
	methods:{

		downloadInsight(insight:any){

			console.log(insight)
		},
		downloadStudy(study:any){

			console.log(study)
		}
	}
}
</script>
<template>
	<div class="col-md-4 please-wait" text-center>Please wait..</div>
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
								<a v-if="research_type == 'Insights'" 
									href="/research/insights/{{paper.id}}/download" download>Download</a>
								<a v-if="research_type == 'Studies'" 
									href="/research/studies/{{paper.id}}/download" download>Download</a>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>