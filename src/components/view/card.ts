import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";
import { ICardData } from "../../types";

export abstract class Card<T extends ICardData> extends Component<T> {
    protected priceElement: HTMLElement;
    protected titleElement: HTMLElement;

    protected constructor(container: HTMLElement) {
        super(container);
        this.priceElement = ensureElement<HTMLElement> (
            ".card__price",
            this.container,
        );
        this.titleElement = ensureElement<HTMLElement>(
            ".card__title",
            this.container,
        );
    }

    set price(value: number | null) {
        this.priceElement.textContent = 
        value === null ?  "бесценно" : `${value} синапсов`;
    }

    set title(value: string) {
        this.titleElement.textContent = value;
    }
}