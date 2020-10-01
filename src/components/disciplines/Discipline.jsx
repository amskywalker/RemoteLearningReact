import React, { Component } from "react";
import "./Discipline.css";

import api from "../../services/api";

import Main from "../template/Main";
import Card from "../Card";

const headerProps = {
  title: "Disciplinas"
}

export default class Discipline extends Component {
  state = {
    disciplines: [],
  };

  componentDidMount() {
    this.loadDisciplines();
  }

  loadDisciplines = async () => {
    const response = await api.get("api/discipline");
    console.log(response.data.disciplines);
    this.setState({ disciplines: response.data.disciplines });
  };

  render() {
    return (
      <Main {...headerProps}>
        <div className="disciplines">
          {this.state.disciplines.map((discipline) => (
            <Card
              key={discipline.id}
              id={discipline.id}
              name={discipline.name}
              teacher={discipline.teacher}
            />
          ))}
        </div>
      </Main>
    );
  }
}