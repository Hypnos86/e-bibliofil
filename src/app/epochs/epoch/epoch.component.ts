import { TitleDisplayComponent } from "./../../reused-components/title-display/title-display.component";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WolneLekturyService } from "../../services/wolne-lektury.service";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../home/header/header.component";
import { ItemBackBtnComponent } from "../../reused-components/item-back-btn/item-back-btn.component";

@Component({
  selector: "app-epoch",
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleDisplayComponent, ItemBackBtnComponent],
  templateUrl: "./epoch.component.html",
  styleUrl: "./epoch.component.scss",
})
export class EpochComponent {
  epoch: any;
  backBtn: string = "epochs";
  constructor(
    private route: ActivatedRoute,
    private service: WolneLekturyService
  ) {}

  ngOnInit(): void {
    const epochSlug = this.route.snapshot.paramMap.get("slug");
    if (epochSlug) {
      this.service.getEpochDetails(epochSlug).subscribe((data: any) => {
        this.epoch = data;
      });
    }
  }
}
