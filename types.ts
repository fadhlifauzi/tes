
export interface Insight {
  title: string;
  summary: string;
  category: 'Tech' | 'Science' | 'Future' | 'Society';
  confidence: number;
}

export enum Page {
  Home = 'home',
  Dashboard = 'dashboard',
  Insights = 'insights'
}
