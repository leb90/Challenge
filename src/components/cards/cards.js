import React from "react";
import { connect } from "react-redux";
import "./cards.scss";
import male from "../../img/img_avatar.png";
import female from "../../img/img_avatar2.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Cards(props) {
  const filterMember = () => {
    const url = new URL(window.location.href);
    const query_string = url.search;

    const search_params = new URLSearchParams(query_string);

    const id = search_params.get("id");
    return props.dataReducer.members.filter(e => e.id === id);
  };
  const member = filterMember();
  return (
    <div style={{ height: "82vh" }}>
      <Link to="/">
        All members
      </Link>
      {member.map((e, i) => (
        <div key={i}>
          <h2>Party : {`${e.party}`}</h2>
          <div className="card">
            <img
              src={e.gender === "M" ? male : female}
              alt="Avatar"
              style={{ width: "100%", height: "60vh" }}
            />
            <div className="container">
              <h4>
                <b> {`${e.first_name} ${e.last_name}`} </b>
              </h4>
              <p>{e.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer
  };
};

export default connect(
  mapStateToProps,
  {}
)(Cards);
