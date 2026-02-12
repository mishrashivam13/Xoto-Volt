// src/App.jsx

import React, { Suspense, lazy } from "react";
// 1. BrowserRouter ko hatakar HashRouter import kiya
import {
  HashRouter, 
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./component/layout/Layout";

/* ===========================
   Lazy Loaded Pages
=========================== */
const ClientHeader = lazy(() => import("./component/clients/ClientHeader"));
const ClientTable = lazy(() => import("./component/clients/ClientTable"));

const ProposalHeader = lazy(() => import("./component/proposals/ProposalHeader"));
const ProposalTable = lazy(() => import("./component/proposals/ProposalTable"));

const CasesHeader = lazy(() => import("./component/cases/CasesHeader"));
const CasesTable = lazy(() => import("./component/cases/CasesTable"));

const BankUpdates = lazy(() => import("./component/bank-updates/BankUpdates"));
const BankProducts = lazy(() => import("./component/bank-products/BankProducts"));
const DocumentsCenter = lazy(() => import("./component/documents/DocumentsCenter"));
const ReferAndEarn = lazy(() => import("./component/refer-earn/ReferAndEarn"));
const Tutorials = lazy(() => import("./component/tutorials/Tutorials"));
const Credits = lazy(() => import("./component/credits/Credits"));

/* ===========================
   Loader Component
=========================== */
const PageLoader = () => (
  <div className="flex justify-center items-center h-[70vh]">
    <p className="text-gray-500 text-sm animate-pulse">Loading...</p>
  </div>
);

/* ===========================
   Wrapper Pages
=========================== */
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

/* ===========================
   Main App
=========================== */
function App() {
  return (
    // 2. BrowserRouter ki jagah HashRouter wrap kiya
    <HashRouter>
      <Layout>
        <div className="p-8 w-full max-w-[1400px] mx-auto">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Redirect Root */}
              <Route path="/" element={<Navigate to="/clients" replace />} />

              {/* Main Routes */}
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/proposals" element={<ProposalsPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/bank-updates" element={<BankUpdates />} />
              <Route path="/bank-products" element={<BankProducts />} />
              <Route path="/documents" element={<DocumentsCenter />} />
              <Route path="/refer" element={<ReferAndEarn />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/credits" element={<Credits />} />

              {/* 404 Fallback */}
              <Route
                path="*"
                element={
                  <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold">404</h2>
                    <p className="text-gray-500 mt-2">Page Not Found</p>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </Layout>
    </HashRouter>
  );
}

export default App;