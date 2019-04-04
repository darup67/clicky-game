import React, { Component } from "react";
import wrapper from "./components/wrapper";
import card from "./components/card";
import score from "./components/score";
import superheroes from "./cards.json";
import "./App.css";

class App extends Component {
    // Setting this.state.pups to the cards json array
    state = {
        superheroes,
        clickedPuppyIds: [],
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
            clickedPuppyIds.push(id)

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
            h1 className = "App-title" > The Clickster < /h1> <
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
                this.state.pups.map(puppy => ( <
                    Card shuffleScoreCard = { this.shuffleScoreCard }
                    id = { puppy.id }
                    key = { puppy.id }
                    image = { puppy.image }
                    />
                ))
            } <
            /Wrapper> <
            footer >
            <
            p > Designed and built by Heather Mathies.You can find the code < a href = "https://github.com/hmathies/Clicky-Game"
            target = "_blank"
            rel = "noopener noreferrer" > here < /a>.</p >
            <
            /footer> < /
            div >
        );
    }
}

export default App;