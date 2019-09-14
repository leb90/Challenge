import React from 'react';
import './table.scss';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>Party</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.dataReducer.members.map((e, i) => (
          <tr key={i}>
            <td>
              {' '}
              <Link className="logo" to={`/members/?id=${e.id}`}>
                {e.id}
              </Link>
            </td>
            <td>{`${e.first_name} ${e.last_name}`}</td>
            <td>{e.title}</td>
            <td>{e.party}</td>
            <td>{e.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Table);
