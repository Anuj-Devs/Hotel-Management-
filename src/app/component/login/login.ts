import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setTableCount } from '../../store/count/count.action';
import { GetTableData } from '../../service/get-table-data';
@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router)
  username = '';
  password = '';
  showPassword = false;
  isLoading = signal(false)
  store = inject(Store)

  errors: ErrorModel = new ErrorModel();


 async handleLogin() {

    this.errors = new ErrorModel();
    this.isLoading.set(true)

    let shouldStop = false;

    try {

      if (!this.username.trim()) {
        this.errors.username = 'Username is required';
        shouldStop = true;
      }

      if (!this.password.trim()) {
        this.errors.password = 'Password is required';
        shouldStop = true;
      }

      if (shouldStop) return;

      // const response = await fetch('assets/dummyData/adminAuth.json');

      // if (!response.ok) {
      //   throw new Error('JSON file not found in assets');
      // }
      // const users = await response.json();
      
      

      const matchUser = this.serviceData.staticUserLogin.find((u: any) => u.username.toLowerCase().trim() === this.username.toLowerCase().trim());

      if (!matchUser) {
        this.errors.general = "Username is not found";
        return;
      }

      if (matchUser.password !== this.password) {
        this.errors.general = "Password is not match";
        return;
      }

      localStorage.setItem('loginUser', JSON.stringify({
        username: this.username
      }));


      this.router.navigateByUrl("/dashboard");

    } catch (error) {
      console.log("Catch Err->", error);
      this.errors.general = 'Something went wrong while logging in';

    } finally {
      this.isLoading.set(false)
    }
  }

  constructor(private serviceData:GetTableData) {}

  // async getTableCout() {
  //   const tableData = [
  //     {
  //       title: "Total Table",
  //       count: 16,
  //       icon: "table_chart"
  //     },
  //     {
  //       title: "Available Table",
  //       count: 7,
  //       icon: "check_circle"
  //     },
  //     {
  //       title: "Occupied Table",
  //       count: 5,
  //       icon: "block"
  //     },
  //     {
  //       title: "Reserved Table",
  //       count: 4,
  //       icon: "event_seat"
  //     }
  //   ];
  //   this.store.dispatch(setTableCount({ data: tableData}))
  // }
}


class ErrorModel {
  username: string = '';
  password: string = '';
  general: string = '';
}
