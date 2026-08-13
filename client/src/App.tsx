/* Terracotta Atelier salon route plus the second-ranked pizzeria preview route. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Pizzeria from "./pages/Pizzeria";

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router base={import.meta.env.BASE_URL}><Switch><Route path="/" component={Home} /><Route path="/pizzeria-castello" component={Pizzeria} /></Switch></Router></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
