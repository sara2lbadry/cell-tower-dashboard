export interface CellTower {
  id: string;
  name: string;
  city: string;
  networkType: '4G' | '5G';
  status: 'active' | 'offline';
  signalStrength: number; // 1-5
}

export interface DashboardSummary {
  totalTowers: number;
  activeTowers: number;
  averageSignal: number;
}

export interface CityData {
  city: string;
  count: number;
}

export interface StatusData {
  status: string;
  count: number;
  percentage: number;
}
