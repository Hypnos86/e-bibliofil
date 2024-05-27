import { EpochComponent } from "./epochs/epoch/epoch.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Component, NgModule } from "@angular/core";
import { BooksComponent } from "./collections/books/books.component";
import { AuthorsComponent } from "./authors/authors.component";
import { ThemesComponent } from "./themes/themes.component";
import { EpochsComponent } from "./epochs/epochs.component";
import { GenresComponent } from "./genres/genres.component";
import { KindsComponent } from "./kinds/kinds.component";
import { AuthorComponent } from "./authors/author/author.component";
import { CollectionsComponent } from "./collections/collections.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "collections", component: CollectionsComponent },
  { path: "collection/:href", component: BooksComponent },
  { path: "authors", component: AuthorsComponent },
  { path: "author/:slug", component: AuthorComponent },
  { path: "literary-themes", component: ThemesComponent },
  { path: "epochs", component: EpochsComponent },
  { path: "epoch/:slug", component: EpochComponent },
  { path: "literary-genres", component: GenresComponent },
  { path: "literary-kinds", component: KindsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
