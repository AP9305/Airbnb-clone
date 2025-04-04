import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./contexts/WishlistContext";
import Index from "./pages/Index";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetail from "./pages/PropertyDetail";
import WishlistPage from "./pages/WishlistPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WishlistProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/listings/:id" element={<PropertyDetail />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
