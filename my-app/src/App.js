import React, { Component } from "react";
import wrapper from "./components/wrapper";
import card from "./components/card";
import score from "./components/score";
import superheroes from "./cards.json";
import "./app.css";

class App extends Component {
    // Setting this.state.pups to the cards json array
    state = {
        superheroes,
        SuperherosClickIds: [],
        score: 0,
        goal: 8,
        status: ""
    };

    //shuffle the pup cards in the browser when clicked
    shuffleScoreCard = id => {
        let SuperherosClickIds = this.state.SuperherosClickIds;

        if (SuperherosClickIds.includes(id)) {
            this.setState({ SuperherosClickIds: [], score: 0, status: "Game Over! You lost. Click to play again!" });
            return;
        } else {
            SuperherosClickIds.push(id)

            if (SuperherosClickIds.length === 8) {
                this.setState({ score: 8, status: "You Won! Click to play again!", SuperherosClickIds: [] });
                console.log('You Win!');
                return;
            }

            this.setState({ superheroes, SuperherosClickIds score: SuperherosClickIds.length, status: " " });

            for (let i = superheroes.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [superheroes[i], superheroes[j]] = [superheroes[j], superheroes[i]];
            }
        }
    }

    // Map over this.state.cards and render a Card component for each card object
    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            h1 className = "App-title" > Clicky game < /h1> <
            p className = "App-intro" >
            Try not to click the same image twice!
            <
            /p> < /
            header > <
            Score total = { this.state.score }
            goal = { 8 }
            status = { this.state.status }
            /> <
            Wrapper > {
                this.state.superheroes.map(superhero => ( <
                    Card shuffleScoreCard = { this.shuffleScoreCard }
                    id = { superhero.id }
                    key = { superhero.id }
                    image = { superhero.image }
                    />
                ))
            } <
            /Wrapper> <

        }
    }
    export default App;