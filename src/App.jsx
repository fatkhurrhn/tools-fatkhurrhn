import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ─── Tools Pages ────────────────────────────────────
import HomePage from './pages/HomePage';
import ShortlinkPage from './pages/shortlinks/ShortLinks';
import PasswordGenerator from './pages/PasswordGenerator';
import TextCaseConverter from './pages/TextCaseConverter';
import WhatsAppTextConverter from './pages/WhatsAppTextConverter';
function App() {
  return (
    <Router>
      <Routes>

        {/* ── Routes ──────────────── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shortlink" element={<ShortlinkPage />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/text-case-converter" element={<TextCaseConverter />} />
        <Route path="/whatsapp-text-converter" element={<WhatsAppTextConverter />} />
        <Route path="/:slug" element={<ShortlinkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
