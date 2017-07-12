/**
 * Created by eduardo.souza on 12/07/2017.
 */
// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './index.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <h1>
                    About
                </h1>
            </div>
        );
    }
}

