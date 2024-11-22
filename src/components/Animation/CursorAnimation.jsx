import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

// ErrorBoundary component to catch errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service if needed
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any fallback UI
      return <div>Error loading cursor</div>;
    }

    return this.props.children;
  }
}

export default function AnimatedPointer() {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client side (not SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  // Only render AnimatedCursor if on the client side
  return (
    isClient && (
      <ErrorBoundary>
        <AnimatedCursor
          innerSize={8}
          outerSize={22}
          color="193, 11, 111"
          outerAlpha={0.5}
          innerScale={0.2}
          outerScale={2}
        />
      </ErrorBoundary>
    )
  );
}
