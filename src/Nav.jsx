import { Link, useLocation } from "react-router-dom";

const list = [
	{ slug: "react-memo", value: "React Memo" },
	{ slug: "key-importance", value: "Key Importance" },
	{ slug: "hook-use-callback", value: "Hook: useCallback" },
	{ slug: "hook-use-memo", value: "Hook: useMemo" },
	{ slug: "hook-use-transition", value: "Hook: useTransition" },
	{ slug: "hook-use-deferred-value", value: "Hook: useDeferredValue" },
	{ slug: "lazy-images", value: "Lazy Images" },
	{ slug: "lazy-components", value: "Lazy Components" },
	{ slug: "virtualized-list", value: "Virtualized List" },
];

const Nav = () => {
	const { pathname } = useLocation();

	return (
		<nav id="nav-id">
			{list.map((menu) => (
				<Link key={menu.slug} to={menu.slug} className={pathname.includes(menu.slug) ? "selected" : ""}>
					{menu.value}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
