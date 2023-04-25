import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" exact element={<Homepage/>} />
				<Route path="/about" exact element={<About/>} />
				<Route path="/rentals" exact element={<About/>} />
				<Route path="/homes" exact element={<About/>} />
			</Routes>
		</Router>
	);
}

export default App;
