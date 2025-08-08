import './FilterSection.scss';

interface FilterSectionProps {
  searchTerm: string;
  selectedCity: string;
  allCities: string[];
  onSearchChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

function FilterSection({
  searchTerm,
  selectedCity,
  allCities,
  onSearchChange,
  onCityChange,
}: FilterSectionProps) {
  return (
    <div className="filter-section">
      {/* TOWER SEARCH */}
      <div className="filter-group">
        <label>Search Towers</label>
        <input
          type="text"
          className="input"
          placeholder="Search by tower name..."
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>

      {/* CITY FILTER */}
      <div className="filter-group">
        <label>Filter by City</label>
        <select
          className="select"
          value={selectedCity}
          onChange={e => onCityChange(e.target.value)}
        >
          <option value=""> All Cities </option>
          {allCities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
