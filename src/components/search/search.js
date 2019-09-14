import React, { useState } from 'react';
import { searchData } from '../../actions/actions';
import { connect } from 'react-redux';
import './search.scss';

function Search(props) {
  const [valueSelect, setSelect] = useState('All');
  const [valueInput, setInput] = useState('');

  const handleChangeSelect = event => {
    setSelect(event.target.value);
  };

  const handleChange = event => {
    setInput(event.target.value);
  };
  const handleSubmit = e => {
    const { dataReducer } = props;
    e.preventDefault();

    props.searchData({
      dataReducer,
      value: { valueInput: valueInput.trim(), valueSelect },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={valueInput} onChange={e => handleChange(e)} />
        <select value={valueSelect} onChange={e => handleChangeSelect(e)}>
          <option value="All">All</option>
          <option value="id">ID</option>
          <option value="title">Title</option>
          <option value="name">Name</option>
          <option value="party">Party</option>
          <option value="gender">Gender</option>
        </select>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer,
  };
};

export default connect(
  mapStateToProps,
  { searchData },
)(Search);
