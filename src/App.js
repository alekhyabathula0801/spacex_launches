import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import LaunchesList from './components/LaunchesList';
import { fetchLaunches } from './dataLayer/features/launches/launchesAction';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <LaunchesList />
    </div>
  );
}

export default App;
