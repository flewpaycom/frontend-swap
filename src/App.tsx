import "./App.css";
import Navbar from "./components/navbar";
import SwapPage from "./pages/swap";

function App() {
	return (
		<>
			<Navbar />
			<main className="p-8 min-h-screen w-full bg-gradient-to-br from-white to-primary/20">
				<div className="absolute top-0 left-0 h-full w-full -z-10">
					<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
				</div>
				<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#adadad_1px,transparent_1px)] [background-size:16px_16px]"></div>
				<SwapPage />
			</main>
		</>
	);
}

export default App;
