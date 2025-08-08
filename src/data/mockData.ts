import type { CellTower, DashboardSummary } from '../types/tower';

export const mockTowers: CellTower[] = [
  // Cairo towers
  {
    id: '1',
    name: 'Cairo Central Tower',
    city: 'Cairo',
    networkType: '5G',
    status: 'active',
    signalStrength: 5,
  },
  {
    id: '2',
    name: 'Cairo North Tower',
    city: 'Cairo',
    networkType: '4G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: '3',
    name: 'Cairo South Tower',
    city: 'Cairo',
    networkType: '5G',
    status: 'offline',
    signalStrength: 2,
  },

  // Alexandria towers
  {
    id: '4',
    name: 'Alexandria Port Tower',
    city: 'Alexandria',
    networkType: '4G',
    status: 'active',
    signalStrength: 3,
  },
  {
    id: '5',
    name: 'Alexandria Beach Tower',
    city: 'Alexandria',
    networkType: '5G',
    status: 'active',
    signalStrength: 5,
  },
  {
    id: '6',
    name: 'Alexandria City Tower',
    city: 'Alexandria',
    networkType: '4G',
    status: 'offline',
    signalStrength: 1,
  },

  // Hurghada towers
  {
    id: '7',
    name: 'Hurghada Resort Tower',
    city: 'Hurghada',
    networkType: '5G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: '8',
    name: 'Hurghada Marina Tower',
    city: 'Hurghada',
    networkType: '4G',
    status: 'active',
    signalStrength: 3,
  },
  {
    id: '9',
    name: 'Hurghada Airport Tower',
    city: 'Hurghada',
    networkType: '5G',
    status: 'offline',
    signalStrength: 2,
  },

  // Luxor towers
  {
    id: '10',
    name: 'Luxor Temple Tower',
    city: 'Luxor',
    networkType: '4G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: '11',
    name: 'Luxor Valley Tower',
    city: 'Luxor',
    networkType: '5G',
    status: 'active',
    signalStrength: 5,
  },
  {
    id: '12',
    name: 'Luxor West Tower',
    city: 'Luxor',
    networkType: '4G',
    status: 'offline',
    signalStrength: 1,
  },
];

export const calculateSummary = (towers: CellTower[]): DashboardSummary => {
  return {
    totalTowers: towers.length,
    activeTowers: towers.filter(tower => tower.status === 'active').length,
    averageSignal: Math.round(
      towers.reduce((sum, tower) => sum + tower.signalStrength, 0) / towers.length
    )
  };
};

export const mockSummary = calculateSummary(mockTowers);
