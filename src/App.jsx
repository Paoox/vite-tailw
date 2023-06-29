import Button from "./components/Buttons";
import CardData from "./components/CardData";
import { cards } from "./data/cards";

function App() {
  return (
    <>
      <main className="bg-white  text-transparent  grid grid-cols-2 px-16 pt-16">
        <article className=" leading-8 mb-11 ">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-600 via-blue-500 to-green-700 bg-clip-text">
            Vite
          </h1>
          <p className="text-6xl font-bold text-gray-700">Next Generation</p>
          <p className="text-6xl font-bold text-gray-700">Frontend Tooling</p>
          <p className="text-2xl pt-6 text-gray-500">
            Get ready for a development environment that can <br /> finally
            catch up with you.
          </p>
          <div className="pt-12 font-bold text-sm">
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-300 ... mr-3 text-white rounded-3xl w-28 h-10">
              Get Started
            </button>
            <Button nameButton="Why Vite?" />
            <Button nameButton="View on GitHub" />
          </div>
        </article>
        <article className="px-36 justify-center items-center ">
          <img
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="vitejs"
            className="h-80 w-80 "
          />
        </article>
      </main>
      <section className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-1 px-16 pb-16">
        {cards.map((card, index) => {
          return (
            <CardData
              key={`card-data-${index}`}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
