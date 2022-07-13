import React from 'react';

// Apollo Client components
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

// Middleware token retrieval
import { setContext } from '@apollo/client/link/context';

// React Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components of page
import Header from './components/Header';
import Footer from './components/Footer';

// other "pages"
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';

// Home page
import Home from './pages/Home';

const httpLink = createHttpLink({
  // the Uniform Resource Identifier
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className=''>
          <Header />
          <div className=''>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
