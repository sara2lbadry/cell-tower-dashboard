# Cell Tower Dashboard

A modern, interactive dashboard for monitoring and managing telecom network infrastructure. Built with React, TypeScript, and D3.js for data visualization.

## 🚀 Features

### 📊 **Real-time Monitoring**
- **Summary Cards**: Total towers, active towers, and average signal strength
- **Dynamic Filtering**: Search by tower name, filter by city, and filter by status
- **Interactive Charts**: Bar chart for towers by city and pie chart for status distribution

### 🔍 **Advanced Filtering**
- **Search Functionality**: Find towers by name with real-time search
- **City Filter**: Filter towers by specific cities (Cairo, Alexandria, Hurghada, Luxor)
- **Status Filter**: Filter by active or offline status
- **Combined Filters**: Use multiple filters simultaneously for precise results

### 📈 **Data Visualization**
- **Bar Chart**: Visual representation of towers distributed by city
- **Pie Chart**: Status distribution showing active vs offline towers
- **Responsive Design**: Charts adapt to different screen sizes

### 🎨 **Modern UI/UX**
- **Clean Interface**: Modern, professional dashboard design
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Color-coded Status**: Visual indicators for tower status
- **Smooth Interactions**: Hover effects and transitions

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Styling**: SCSS with CSS Grid and Flexbox
- **Charts**: D3.js for data visualization
- **Icons**: React Icons
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cell-tower-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
cell-tower-dashboard/
├── src/
│   ├── components/
│   │   ├── Charts/
│   │   │   ├── BarChart.tsx      # Bar chart component
│   │   │   ├── PieChart.tsx      # Pie chart component
│   │   │   └── Charts.scss       # Chart styles
│   │   ├── FilterSection/
│   │   │   ├── FilterSection.tsx # Filter controls
│   │   │   └── FilterSection.scss
│   │   ├── SummaryCard/
│   │   │   ├── SummaryCard.tsx   # Summary statistics
│   │   │   └── SummaryCard.scss
│   │   └── TowerTable/
│   │       ├── TowerTable.tsx    # Data table
│   │       └── TowerTable.scss
│   ├── data/
│   │   └── mockData.ts           # Sample tower data
│   ├── styles/
│   │   ├── _variables.scss       # SCSS variables
│   │   ├── dashboard.scss        # Main dashboard styles
│   │   └── global.scss           # Global styles
│   ├── types/
│   │   └── tower.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main application component
│   └── main.tsx                  # Application entry point
├── public/
│   └── tower.svg                 # Tower icon
└── package.json
```

## 🎯 Usage

### **Dashboard Overview**
The dashboard displays comprehensive information about your cell tower network:

1. **Header Section**: Application title and description
2. **Summary Cards**: Key metrics at a glance
3. **Filter Section**: Search and filtering controls
4. **Data Table**: Detailed tower information
5. **Charts**: Visual data representation

### **Filtering Towers**

#### **Search by Name**
- Type in the search box to find towers by name
- Search is case-insensitive and updates in real-time
- Example: Type "Cairo" to find all Cairo towers

#### **Filter by City**
- Select a city from the dropdown to see towers in that location
- Available cities: Cairo, Alexandria, Hurghada, Luxor
- Select "All Cities" to remove the filter

#### **Filter by Status**
- Choose "Active" to see only operational towers
- Choose "Offline" to see only non-operational towers
- Select "All Statuses" to remove the filter

#### **Combined Filtering**
- Use multiple filters simultaneously
- Example: Search "Tower" + City "Cairo" + Status "Active"

### **Understanding the Charts**

#### **Bar Chart (Towers by City)**
- Shows the number of towers in each city
- Bar height represents tower count
- Hover for detailed information

#### **Pie Chart (Status Distribution)**
- Displays the proportion of active vs offline towers
- Green segment: Active towers
- Red segment: Offline towers
- Shows percentages and counts

## 📊 Data Structure

### **Tower Information**
Each tower contains:
- **ID**: Unique identifier
- **Name**: Tower name
- **City**: Location (Cairo, Alexandria, Hurghada, Luxor)
- **Network Type**: 4G or 5G
- **Status**: Active or Offline
- **Signal Strength**: 1-5 scale

### **Sample Data**
The application includes mock data for 12 towers across 4 cities:
- **Cairo**: 3 towers (Central, North, South)
- **Alexandria**: 3 towers (Port, Beach, City)
- **Hurghada**: 3 towers (Resort, Marina, Airport)
- **Luxor**: 3 towers (Temple, Valley, West)

## 🎨 Customization

### **Styling**
- Modify SCSS variables in `src/styles/_variables.scss`
- Update component styles in respective `.scss` files
- Customize chart colors in chart components

### **Data**
- Replace mock data in `src/data/mockData.ts`
- Update TypeScript interfaces in `src/types/tower.ts`
- Modify chart data preparation logic in `App.tsx`

### **Features**
- Add new filter types in `FilterSection.tsx`
- Create additional chart types in `components/Charts/`
- Extend summary calculations in `calculateSummary` function

## 🚀 Deployment

### **Live Demo**
🌐 **Live Application**: [https://cell-tower-dashboard-eight.vercel.app/](https://cell-tower-dashboard-eight.vercel.app/)

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deployment Status**
✅ **Successfully deployed** to Vercel
✅ **Live and accessible** at the provided URL
✅ **Production build** optimized and running

## 🔮 Future Improvements

- **Real-time Data Integration**: Connect to live API endpoints for real-time tower monitoring
- **Interactive Maps**: Add geographic visualization showing tower locations and signal coverage
- **Advanced Analytics**: Implement trend analysis, predictive maintenance, and automated alerts
- **Mobile Application**: Develop React Native app for field technicians and on-the-go monitoring

