import { HiOutlineStatusOnline } from 'react-icons/hi';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { PiStackBold } from 'react-icons/pi';
import type { DashboardSummary } from '../../types/tower';
import "./SummaryCard.scss"

interface SummaryCardsProps {
  summary: DashboardSummary;
}

function SummaryCard({ summary }: SummaryCardsProps) {
  return (
    <div className="summary-cards">
      <div className="summary-card">
        <div className="summary-card-icon total">
          <PiStackBold />
        </div>
        <div className="summary-card-content">
          <h3>Total Towers</h3>
          <p className="summary-card-value">{summary.totalTowers}</p>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-icon active">
          <HiOutlineStatusOnline />
        </div>
        <div className="summary-card-content">
          <h3>Active Towers</h3>
          <p className="summary-card-value">{summary.activeTowers}</p>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-icon signal">
          <MdOutlineSignalCellularAlt />
        </div>
        <div className="summary-card-content">
          <h3>Average Signal</h3>
          <p className="summary-card-value">{summary.averageSignal}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
