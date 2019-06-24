import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';
import SiteMessage from '../Messages/SiteMessage';
import {REPORT_FB} from '../../utils/constants'

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

    reportCrash = (evObj) => {
        Sentry.showReportDialog(evObj)
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
                <>
                <SiteMessage type="error" message={<>
                <p>We're sorry — something's gone wrong.</p>
                <p>Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.</p>
                <a style={{textDecoration:'underline'}} onClick={() => this.reportCrash({ eventId: this.state.eventId })}>{REPORT_FB}</a>
              </>} action="Refresh" />
              {/* <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</a>               */}
              {/* <p>We're sorry — something's gone wrong.</p>
              <p>Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.</p> */}
              </>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}

export default ErrorBoundary;