import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Repository } from 'src/app/models/repository.model';
import { LoadingTopbarService } from 'src/app/services/loading-topbar/loading-topbar.service';
import { RepositoryService } from 'src/app/services/repository/repository.service';
import { AppState } from 'src/app/store';
import { RepositoriesByUser } from 'src/app/store/repository.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories$: Observable<Repository[]> | undefined;
  userName: string = "";
  pageIsPristine: boolean = true;

  constructor(private store: Store<AppState>,
              private repositoryService: RepositoryService,
              private loadingTopbarService: LoadingTopbarService) {
  }

  ngOnInit(): void {
    this.repositories$ = this.store.pipe(select("repositories"));
  }

  getRepositoriesByUser(userName: string) {
    this.loadingTopbarService.show();
    this.repositoryService.getRepositoriesByUser(userName).subscribe(repositories => {
      this.store.dispatch(new RepositoriesByUser({repositories: repositories}));
      this.loadingTopbarService.hide();
    })
    this.pageIsPristine = false;
  }
}
