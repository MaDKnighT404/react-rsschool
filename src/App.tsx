import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  const [isRenderComplete, setIsRenderComplete] = useState(false);

  useEffect(() => {
    setIsRenderComplete(true);
  }, []);

  if (!isRenderComplete) {
    return null;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
