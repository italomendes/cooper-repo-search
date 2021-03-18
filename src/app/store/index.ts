import { ActionReducerMap } from "@ngrx/store";
import { Repository } from "../models/repository.model";
import * as fromRepositoryReducer from "./repository.reducer";

export interface AppState {
    repositories: Repository[];
}

export const appReducers : ActionReducerMap<AppState, any> = {
    repositories: fromRepositoryReducer.reducer
}