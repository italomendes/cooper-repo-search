import { Action } from "@ngrx/store";
import { Repository } from "../models/repository.model";

export enum RepositoryActionTypes {
    REPOSITORIES_BY_USER = "[REPOSITORIES_BY_USER] Get all repositories by user"
}

export class RepositoriesByUser implements Action {
    readonly type = RepositoryActionTypes.REPOSITORIES_BY_USER;
    constructor(public payload: {repositories: Repository[] | string}) {}
}

export type RepositoriesActions = RepositoriesByUser;