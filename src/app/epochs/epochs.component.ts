import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./../home/header/header.component";
import { Component } from "@angular/core";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { menuItems } from "../shared/data/menu-items";
import { WolneLekturyService } from "../services/wolne-lektury.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-epochs",
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleDisplayComponent],
  templateUrl: "./epochs.component.html",
  styleUrl: "./epochs.component.scss",
})
export class EpochsComponent {
  constructor(private service: WolneLekturyService, private router: Router) {}

  componentTitle: string = menuItems[2].title;
  epochs: any[] = [];

  ngOnInit(): void {
    this.service.getAllEpochs().subscribe((data: any) => {
      this.epochs = data;
    });
  }

  showEpochDetails(epochSlug: string): void {
    this.router.navigate(["/epoch", epochSlug]);
  }
}
