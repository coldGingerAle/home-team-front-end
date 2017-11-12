import React from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
    <div className="page">
      <Navbar />
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >

        <Page {...props} />
      </ReactCSSTransitionGroup>
      <Footer />
    </div>;
};
export default PageShell;
