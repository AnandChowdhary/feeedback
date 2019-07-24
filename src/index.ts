import { FeeedbackConstructor } from "./interfaces";
import { random } from "./random";
import "./styles/index.scss";

export default class Feeedback implements FeeedbackConstructor {
  constructor() {
    console.log("I am mounted!");
  }
}

(<any>window).Feeedback = Feeedback;
