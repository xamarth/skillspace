import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link to="/">
					<span>Skill Space</span>
				</Link>
			</div>

			<div className="actions">
				<Link to="/sign-in/$" className="btn-primary">
					<LogIn size={16} />
					Sign In
				</Link>
				{/* <Show when="signed-in">
					<UserButton />
				</Show>

				<Show when="signed-out">
					<Link
						to="/sign-in/$"
						className="btn-primary"
						// onClick={() => posthog.capture("sign_in_clicked")}
					>
						<LogIn size={16} />
						Sign in
					</Link>
				</Show> */}
			</div>
		</nav>
	);
}
