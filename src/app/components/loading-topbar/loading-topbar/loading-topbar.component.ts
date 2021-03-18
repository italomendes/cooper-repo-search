import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { LoadingTopbarService } from "src/app/services/loading-topbar/loading-topbar.service";
import { Subscription } from "rxjs";
import { LoaderState } from "src/app/models/loading";

@Component({
  selector: "loading-topbar",
  templateUrl: "./loading-topbar.component.html",
  styleUrls: ["./loading-topbar.component.css"]
})
export class LoadingTopbarComponent implements OnInit, OnDestroy {

  show: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private loadingService: LoadingTopbarService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.loadingService
      .loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        this.cdRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
