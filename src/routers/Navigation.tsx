import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import ShopingPage from "../02-components-patterns/pages/ShopingPage";

import logo from "../logo.svg";

const Navigation = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React logo" />
						<ul>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) => (isActive ? "nav-active" : "")}
								>
									Shopping
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) => (isActive ? "nav-active" : "")}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/users"
									className={({ isActive }) => (isActive ? "nav-active" : "")}
								>
									Users
								</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<ShopingPage />} />
						<Route path="/users" element={<h1>User</h1>} />
						<Route path="/about" element={<h1>About</h1>} />

						<Route path="/*" element={<Navigate to="/" replace />} />
					</Routes>
				</div>
			</Router>
		</Suspense>
	);
};

export default Navigation;
