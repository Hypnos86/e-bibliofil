import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WolneLekturyService } from "../../services/wolne-lektury.service";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../home/header/header.component";
import { TitleDisplayComponent } from "../../reused-components/title-display/title-display.component";
import { ItemBackBtnComponent } from "../../reused-components/item-back-btn/item-back-btn.component";

@Component({
  selector: "app-author",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TitleDisplayComponent,
    ItemBackBtnComponent,
  ],
  templateUrl: "./author.component.html",
  styleUrl: "./author.component.scss",
})
export class AuthorComponent {
  author: any;
  backBtn: string = "authors";
  constructor(
    private route: ActivatedRoute,
    private service: WolneLekturyService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.service.getAuthor(slug).subscribe((data) => {
        this.author = data;
      });
    }
  }
}
