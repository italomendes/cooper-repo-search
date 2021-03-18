import { Repository } from "../models/repository.model";
import * as fromRepositoryActions from "./repository.actions";

export const initialState: Repository[] = [];

export function reducer(state = initialState, action: fromRepositoryActions.RepositoriesActions) {
    switch(action.type) {
        case fromRepositoryActions.RepositoryActionTypes.REPOSITORIES_BY_USER: {
            return action.payload.repositories;
        }
        default: {
            return state;
        }
    }
}