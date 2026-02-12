// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './component/layout/Layout';

// Pages Import
import ClientHeader from './component/clients/ClientHeader';
import ClientTable from './component/clients/ClientTable';
import ProposalHeader from './component/proposals/ProposalHeader';
import ProposalTable from './component/proposals/ProposalTable';
import CasesHeader from './component/cases/CasesHeader';
import CasesTable from './component/cases/CasesTable';
import BankUpdates from './component/bank-updates/BankUpdates';
import BankProducts from './component/bank-products/BankProducts';
import DocumentsCenter from './component/documents/DocumentsCenter';
import ReferAndEarn from './component/refer-earn/ReferAndEarn';
import Tutorials from './component/tutorials/Tutorials';
import Credits from './component/credits/Credits';

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
const CasesPage = () => (
  <>
    <CasesHeader />
    <CasesTable />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="p-8 w-full max-w-[1400px] mx-auto">
         <Routes>
            <Route path="/" element={<Navigate to="/clients" replace />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            
            {/* Added Cases Route */}
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/bank-updates" element={<BankUpdates />} />
            <Route path="/bank-products" element={<BankProducts />} />
            <Route path="/documents" element={<DocumentsCenter />} />
            <Route path="/refer" element={<ReferAndEarn />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;