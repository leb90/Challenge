import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Footer from "./components/footer/footer";
import { connect } from "react-redux";
import { membersGet } from "./actions/actions";
import Cards from "./components/cards/cards";

function App(props) {
  useEffect(() => {
    props.membersGet();
  }, []);

  return (
    <Router>
      <Header dataReducer={props.dataReducer} />

      <Route path="/" exact component={Table} />
      <Route path="/members/" component={Cards} />

      <Footer />
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer
  };
};

export default connect(
  mapStateToProps,
  { membersGet }
)(App);
