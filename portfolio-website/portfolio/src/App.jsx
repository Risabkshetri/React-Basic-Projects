// App.js
// import Navbar from "./components/Navbar";
import Navbar from "./components/Nabbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx/";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
