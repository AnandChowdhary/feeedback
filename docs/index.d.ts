import TypeStart from "./typestart";
import { Settings } from "./interfaces";
import "./styles/index.scss";
export default class Feeedback extends TypeStart {
    container?: HTMLDivElement;
    settings: Settings;
    constructor(settings: Settings);
    create(): void;
    open(): void;
}
