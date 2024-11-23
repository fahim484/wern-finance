import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className="space-y-[128px]">
          <Hero />
          <Vision />
        </div>
      </div>
    </main>
  );
}

export default App;
