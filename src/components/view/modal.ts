import { Component } from "../base/Component";
import { IModalData } from "../../types/index";
import { ensureElement } from "../../utils/utils";
import { IEvents } from "../base/Events";

export class Modal extends Component<IModulData> {
    protected contentElement: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(
        protected events: IEvents,
        container: HTMLElement
    ) {
        super(container);

        this.contentElement = ensureElement<HTMLElement>(
            ".modal__content",
            this.container
        );

        this.closeButton = ensureElement<HTMLButtonElement>(
            ".modal__button",
            this.container
        );

        this.closeButton = addEventListener("click",() => {
            this.events.emit("modal: close");
        })

        this.closeButton = addEventListener("click", (event) => {
            if (event.target === this.container) {
                this.events.emit("modal: close");
            }
        });
    }

    set content(value: HTMLElement) {
        this.contentElement.replaceChildren(value);
    }
    open(): void {
        this.container.classList.add("modal_active");
    }

    close(): void {
        this.container.classList.remove("modal_active");
        this.contentElement.replaceChildren();
    }
}