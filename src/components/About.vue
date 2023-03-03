<template>
	<div class="col-md-4 please-wait" text-center>Please wait..</div>
	<div id="fh5co-about">
		<div class="row animate-box">
			<div class="col-md-8 col-md-offset-2 text-center animate-box heading-section">
				<article btf-markdown ng-include="about_top" class="color-black"></article>
			</div>
		</div>
		<!-- <br/> -->
		<div class="row">
			<div class="col-md-10 col-md-offset-1 text-center animate-box">
				<center>
				<img height="500" src="/images/about-us--man.png" alt="Free HTML5 Bootstrap Template"></center>
			</div>
			<div class="col-md-8 col-md-offset-2 text-center animate-box">
				<div class="about-desc">
					<br>
					<article btf-markdown ng-include="about_bottom" class="color-black"></article>
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