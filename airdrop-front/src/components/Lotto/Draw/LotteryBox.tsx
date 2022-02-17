import React from "react";
import LotteryItem from "./LotteryItem";
import "./index.css";
import {
  ref,child,set
} from "@firebase/database"
import {dbService} from "../firebase"
const numbers = [...Array(10).keys()];

export default class LotteryBox extends React.Component<
    LotteryBoxProps,
    LotteryBoxState
> {
    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = {
            number: [0, 0, 0, 0],
            effect: false,
        };
    }

    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            const arr = [];
            for (let i = 0; i <= 3; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false });
            }, 80000);
        }
    };
    
    render() {
      if(this.state.number.includes(0)===false){
        const DrawDay=new Date(2022,2,19)
        const StringDate=DrawDay.toDateString()
        //console.log(this.state.number)
        set(ref(dbService,'drawnumber/'+StringDate),{
          numbers: this.state.number
        })
      }
    
        return (
            <>
            
                <div id="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="red"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="grey"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="bonus"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    
                </div>
                <div>
                    <button
                        id="btn"
                        className={this.state.effect ? "hide" : ""}
                        onClick={this.randomize}
                    >
                      Draw
                    </button>
                </div>
            </>
        );
    }
}
