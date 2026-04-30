import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Snackbar {

  constructor(private snackBar: MatSnackBar) {}

  show(message: string, action: string = 'OK') {
    this.snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }

  
}