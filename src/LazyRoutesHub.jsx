import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-load your pages
const ReactMemo = React.lazy(() => import("./pages/react-memo"));
const KeyImporatnce = React.lazy(() => import("./pages/key-importance"));
const HookUseCallback = React.lazy(() => import("./pages/hook-use-callback"));
const HookUseMemo = React.lazy(() => import("./pages/hook-use-memo"));
const HookUseTransition = React.lazy(() => import("./pages/hook-use-transition"));
const HookUseDeferredValue = React.lazy(() => import("./pages/hook-use-deferred-value"));
const LazyImages = React.lazy(() => import("./pages/lazy-images"));
const LazyComponentDemo = React.lazy(() => import("./pages/lazy-components"));
const VirtualizedList = React.lazy(() => import("./pages/virtualized-list"));

const LazyRoutesHub = () => {
	return (
		// Suspense displays a fallback UI while a lazy component is loading.
		<Suspense fallback={<div>Loading...</div>}>
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
		</Suspense>
	);
};

export default LazyRoutesHub;
