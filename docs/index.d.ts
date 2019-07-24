import TypeStart from "./typestart";
import { Settings } from "./interfaces";
import "./styles/index.scss";
export default class Feeedback extends TypeStart {
    container?: HTMLDivElement;
    settings: Settings;
    constructor(settings: Settings);
    create(): void;
    open(): void;
    close(): void;
    reset(): void;
    private submit;
    private trapFocus;
    private listen;
    private formSubmit;
}
