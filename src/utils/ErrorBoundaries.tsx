import React from "react";

interface Props {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundaries extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallBackComponent;
    }

    return this.props.children;
  }
}
