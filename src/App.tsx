import { useState } from 'react';
import FilterSection from './components/FilterSection/FilterSection';
import SummaryCard from './components/SummaryCard/SummaryCard';
import TowerTable from './components/TowerTable/TowerTable';
import { BarChart, PieChart } from './components/Charts';
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

  // Prepare data for bar chart (towers by city)
  const cityData = filteredTowers.reduce((acc, tower) => {
    const existing = acc.find(item => item.city === tower.city);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ city: tower.city, count: 1 });
    }
    return acc;
  }, [] as { city: string; count: number }[]);

  // Prepare data for pie chart (towers by status)
  const statusData = filteredTowers.reduce((acc, tower) => {
    const existing = acc.find(item => item.status === tower.status);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ status: tower.status, count: 1, percentage: 0 });
    }
    return acc;
  }, [] as { status: string; count: number; percentage: number }[]);

  // Calculate percentages
  const totalTowers = filteredTowers.length;
  statusData.forEach(item => {
    item.percentage = (item.count / totalTowers) * 100;
  });

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

          <div className="dashboard-chart">
            <BarChart data={cityData} />
            <PieChart data={statusData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
