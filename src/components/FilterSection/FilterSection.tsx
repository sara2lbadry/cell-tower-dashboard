import './FilterSection.scss';

interface FilterSectionProps {
  searchTerm: string;
  selectedCity: string;
  selectedStatus: string;
  allCities: string[];
  onSearchChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

function FilterSection({
  searchTerm,
  selectedCity,
  selectedStatus,
  allCities,
  onSearchChange,
  onCityChange,
  onStatusChange,
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

      {/* STATUS FILTER */}
      <div className="filter-group">
        <label>Filter by Status</label>
        <select
          className="select"
          value={selectedStatus}
          onChange={e => onStatusChange(e.target.value)}
        >
          <option value=""> All Statuses </option>
          <option value="active"> Active </option>
          <option value="offline"> Offline </option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
