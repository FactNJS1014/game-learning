import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Layout } from './components/layout/Layout';
import { HomeView } from './pages/HomeView';
import { DashboardView } from './pages/DashboardView';
import { CatalogView } from './pages/CatalogView';
import { LessonView } from './components/learning/LessonView';
import { ProjectsView } from './components/projects/ProjectsView';
import { ProjectBuilder } from './components/projects/ProjectBuilder';
import { ToolsView } from './components/tools/ToolsView';
import { CodePlayground } from './components/playground/CodePlayground';
import { BlueprintSimulator } from './components/blueprint/BlueprintSimulator';
import { EngineComparison } from './components/comparison/EngineComparison';
import { ProgressView } from './pages/ProgressView';
import { BookmarksView } from './pages/BookmarksView';
import { NotesView } from './pages/NotesView';
import { SettingsView } from './pages/SettingsView';

const AppContent: React.FC = () => {
  const { activeTab, selectedLessonId } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'dashboard':
        return <DashboardView />;
      case 'learning':
      case 'lesson':
        return selectedLessonId ? <LessonView /> : <CatalogView />;
      case 'unity':
      case 'unreal':
        return <CatalogView />;
      case 'projects':
        return <ProjectsView />;
      case 'project-builder':
        return <ProjectBuilder />;
      case 'tools':
        return <ToolsView />;
      case 'playground':
        return <CodePlayground />;
      case 'blueprint-sim':
        return <BlueprintSimulator />;
      case 'comparison':
        return <EngineComparison />;
      case 'progress':
        return <ProgressView />;
      case 'bookmarks':
        return <BookmarksView />;
      case 'notes':
        return <NotesView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };

  return <Layout>{renderActiveView()}</Layout>;
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
