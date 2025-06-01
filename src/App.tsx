import React, { useEffect, useState, useRef } from 'react'; // Added React import
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Assuming this is a different Sonner component
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation
} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
//import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/ui/back_to_top";
import LoadingScreen from './components/LoadingScreen'; // Ensure this path is correct
import { LoadingProvider, useLoading } from './context/LoadingContext'; // Ensure this path is correct

const queryClient = new QueryClient();

const MIN_LOADING_DISPLAY_TIME_MS = 2000; // Minimum time (in ms) the loading screen should be visible
const PROGRESS_ANIMATION_DURATION_MS = MIN_LOADING_DISPLAY_TIME_MS * 0.8; // Animate progress slightly faster

const AppLayout = () => {
  const { setLoading: setContextLoading } = useLoading();
  const navigation = useNavigation();

  const [isScreenVisible, setIsScreenVisible] = useState(true);
  const [simulatedProgress, setSimulatedProgress] = useState(0); // For LoadingScreen's actualProgress

  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navigationStartRef = useRef<number>(Date.now());
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isNavBusy = navigation.state === 'loading' || navigation.state === 'submitting';
    console.log(`Navigation state: ${navigation.state}, Is Nav Busy: ${isNavBusy}, Is Screen Visible: ${isScreenVisible}, Progress: ${simulatedProgress}`);

    setContextLoading(isNavBusy); // Update global context

    if (isNavBusy) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setIsScreenVisible(true);
      navigationStartRef.current = Date.now(); // Reset start time for current navigation

      // Start or restart progress simulation
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setSimulatedProgress(0); // Reset progress

      const startTime = Date.now();
      progressIntervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const currentProgress = Math.min(100, (elapsedTime / PROGRESS_ANIMATION_DURATION_MS) * 100);
        setSimulatedProgress(currentProgress);
        if (currentProgress >= 100) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        }
      }, 30); // Update progress frequently for smoother animation

    } else { // Navigation is idle
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setSimulatedProgress(100); // Ensure progress shows 100% when loading finishes

      const timeSinceNavStart = Date.now() - navigationStartRef.current;
      const remainingMinTime = MIN_LOADING_DISPLAY_TIME_MS - timeSinceNavStart;

      if (remainingMinTime > 0) {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setIsScreenVisible(false);
          setSimulatedProgress(0); // Reset progress for next time
        }, remainingMinTime);
      } else {
        setIsScreenVisible(false);
        setSimulatedProgress(0); // Reset progress for next time
      }
    }

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [navigation.state, setContextLoading]); // Removed simulatedProgress from deps to avoid loop with setInterval


  return (
    <>
      {/* Pass isScreenVisible to isLoading and simulatedProgress to actualProgress */}
      <LoadingScreen isLoading={isScreenVisible} actualProgress={simulatedProgress} />
      <TooltipProvider>
        <Toaster />
        <Sonner /> {/* Ensure this is the correct Sonner component or import */}
        <ScrollToTop />
        <Outlet /> {/* Child routes render here */}
        <BackToTop />
      </TooltipProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: async () => {
      console.log("AppLayout root loader executing...");
      // Simulate a small delay to ensure navigation state changes
      // await new Promise(resolve => setTimeout(resolve, 10)); // Optional: very short delay
      return null;
    },
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/industries", element: <Industries /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      // { path: "*", element: <NotFound /> }, // Uncomment if you have a NotFound component
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </QueryClientProvider>
);

export default App;
