import React, {  Component } from 'react';
import classnames from 'classnames';

import './index.css';

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('NotFound', className)} {...props}>
            <h1>
                404 <small>Not Found :(</small>
            </h1>
        </div>
    );
  }
}

export default App;
