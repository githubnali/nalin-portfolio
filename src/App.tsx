import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import InterviewPrepPage from './pages/InterviewPrepPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HtmlCourseLayout from './pages/courses/html/HtmlCourseLayout';
import HtmlTopicPage from './pages/courses/html/HtmlTopicPage';
import HtmlInterviewQuestionsPage from './pages/courses/html/HtmlInterviewQuestionsPage';

function App() {
  React.useEffect(() => {
    document.title = 'Nagaraju Nali | Frontend Engineer';
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen flex flex-col bg-bg">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/interview-prep" element={<InterviewPrepPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
              <Route path="/interview-prep/html" element={<HtmlCourseLayout />}>
                <Route index element={<Navigate to="introduction" replace />} />
                <Route path="interview-questions" element={<HtmlInterviewQuestionsPage />} />
                <Route path=":topicSlug" element={<HtmlTopicPage />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
