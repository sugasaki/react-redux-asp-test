import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Tel';

import ForecastsTable from './ForecastsTable';
import Pagination from './Pagination';


class TelNumber extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.requestTelnumbers();
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    //this.props.requestTelnumbers();
  }

  render() {
    let people = this.props.people ? this.props.people : [];

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>

        {this.props.isLoading ? <span>Loading...</span> : []}
        <button className="btn btn-primary" onClick={this.props.requestTelnumbers}>ReLoad</button>


        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person =>
              <tr key={person.dateFormatted}>
                <td>{person.UserID}</td>
                <td>{person.UserName}</td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination />
      </div>
    );
  }
}

export default connect(
  state => state.peopleStore,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(TelNumber);
