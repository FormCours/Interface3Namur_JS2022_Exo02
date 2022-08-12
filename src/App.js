import './App.css';
import ProductList from './components/product-list/product-list';
import Header from './containers/header/header';
import product from './data/product.json';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>Correction de l'exo</h1>
        <ProductList productData={product} />
      </div>
    </>
  );
}

export default App;
