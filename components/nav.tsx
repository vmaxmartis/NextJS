import Link from "next/link";
import Image from "next/image";

import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav } from "reactstrap";

function Navbar() {
	// const [selected, setSelected] = React.useState("selected1");
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link href="/">
						<h4>
							<a className="nav-link active">Page1</a>
						</h4>
					</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							<Link href="/page1">
								<li className="nav-item">
									<h5>
										<a className="nav-link active" aria-current="page">
											Page2
										</a>
									</h5>
								</li>
							</Link>
							<Link href="/page2">
								<li className="nav-item">
									<h5>
										<a className="nav-link active" aria-current="page">
											Page3
										</a>
									</h5>
								</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="container-fluid">
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
