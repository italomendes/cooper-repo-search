import { Repository } from "../models/repository.model";

export interface AppState {
    repositories: Repository[];
}