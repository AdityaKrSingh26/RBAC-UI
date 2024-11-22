import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';
import Layout from './components/Layout';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <Provider store={store}>

      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
          <Toaster position="top-right" />
        </BrowserRouter>
      </ThemeProvider>

    </Provider>
  );
}

export default App;