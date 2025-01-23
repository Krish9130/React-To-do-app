import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

const HealthCheck = () => {
  const [isHealthy, setIsHealthy] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/health'); // assuming the health check route is at /health
        if (response.ok) {
          setIsHealthy(true);
        } else {
          setIsHealthy(false);
        }
      } catch (error) {
        setIsHealthy(false);
      }
    };

    checkHealth();
  }, []);

  if (isHealthy === null) {
    return <div>Loading health check...</div>;
  }

  if (!isHealthy) {
    return <div>Server is not healthy. Please try again later.</div>;
  }

  return <App />;
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
