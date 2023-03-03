<script setup lang="ts">
	const papers = [

		{

			id:"id-cap1",
			name:"name-cap1"
		}
	]

	const research_type = "research-type-cap"
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
							<td ng-if="!is_authd" class="actions">
								<a ng-if="research_type == 'Insights'" 
									ng-click='downloadInsight(paper.id)'>Download</a>
								<a ng-if="research_type == 'Studies'" 
									ng-click='downloadStudy(paper.id)'>Download</a>
							</td>
							<td ng-if="is_authd" class="actions">
								<a ng-if="research_type == 'Insights'" 
									href="/research/insights/{{paper.id}}/download" download>Download</a>
								<a ng-if="research_type == 'Studies'" 
									href="/research/studies/{{paper.id}}/download" download>Download</a>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>