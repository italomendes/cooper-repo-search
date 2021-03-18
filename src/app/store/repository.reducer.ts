import { state } from "@angular/animations";
import * as fromRepositoryActions from "./repository.actions";

export function reducer(action: fromRepositoryActions.RepositoriesActions) {
    switch(action.type) {
        case fromRepositoryActions.RepositoryActionTypes.REPOSITORIES_BY_USER: {
            return state;
        }
        default: {
            return state;
        }
    }
}