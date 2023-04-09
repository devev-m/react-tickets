import Header from './components/Header/Header';
import FilterControlPanel from './components/FilterControlPanel/FilterControlPanel';
import TicketsGroup from './components/TicketsGroup/TicketsGroup';

function App() {
  return (
    <div className="container">
      <Header />
      <FilterControlPanel />
      <TicketsGroup />
    </div>
  )
}

export default App;
