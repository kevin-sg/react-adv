import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import routes from "./routes";
import logo from "../logo.svg";

const Navigation = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React logo" />
						<ul>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink
										to={to}
										className={({ isActive }) => (isActive ? "nav-active" : "")}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<Routes>
						{routes.map(({ path, Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</Router>
		</Suspense>
	);
};

export default Navigation;
