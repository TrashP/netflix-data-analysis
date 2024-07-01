import './output.css';
import Nav from './content/Nav';
import Content from './content/Content';
import Aside from './content/Aside';
import Footer from './content/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <main className="h-screen flex justify-around">
          <Content />
          <Aside />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
