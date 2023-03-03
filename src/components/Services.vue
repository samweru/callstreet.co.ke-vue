<script setup lang="ts">
	const services = [

		{

			id:"id-cap1",
			name:"name-cap1",
			title:"title-cap1",
			descr:"descr-cap1",
		},
		{

			id:"id-cap2",
			name:"name-cap2",
			title:"title-cap2",
			descr:"descr-cap2",
		}
	]
</script>
<template>
	<div id="fh5co-services">
		<div class="row">
			<div v-for="service in services" class="col-md-4 text-center animate-box">
				<div class="services">
					<span class="icon">
						<i class="icon-diamond"></i>
					</span>
					<div class="desc">
						<h3><a href="#!/service/{{service.id}}">{{ service.title }}</a></h3>
						<p>{{ service.descr }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>