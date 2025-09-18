import { useParams, Navigate } from 'react-router-dom';
import DefensiveSecurityPage from './services/DefensiveSecurityPage';
import OffensiveSecurityPage from './services/OffensiveSecurityPage';
import NetworkEngineeringPage from './services/NetworkEngineeringPage';
import CloudIntegrationPage from './services/CloudIntegrationPage';
import VirtualizationPage from './services/VirtualizationPage';

const ServiceDetailPage = () => {
  const { category, service } = useParams();

  // Define the service routing mapping
  const serviceRoutes: { [key: string]: { [key: string]: React.ComponentType } } = {
    cybersecurity: {
      'defensive-security': DefensiveSecurityPage,
      'offensive-security': OffensiveSecurityPage,
    },
    infrastructure: {
      'network-engineering': NetworkEngineeringPage,
      'cloud-integration': CloudIntegrationPage,
      'virtualization': VirtualizationPage,
    },
    // Add more categories and services as needed
  };

  // Get the component for the current route
  const ServiceComponent = serviceRoutes[category || '']?.[service || ''];

  // If no matching service found, redirect to services page
  if (!ServiceComponent) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceComponent />;
};

export default ServiceDetailPage;