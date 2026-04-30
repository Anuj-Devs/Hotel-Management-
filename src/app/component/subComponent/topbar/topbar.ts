import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-topbar',
  imports: [MatIconModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  router = inject(Router)
  logout() {
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
}
