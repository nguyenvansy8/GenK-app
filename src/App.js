import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Mobile from "./components/mobile/Mobile";
import SinglePage from "./components/singlePages/SinglePage";
import Footer from "./components/common/footer/Footer";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/singlepage/:id" component={SinglePage} />
					<Route exact path="/mobile" component={Mobile} />
				</Switch>
        <Footer />
			</Router>
		</>
	);
}

export default App;
