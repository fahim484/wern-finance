import "./App.css";
import DebitCard from "./components/DebitCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Vision from "./components/Vision";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className="space-y-[128px]">
          <Hero />
          <Vision />
          <Offers />
          <DebitCard />
        </div>
      </div>
    </main>
  );
}

export default App;
