import type { CellTower } from '../../types/tower';

interface TowerTableProps {
  towersData: CellTower[];
}

function TowerTable({ towersData }: TowerTableProps) {
  return (
    <div className="tower-table-container">
      <table className="table tower-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Network Type</th>
            <th>Status</th>
            <th>Signal Strength</th>
          </tr>
        </thead>
        <tbody>
          {towersData?.map(tower => (
            <tr key={tower?.id}>
              <td className="tower-name">{tower.name}</td>
              <td>{tower?.city}</td>
              <td>
                <span className="network-badge">{tower.networkType}</span>
              </td>
              <td>
                <span className={`status-badge ${tower.status}`}>
                  {tower.status}
                </span>
              </td>
              <td>{tower?.signalStrength}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {towersData.length === 0 && (
        <div className="no-data">
          <p>No towers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default TowerTable;
