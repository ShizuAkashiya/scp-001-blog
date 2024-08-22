import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import BlogPost from './components/blogpost';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BlogPost />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
