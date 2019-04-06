import React, { Component } from "react";
import wrapper from "./components/wrapper";
import card from "./components/card";
import score from "./components/score";
import superheroes from "./cards.json";
import "./app.css";

class app extends component {
    state = {
        superheroes,
        SuperherosClickIds: [],
        score: 0,
        goal: 9,
        status: ""
    };

    shuffleScoreCard = id => {
        let SuperherosClickIds = this.state.SuperherosClickIds;

        if (SuperherosClickIds.includes(id)) {
            this.setState({ SuperherosClickIds: [], score: 0, status: "Game Over! You lost. Click to play again!" });
            return;
        } else {
            SuperherosClickIds.push(id)

            if (SuperherosClickIds.length === 9) {
                this.setState({ score: 9, status: "You Won! Click to play again!", SuperherosClickIds: [] });
                console.log('You Win!');
                return;
            }

            this.setState({superheroes, SuperherosClickIds score: SuperherosClickIds:length, status: ""});

            for (let i = superheroes.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [superheroes[i], superheroes[j]] = [superheroes[j], superheroes[i]];
            }
        }
    }


    render() {  {
        {{ return ( <div className = "app"></div>
            <header className = "App-header" >
            <h1 className = "App-title"> Clicky game </h1> <p className = "App-intro">
            Remember not to click the same image twice!
            </p> </header> <score total = {this.state.score}
            goal = {9}
            status = {this.state.status}/> <wrapper> {
            this.state.superheroes.map(superhero => ( <
                Card shuffleScoreCard = {this.shuffleScoreCard}
                id = {superhero.id}
                key = {superhero.id}
                image = {superhero.image}/>
            ))
        } </wrapper> <

    }
    }
export default app;