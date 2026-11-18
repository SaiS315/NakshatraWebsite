import { lazy, Suspense } from 'react';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import './App.css';

const Competition = lazy(() => import('./pages/Competition'));
const About = lazy(() => import('./pages/About'));
const Teams = lazy(() => import('./pages/Teams'));
const Apply = lazy(() => import('./pages/Apply'));
const Sponsors = lazy(() => import('./pages/Sponsors'));

export default function App() {
  return (
    <HashRouter>
      <StarBackground />
      <NavBar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Suspense fallback={<p className="page-wrapper text-center" role="status">Loading page…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/events" element={<Navigate to="/teams" replace />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  );
}
