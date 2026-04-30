import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../subComponent/sidebar/sidebar';
import { Topbar } from '../subComponent/topbar/topbar';
import { HttpClient } from '@angular/common/http';
import { GetTableData } from '../../service/get-table-data';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, Topbar, MatSnackBarModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  http = inject(HttpClient);
   tableCount: object[] = [
      {
        title: "Total Table",
        count: 16,
        icon: "table_chart"
      },
      {
        title: "Available Table",
        count: 7,
        icon: "check_circle"
      },
      {
        title: "Occupied Table",
        count: 5,
        icon: "block"
      },
      {
        title: "Reserved Table",
        count: 4,
        icon: "event_seat"
      }
    ];

    constructor(private service:GetTableData) {
      localStorage.setItem("tableCount", JSON.stringify(this.tableCount))
      const existingData = localStorage.getItem('tableData');

      if (!existingData) {
        this.service.getTableDataFromJSON().subscribe((res: any) => {
          if (res) {
            localStorage.setItem("tableData", JSON.stringify(res));
          }
        }, error => {
          console.error('Failed to fetch data', error);
        })
      }
    }
    
    
}
