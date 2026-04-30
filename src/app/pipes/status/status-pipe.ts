import { Pipe, PipeTransform } from '@angular/core';
import { GetTableData } from '../../service/get-table-data';

@Pipe({
  name: 'StatusPipe',
})
export class StatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
     if (value !== '' && value !== null && value !== undefined) {
          for (let index = 0; index < this.serviceData.tableStatusArray.length; index++) {
            const element = this.serviceData.tableStatusArray[index];
            if (element.statusId == value) {
              return element.title
            }
          }
        } else {
          return "--"
        }
        return null;
      }
    
      constructor(private serviceData:GetTableData) {
    
      }
}
