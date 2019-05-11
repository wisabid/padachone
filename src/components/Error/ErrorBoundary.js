import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';

// Sentry.init({
//  dsn: "https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"
// });
// should have been called before using it here
// ideally before even rendering your react app

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, eventId: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      Sentry.withScope(scope => {
          scope.setExtras(errorInfo);
          const eventId = Sentry.captureException(error);
          this.setState({eventId})
      });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
              <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</a>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}

export default ErrorBoundary;