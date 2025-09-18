import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SOCServicePage from './pages/SOCServicePage';
import GRCPage from './pages/services/GRCPage';
import ComplianceGRCPage from './pages/services/ComplianceGRCPage';
import DefensiveSecurityPage from './pages/services/DefensiveSecurityPage';
import OffensiveSecurityPage from './pages/services/OffensiveSecurityPage';
import DataCenterPage from './pages/services/DataCenterPage';
import NetworkEngineeringPage from './pages/services/NetworkEngineeringPage';
import CloudIntegrationPage from './pages/services/CloudIntegrationPage';
import VirtualizationPage from './pages/services/VirtualizationPage';
import ServerAdministrationPage from './pages/services/ServerAdministrationPage';
import BackupRecoveryPage from './pages/services/BackupRecoveryPage';
import InfrastructureMonitoringPage from './pages/services/InfrastructureMonitoringPage';
import PerformanceOptimizationPage from './pages/services/PerformanceOptimizationPage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import MobileDevelopmentPage from './pages/services/MobileDevelopmentPage';
import DevOpsPage from './pages/services/DevOpsPage';
import EnterpriseSoftwarePage from './pages/services/EnterpriseSoftwarePage';
import IndustriesPage from './pages/IndustriesPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:category/:service" element={<ServiceDetailPage />} />
        
        {/* Cybersecurity Services */}
        <Route path="services/cybersecurity/defensive-security" element={<DefensiveSecurityPage />} />
        <Route path="services/cybersecurity/offensive-security" element={<OffensiveSecurityPage />} />
        <Route path="services/cybersecurity/soc-as-a-service" element={<SOCServicePage />} />
        <Route path="services/cybersecurity/grc" element={<GRCPage />} />
        <Route path="services/cybersecurity/compliance-grc" element={<ComplianceGRCPage />} />
        
        {/* Infrastructure Services */}
        <Route path="services/infrastructure/data-center-design" element={<DataCenterPage />} />
        <Route path="services/infrastructure/network-engineering" element={<NetworkEngineeringPage />} />
        <Route path="services/infrastructure/cloud-integration" element={<CloudIntegrationPage />} />
        <Route path="services/infrastructure/virtualization" element={<VirtualizationPage />} />
        <Route path="services/infrastructure/server-administration" element={<ServerAdministrationPage />} />
        <Route path="services/infrastructure/backup-recovery" element={<BackupRecoveryPage />} />
        <Route path="services/infrastructure/monitoring" element={<InfrastructureMonitoringPage />} />
        <Route path="services/infrastructure/performance-optimization" element={<PerformanceOptimizationPage />} />
        
        {/* Development Services */}
        <Route path="services/development/web-development" element={<WebDevelopmentPage />} />
        <Route path="services/development/mobile-development" element={<MobileDevelopmentPage />} />
        <Route path="services/development/devops-cicd" element={<DevOpsPage />} />
        <Route path="services/development/enterprise-software" element={<EnterpriseSoftwarePage />} />
        
        {/* Other Pages */}
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;