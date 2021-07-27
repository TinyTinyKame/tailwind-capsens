import CardsList from './components/CardsList';
import POKEMONS from './data/pokemons';

function App() {
  return (
    <CardsList list={POKEMONS} title="Pokémons" />
  );
}

export default App;
