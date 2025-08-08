import { useState } from 'react';
import FilterSection from './components/FilterSection/FilterSection';
import SummaryCard from './components/SummaryCard/SummaryCard';
import TowerTable from './components/TowerTable/TowerTable';
import { mockTowers, calculateSummary } from './data/mockData';
import './styles/dashboard.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Get unique cities for filter dropdown
  const cities = Array.from(new Set(mockTowers.map(tower => tower.city)));

  const filterTowers = () => {
    return mockTowers.filter(tower => {
      // Filter by search term (tower name)
      const matchesSearch = searchTerm === '' || 
        tower.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by selected city
      const matchesCity = selectedCity === '' || tower.city === selectedCity;
      
      return matchesSearch && matchesCity;
    });
  }

  const filteredTowers = filterTowers();

  // Calculate summary based on filtered towers
  const filteredSummary = calculateSummary(filteredTowers);

  return (
    <div className="dashboard">
      <div className="container">
        <header className="dashboard-header">
          <h1>Cell Tower Dashboard</h1>
          <p>Monitor and manage your telecom network infrastructure</p>
        </header>

        <SummaryCard summary={filteredSummary} />

        <FilterSection
          searchTerm={searchTerm}
          selectedCity={selectedCity}
          allCities={cities}
          onSearchChange={setSearchTerm}
          onCityChange={setSelectedCity}
        />

        <div className="dashboard-content">
          <div className="dashboard-table">
            <TowerTable towersData={filteredTowers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
