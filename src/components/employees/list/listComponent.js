import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/cookies';
import { fetchProjectsListAction } from '../../../actions/employees';

class List extends Component {
	state = {
		cookies: {
			id: getCookie('id'),
			role: getCookie('role')
		},
		list: undefined
	}

	constructor(props) {
		super(props);
		this.props.dispatch(fetchProjectsListAction(this.state.cookies));
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.projects.hasOwnProperty('response')) {
			return {
				list: nextProps.projects.response
			}
		}

		return {
			list: undefined
		}
	}

	render() {
		if (this.state.list === undefined) {
			return <div>Loading...</div>
		}

		return (
			<div>
				{this.state.list.map(item => (
					<div key={item._id}>{item.name}</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(List);