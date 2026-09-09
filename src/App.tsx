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
import CssCourseLayout from './pages/courses/css/CssCourseLayout';
import CssTopicPage from './pages/courses/css/CssTopicPage';
import CssInterviewQuestionsPage from './pages/courses/css/CssInterviewQuestionsPage';
import AiCourseLayout from './pages/courses/ai/AiCourseLayout';
import AiTopicPage from './pages/courses/ai/AiTopicPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
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
              <Route path="/interview-prep/css" element={<CssCourseLayout />}>
                <Route index element={<Navigate to="introduction" replace />} />
                <Route path="interview-questions" element={<CssInterviewQuestionsPage />} />
                <Route path=":topicSlug" element={<CssTopicPage />} />
              </Route>
              <Route path="/interview-prep/ai" element={<AiCourseLayout />}>
                <Route index element={<Navigate to="evolution-of-ai" replace />} />
                <Route path=":topicSlug" element={<AiTopicPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
