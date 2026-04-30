import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { TableStatus } from '../model/tableCount ';

@Injectable({
  providedIn: 'root',
})
export class GetTableData {
  http = inject(HttpClient);

  tableCountSignal = signal<any[]>([]);

  getTableDataFromJSON() {
    return this.http.get<any[]>('assets/dummyData/tableInfo.json');
  }

  staticUserLogin: any = [
    {
      username: 'dev',
      password: '123',
    },
    {
      username: 'mike',
      password: 'test',
    },
  ];

  tableStatusArray: TableStatus[] = [
    {
      statusId: 1,
      title: 'Available',
      color: 'bg-(--success)',
    },
    {
      statusId: 2,
      title: 'Occupied',
      color: 'bg-(--red)',
    },
    {
      statusId: 3,
      title: 'Reserved',
      color: 'bg-(--warning)',
    },
  ];

  updateTableCount() {
    const tableData = JSON.parse(localStorage.getItem('tableData') || '[]');

    const total = tableData.length;
    const available = tableData.filter((t: any) => t.status == 1).length;
    const occupied = tableData.filter((t: any) => t.status == 2).length;
    const reserved = tableData.filter((t: any) => t.status == 3).length;

    const tableCount = [
      {
        title: 'Total Table',
        count: total,
        icon: 'table_chart',
        statusId: null,
      },
      {
        title: 'Available Table',
        count: available,
        icon: 'check_circle',
        statusId: 1,
      },
      {
        title: 'Occupied Table',
        count: occupied,
        icon: 'block',
        statusId: 2,
      },
      {
        title: 'Reserved Table',
        count: reserved,
        icon: 'event_seat',
        statusId: 3,
      },
    ];

    localStorage.setItem('tableCount', JSON.stringify(tableCount));

     this.tableCountSignal.set(tableCount);
  }
}
