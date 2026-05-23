import { IBuyer } from "../../../types";
import { TFormErrors } from "../../../types";

export class Buyer {
  protected payment: IBuyer["payment"] | null = null;
  protected email = "";
  protected phone = "";
  protected address = "";

  setData(data: Partial<IBuyer>): void {
    Object.assign(this, data);
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  clear(): void {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  validate(): TFormErrors {
    const errors: TFormErrors = {};

    if (!this.payment) {
      errors.payment = "Не выбран способ оплаты";
    }

    if (!this.email.trim()) {
      errors.email = "Укажите email";
    }

    if (!this.phone.trim()) {
      errors.phone = "Укажите телефон";
    }

    if (!this.address.trim()) {
      errors.address = "Укажите адрес";
    }

    return errors;
  }
}