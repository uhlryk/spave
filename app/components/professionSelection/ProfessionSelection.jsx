import React from "react";
import style from "./professionSelection.scss";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import { nextProfession, previousProfession } from "./actions"
class ProfessionSelection extends React.Component {

  render() {
    console.log(this.props.professions);


    return (
      <div className="professions">
        <div className="professions__menu">
          <a onClick={() => this.props.dispatch(push("/"))}><i className="fa fa-chevron-left" aria-hidden="true" /> Back</a>
        </div>
        <div className="professions__page-title">Select your past</div>
        <div className="professions__description">It determines your start ship and your relation with different fractions</div>
        <NavigationPrevious className="navigation__previous" {...this.props.professions} onClick={() => this.props.dispatch(previousProfession())}/>
        <NavigationNext className="navigation__next" {...this.props.professions} onClick={() => this.props.dispatch(nextProfession())}/>
        <div className="profession__title">{this.props.professions.professions[this.props.professions.current].title}</div>
      </div>
    );
  }
}

function NavigationPrevious ({ className, professions, current, onClick }) {
  if(current === 0) {
    return false;
  }
  const title = professions[current - 1].title;
  return (
    <div className={className} onClick={onClick}><i className="fa fa-backward" aria-hidden="true"></i> {title}</div>
  );
}

function NavigationNext ({ className, professions, current, onClick }) {
  if(current === professions.length - 1) {
    return false;
  }
  const title = professions[current + 1].title;
  return (
    <div className={className} onClick={onClick}> {title} <i className="fa fa-forward" aria-hidden="true"></i></div>
  );
}

export default connect(state => ({
  professions: state.professions
}))(ProfessionSelection);
