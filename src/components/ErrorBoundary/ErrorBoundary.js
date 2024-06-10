import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FallbackErrorBoundary from './subComponents/FallbackErrorBoundary';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log('--------ErrorBoundary start----');
		console.log(error);
		console.log(info);
		console.log('--------ErrorBoundary end----');
	}

	render() {
		if (this.state.hasError) {
			return <FallbackErrorBoundary />;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;

ErrorBoundary.defaultProps = {
	children: null,
};

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
