import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Inspections from "./pages/Inspections";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/inspections" element={<Inspections />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;