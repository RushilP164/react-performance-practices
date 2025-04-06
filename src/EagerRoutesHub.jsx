import { Route, Routes } from "react-router-dom";
import ReactMemo from "./pages/react-memo";
import KeyImporatnce from "./pages/key-importance";
import HookUseCallback from "./pages/hook-use-callback";
import HookUseMemo from "./pages/hook-use-memo";
import HookUseTransition from "./pages/hook-use-transition";
import HookUseDeferredValue from "./pages/hook-use-deferred-value";
import LazyImages from "./pages/lazy-images";
import LazyComponentDemo from "./pages/lazy-components";
import VirtualizedList from "./pages/virtualized-list";

const EagerRoutesHub = () => {
	return (
		<Routes>
			<Route path="/react-memo" element={<ReactMemo />} />
			<Route path="/key-importance" element={<KeyImporatnce />} />
			<Route path="/hook-use-callback" element={<HookUseCallback />} />
			<Route path="/hook-use-memo" element={<HookUseMemo />} />
			<Route path="/hook-use-transition" element={<HookUseTransition />} />
			<Route path="/hook-use-deferred-value" element={<HookUseDeferredValue />} />
			<Route path="/lazy-components" element={<LazyComponentDemo />} />
			<Route path="/lazy-images" element={<LazyImages />} />
			<Route path="/virtualized-list" element={<VirtualizedList />} />
		</Routes>
	);
};

export default EagerRoutesHub;
