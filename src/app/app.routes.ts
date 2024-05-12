import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Component } from "@angular/core";
import { BooksComponent } from "./books/books.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "books", component: BooksComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
