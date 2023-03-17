<script>
export default{

	data(){

		return {

			isReady:false,
			service:{

				name:"service-name-cap",
				title:"service-title-cap",
				descr:"service-descr-cap"
			}
		}
	},
	methods:{

		complete: function(){

			this.isReady = true;	
		}
	},
	setup(){

		setTimeout(function(){

			$.contentWayPoint();

		}, 1000);
	},
	created(){

		setTimeout(this.complete, 1000)
	}
}
</script>
<template>
	<div v-if="!isReady" class="col-md-4 please-wait" text-center>Please wait..</div>
	<div id="fh5co-about">
		<div class="row animate-box">
			<div class="col-md-6 col-md-offset-3 text-center heading-section">
				<h3>{{ service.name }}</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8 col-md-offset-2 text-center animate-box">
				<div class="about-desc">
					<h3>{{ service.title }}</h3>
					<br>
					<p class="color-black">{{ service.descr }}</p>
					<p>
						<ul class="fh5co-social-icons">
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-linkedin"></i></a></li>
							<li><a href="#"><i class="icon-dribbble"></i></a></li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>