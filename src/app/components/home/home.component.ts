import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Repository } from 'src/app/models/repository.model';
import { RepositoryService } from 'src/app/services/repository.service';
import { AppState } from 'src/app/store';
import { RepositoriesByUser } from 'src/app/store/repository.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories$: Observable<Repository[]> = of();
  userName: string = "";

  constructor(private store: Store<AppState>, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositories$ = this.store.pipe(select("repositories"));
  }

  getRepositoriesByUser(userName: string) {
    this.repositoryService.getRepositoriesByUser(userName).subscribe(repositories => {
      this.store.dispatch(new RepositoriesByUser({repositories: repositories}));
    })
  }
}
