import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/cookies';
import { fetchProjectsListAction } from '../../../actions/employees';

class List extends Component {
	state = {
		cookies: {
			id: getCookie('id'),
			role: getCookie('role')
		}
	}

	constructor(props) {
		super(props);
		this.props.dispatch(fetchProjectsListAction(this.state.cookies));
	}

	render() {
		return (
			<div>
				LIST
			</div>
		);
	}
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(List);