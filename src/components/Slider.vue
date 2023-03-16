<script>
export default {
 props: ['slides'],
 created(){

 	// console.log("===")
 	setTimeout(function(){
			
		// window.mobileMenuOutsideClick();
		// window.offcanvasMenu();
		// window.burgerMenu();	
		// $.loaderPage();
		$.sliderMain();
		$.contentWayPoint();
		

	},1000)
 }
}
</script>
<template>
	<aside id="fh5co-hero">
		<div class="flexslider">
			<ul class="slides">
				<li v-for="(slide, idx) in slides" 
					:style="{ backgroundImage: `url(/images/img_bg_${idx + 1}.jpg)` }">
					<div class="overlay-gradient"></div>
					<div class="container-fluid">
						<div class="row">
				   			<div class="col-md-4 col-md-offset-3 col-md-pull-3 slider-text">
				   				<div class="slider-text-inner" v-html="slide">
				   				</div>
				   			</div>
				   		</div>
					</div>
				</li>	   	
			</ul>
		</div>
	</aside>
</template>