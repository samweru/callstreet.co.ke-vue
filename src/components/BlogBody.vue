<script setup lang="ts">
const blog = {

	share:{

		twitter:"/to/twitter",
		facebook:"/to/facebook",
		linkedin:"/to/linkedin"
	}
}

const blog_descr = "N/A" 
</script>
<template>
		<div class="mt-150 mb-150">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="single-article-section">
							<div class="single-article-text">
								<span>
									<p>
										<ul class="fh5co-social-icons">
											<li>
												<a href="{{blog.share.twitter}}" 
													target="_blank"
													class="btn btn-share">Share&nbsp;
														<i class="icon-twitter"></i>
												</a>
											</li>
											<li><a href="{{blog.share.facebook}}" 
													target="_blank"
													class="btn btn-share">Share&nbsp;
													<i class="icon-facebook"></i>
												</a>
											</li>
											<li><a href="{{blog.share.linkedin}}" 
													target="_blank"
													class="btn btn-share">Share&nbsp;
													<i class="icon-linkedin"></i>
												</a>
											</li>
										</ul>
									</p>
								</span>
								<article>
									{{blog_descr}}
								</article>
							</div>
							<div class="container-wrap" ui-view>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>