import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    return this.state.hasError ? <h2>Something went wrong.</h2> : this.props.children;
  }
}

export default ErrorBoundary;
