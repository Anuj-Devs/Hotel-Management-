import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  imports: [],
  templateUrl: './confirm-popup.html',
  styleUrl: './confirm-popup.css',
})
export class ConfirmPopup {
   @Output() popupValue = new EventEmitter<any>();

   deleteThisTable(val: boolean) {
      this.popupValue.emit(val);
   }
}
