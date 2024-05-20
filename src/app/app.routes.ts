import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Component } from "@angular/core";
import { BooksComponent } from "./books/books.component";
import { AuthorsComponent } from "./authors/authors.component";
import { ThemesComponent } from "./themes/themes.component";
import { EpochsComponent } from "./epochs/epochs.component";
import { GenresComponent } from "./genres/genres.component";
import { KindsComponent } from "./kinds/kinds.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent,  },
  { path: "books", component: BooksComponent },
  { path: "authors", component: AuthorsComponent },
  { path: "literary-themes", component: ThemesComponent },
  { path: "epochs", component: EpochsComponent },
  { path: "literary-genres", component: GenresComponent },
  { path: "literary-kinds", component: KindsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
