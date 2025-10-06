import { Action } from "@ngrx/store";
import { Pizza } from "../../models/pizza.model";

// ========== load pizzas ==========
// We've defined the three tings that can happen, when we load the pizzas.

// First of, we want to dispatch an action called LOAD_PIZZAS.
export const LOAD_PIZZAS = "[Products] Load Pizzas";
// That's either going to fail ...(if it fails, we dispatch the action LOAD_PIZZAS_FAIL)
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
// ... or it's going to succeed (when it's successful, we dispatch the action LOAD_PIZZAS_SUCCESS).
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

// So we're communicating here via events. And these events describe the steps what's happening in our application.
// And we can then respond to them accordingly.

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {
        //
    }
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {
        //
    }
}

// ========== action types ==========
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
