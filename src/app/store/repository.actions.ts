import { Action } from "@ngrx/store";

export enum RepositoryActionTypes {
    REPOSITORIES_BY_USER = "[REPOSITORIES_BY_USER] Get all repositories by user"
}

export class RepositoriesByUser implements Action {
    readonly type = RepositoryActionTypes.REPOSITORIES_BY_USER;
    constructor(public payload: {userName: string}) {}
}

export type RepositoriesActions = RepositoriesByUser;