export interface CellTower {
  id: string;
  name: string;
  city: string;
  networkType: '4G' | '5G';
  status: 'active' | 'offline';
  signalStrength: number; // 1-5
}
