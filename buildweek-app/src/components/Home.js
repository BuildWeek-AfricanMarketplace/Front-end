// import React from "react";

// export default function Home() {
// 	return (
// 		<body className="landing is-preload">
// 			{/* <!-- Page Wrapper --> */}
// 			<div id="page-wrapper">
// 				{/* <!-- Header --> */}
// 				<header id="header" className="alt">
// 					<h1>
// 						<a href="index.html">African Marketplace</a>
// 					</h1>
// 					<nav id="nav">
// 						<ul>
// 							<li className="special">
// 								<a
// 									onClick="#menu"
// 									className="menuToggle"
// 								>
// 									<span>Menu</span>
// 								</a>
// 								<div id="menu">
// 									<ul>
// 										<li>
// 											<a href="home.html">
// 												Home
// 											</a>
// 										</li>
// 										<li>
// 											<a href="about.html">
// 												About Us
// 											</a>
// 										</li>
// 										<li>
// 											<a href="team.html">
// 												Meet the Team
// 											</a>
// 										</li>
// 										<li>
// 											<a href="./Reg.js">
// 												Sign Up
// 											</a>
// 										</li>
// 										<li>
// 											<a href="#">Log In</a>
// 										</li>
// 									</ul>
// 								</div>
// 							</li>
// 						</ul>
// 					</nav>
// 				</header>

// 				{/* <!-- Banner --> */}
// 				<section id="banner">
// 					<div className="inner">
// 						<h2>African Marketplace</h2>
// 						<p>
// 							Sauti Africa empowers small business owners,
// 							particularly women, <br />
// 							to improve their business and economic
// 							opportunities
// 							<br />
// 							to grow out of poverty.
// 						</p>
// 						<ul className="actions special">
// 							<li>
// 								<a href="#" className="button primary">
// 									Activate
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 					<a href="#one" className="more scrolly">
// 						Learn More
// 					</a>
// 				</section>

// 				{/* <!-- One --> */}
// 				<section id="one" className="wrapper style1 special">
// 					<div className="inner">
// 						<header className="major">
// 							<h2>
// 								Arcu aliquet vel lobortis ata nisl
// 								<br />
// 								eget augue amet aliquet nisl cep donec
// 							</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum. Donec amet imperdiet eleifend
// 								<br />
// 								fringilla tincidunt. Nullam dui leo
// 								Aenean mi ligula, rhoncus ullamcorper.
// 							</p>
// 						</header>
// 						<ul className="icons major">
// 							<li>
// 								<span className="icon fa-gem major style1">
// 									<span className="label">
// 										Lorem
// 									</span>
// 								</span>
// 							</li>
// 							<li>
// 								<span className="icon fa-heart major style2">
// 									<span className="label">
// 										Ipsum
// 									</span>
// 								</span>
// 							</li>
// 							<li>
// 								<span className="icon solid fa-code major style3">
// 									<span className="label">
// 										Dolor
// 									</span>
// 								</span>
// 							</li>
// 						</ul>
// 					</div>
// 				</section>

// 				{/* <!-- Two --> */}
// 				<section id="two" className="wrapper alt style2">
// 					<section className="spotlight">
// 						<div className="image">
// 							<img src="images/pic01.jpeg" alt="" />
// 						</div>
// 						<div className="content">
// 							<h2>
// 								Magna primis lobortis
// 								<br />
// 								sed ullamcorper
// 							</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum. Donec hendrerit imperdiet.
// 								Mauris eleifend fringilla nullam aenean
// 								mi ligula.
// 							</p>
// 						</div>
// 					</section>
// 					<section className="spotlight">
// 						<div className="image">
// 							<img src="images/pic02.jpeg" alt="" />
// 						</div>
// 						<div className="content">
// 							<h2>
// 								Tortor dolore feugiat
// 								<br />
// 								elementum magna
// 							</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum. Donec hendrerit imperdiet.
// 								Mauris eleifend fringilla nullam aenean
// 								mi ligula.
// 							</p>
// 						</div>
// 					</section>
// 					<section className="spotlight">
// 						<div className="image">
// 							<img src="images/pic03.jpeg" alt="" />
// 						</div>
// 						<div className="content">
// 							<h2>
// 								Augue eleifend aliquet
// 								<br />
// 								sed condimentum
// 							</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum. Donec hendrerit imperdiet.
// 								Mauris eleifend fringilla nullam aenean
// 								mi ligula.
// 							</p>
// 						</div>
// 					</section>
// 				</section>

// 				{/* <!-- Three --> */}
// 				<section id="three" className="wrapper style3 special">
// 					<div className="inner">
// 						<header className="major">
// 							<h2>Accumsan mus tortor nunc aliquet</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum. Donec amet imperdiet eleifend
// 								<br />
// 								fringilla tincidunt. Nullam dui leo
// 								Aenean mi ligula, rhoncus ullamcorper.
// 							</p>
// 						</header>
// 						<ul className="features">
// 							<li className="icon fa-paper-plane">
// 								<h3>Arcu accumsan</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 							<li className="icon solid fa-laptop">
// 								<h3>Ac Augue Eget</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 							<li className="icon solid fa-code">
// 								<h3>Mus Scelerisque</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 							<li className="icon solid fa-headphones-alt">
// 								<h3>Mauris Imperdiet</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 							<li className="icon fa-heart">
// 								<h3>Aenean Primis</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 							<li className="icon fa-flag">
// 								<h3>Tortor Ut</h3>
// 								<p>
// 									Augue consectetur sed interdum
// 									imperdiet et ipsum. Mauris lorem
// 									tincidunt nullam amet leo Aenean
// 									ligula consequat consequat.
// 								</p>
// 							</li>
// 						</ul>
// 					</div>
// 				</section>

// 				{/* <!-- CTA --> */}
// 				<section id="cta" className="wrapper style4">
// 					<div className="inner">
// 						<header>
// 							<h2>Arcue ut vel commodo</h2>
// 							<p>
// 								Aliquam ut ex ut augue consectetur
// 								interdum endrerit imperdiet amet
// 								eleifend fringilla.
// 							</p>
// 						</header>
// 						<ul className="actions stacked">
// 							<li>
// 								<a
// 									href="#"
// 									className="button fit primary"
// 								>
// 									Activate
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="button fit">
// 									Learn More
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</section>

// 				{/* <!-- Footer --> */}
// 				<footer id="footer">
// 					<ul className="icons">
// 						<li>
// 							<a
// 								href="#"
// 								className="icon brands fa-twitter"
// 							>
// 								<span className="label">Twitter</span>
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#"
// 								className="icon brands fa-facebook-f"
// 							>
// 								<span className="label">Facebook</span>
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#"
// 								className="icon brands fa-instagram"
// 							>
// 								<span className="label">Instagram</span>
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#"
// 								className="icon brands fa-dribbble"
// 							>
// 								<span className="label">Dribbble</span>
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								href="#"
// 								className="icon solid fa-envelope"
// 							>
// 								<span className="label">Email</span>
// 							</a>
// 						</li>
// 					</ul>
// 				</footer>
// 			</div>

// 			{/* <!-- Scripts --> */}
// 			<script src="assets/js/jquery.min.js"></script>
// 			<script src="assets/js/jquery.scrollex.min.js"></script>
// 			<script src="assets/js/jquery.scrolly.min.js"></script>
// 			<script src="assets/js/browser.min.js"></script>
// 			<script src="assets/js/breakpoints.min.js"></script>
// 			<script src="assets/js/util.js"></script>
// 			<script src="assets/js/main.js"></script>
// 		</body>
// 	);
// }
