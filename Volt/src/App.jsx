// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages Import
import ClientHeader from './components/clients/ClientHeader';
import ClientTable from './components/clients/ClientTable';
import ProposalHeader from './components/proposals/ProposalHeader';
import ProposalTable from './components/proposals/ProposalTable';

// Wrapper Components for Clean Routes
const ClientsPage = () => (
  <>
    <ClientHeader />
    <ClientTable />
  </>
);

const ProposalsPage = () => (
  <>
    <ProposalHeader />
    <ProposalTable />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="p-8 w-full max-w-[1400px] mx-auto">
          <Routes>
            {/* Default Route: Redirect to Clients */}
            <Route path="/" element={<Navigate to="/clients" replace />} />
            
            {/* Clients Route */}
            <Route path="/clients" element={<ClientsPage />} />
            
            {/* Proposals Route */}
            <Route path="/proposals" element={<ProposalsPage />} />
            
            {/* Future Routes (Empty for now) */}
            <Route path="/cases" element={<div className="text-2xl font-bold">Cases Page (Coming Soon)</div>} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;