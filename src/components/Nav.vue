<script setup lang="ts">
// import { RouterLink } from 'vue-router'
	const title = "service-cap"
	const id = "id-cap"
	const name = "name-cap"
	const status = {

		online:"Offline"
	} 
	const user = {

		name: "pitsolu"
	}
	const token = "token-cap"
</script>
<template>
	<nav class="fh5co-nav" role="navigation">
		<div class="container-wrap">
			<div class="top-menu">
				<div class="row">
					<div class="col-xs-2">
						<div id="fh5co-logo">
							<center>
								<img src="/images/logo.gif">
								<a href="#">Callstreet</a>
							</center>
						</div>
					</div>
					<div class="col-xs-10 menu-1">
						<ul>
							<li>
								<a ng-click="setActive($event)" href="#!/home">Home</a>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">About Us</a>
								<ul class="dropdown">
									<!-- <li><a href="#!/about">Who are we</a></li> -->
									<li><RouterLink to="/home">Home</RouterLink></li>
									<li><RouterLink to="/contacts">Contacts</RouterLink></li>
									<!-- <li><a href="#!/contacts">Contacts</a></li> -->
									<!-- <li><a href="#">Our Team</a></li> -->
								</ul>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">Services</a>
								<ul class="dropdown">
									<!-- {{begin:services}} -->
									<li><a href="#!service/{{id}}">{{title}}</a></li>
									<!-- {{end:services}} -->
								</ul>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">Research Center</a>
								<ul class="dropdown">
									<li><a href="#!/research/insight">Insights</a></li>
									<li><a href="#!/research/studies">Studies</a></li>
								</ul>
							</li>
							<li><a ng-click="setActive($event)" 
								href="#!/contacts">Contact Us
							</a>
						</li>
						<li class="has-dropdown">
							<a ng-click="setActive($event)">Blog</a>
							<ul class="dropdown">
								<!-- {{begin:tags}} -->
								<li><a href="#!/blogs/{{token}}">{{name}}</a></li>
								<!-- {{end:tags}} -->
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div ng-show="!online" class="container-wrap login-strip" ng-cloak>
		<div>{{status.online}}</div>
	</div>

	<div ng-if="user.authd" class="container-wrap login-strip" ng-cloak>
		<a href="#!/home">{{user.name}}</a>&nbsp;|&nbsp;
		<a href="#!/logout">Logout</a>
	</div>
</nav>
</template>