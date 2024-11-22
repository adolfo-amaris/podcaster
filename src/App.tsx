import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/podcasts/pages/HomePage/HomePage';
import PodcastDetailPage from './features/podcasts/pages/PodcastDetailPage/PodcastDetailPage';
import EpisodeDetailPage from './features/podcasts/pages/EpisodeDetailPage/EpisodeDetailPage';
import Header from './shared/components/Header';
import { LoadingProvider } from './shared/context/LoadingContext';
import { NavigationProvider } from './shared/context/NavigationContext';
import { PodcastServiceProvider } from './shared/context/PodcastServiceContext'; // Importa el proveedor


const App: React.FC = () => {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
      <NavigationProvider>

        <LoadingProvider>

          <PodcastServiceProvider> {/* Añadir el proveedor aquí */}

            {/* El Header se muestra en todas las páginas */}
            <Header />

            <Routes>

              {/* Ruta para la página principal */}
              <Route path="/" element={<HomePage />} />

              {/* Ruta para el detalle de un episodio */}
              <Route path="/podcast/:podcastId" element={<PodcastDetailPage />}>
                <Route path="episode/:episodeId" element={<EpisodeDetailPage />} />
              </Route>

            </Routes>

          </PodcastServiceProvider>

        </LoadingProvider>
        
      </NavigationProvider>


    </Router>
  );
};

export default App;
