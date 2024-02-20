import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { TeacherList } from './pages/TeacherList';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
      </Routes>
    </BrowserRouter>
  );
}

