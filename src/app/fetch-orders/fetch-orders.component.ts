import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../services/order-service/order.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fetch-orders',
  standalone: true,
  imports: [
    AgGridAngular,
    CommonModule,
    NgbTooltipModule,
    HttpClientModule
  ],
  providers: [OrderService],
  templateUrl: './fetch-orders.component.html',
  styleUrl: './fetch-orders.component.scss'
})
export class FetchOrdersComponent {

  themeClass = "ag-theme-quartz";
  ordersFetched: boolean = false;
  rowSelection: 'single' | 'multiple' = 'multiple';
  tooltipText: string = "Click on the row to see orders in detail";

  columnFields : string[] = ["line_item_product_code", "line_item_description", "line_item_quantity", "line_item_unit_price", "currency", "line_item_amount"];

  rowData: any[] = [];
  colDefs: ColDef<any>[] = [];
  orderIndex: number = 2;

  constructor(private orderService: OrderService,
              private router: Router) { }

  fetchOrders() {
    this.orderService.fetchOrders().subscribe((orderData: any) => {
      this.columnFields.forEach((columnField: string) => {
        this.colDefs.push({ field: this.createCoulmnHeading(columnField)});
      });
      orderData.forEach((order: any) => {
        let orderRow : any = {};
        this.columnFields.forEach((columnField: any) => {
          orderRow[this.createCoulmnHeading(columnField)] = order[columnField];
        })
        this.rowData.push(orderRow);
      });

      this.ordersFetched = true;
    });
  }

  createCoulmnHeading(columnField : string) {
    let heading : string = "";
    columnField.split("_").forEach((value: string) => {
      heading = heading + value + " ";
    });
    return heading.trim();
  }

  onSelectionChanged( event : any) {
    console.log('clicked on row - ', event.rowIndex);
    this.router.navigate(['/edit-order', +event.rowIndex])
  }

}
