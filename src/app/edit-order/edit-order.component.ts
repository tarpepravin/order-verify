import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../services/order-service/order.service';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { OrderVerifiedMessageComponent } from '../order-verified-message/order-verified-message.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TextTransformPipe } from '../pipe/text-transform.pipe';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [
    OrderVerifiedMessageComponent,
    TextTransformPipe,
    CommonModule, 
    PdfViewerModule, 
    FormsModule,
    NgbTooltipModule
  ],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss'
})
export class EditOrderComponent implements OnInit {

  orderIndex!: number;
  currentClasses: Record<string, boolean> = {};
  pdfSrc = "../../assets/Purchase-Order POS190790.pdf";
  nonEditableFields: string[] = ["execution_date" , "sender" , "email_date" , "subject" , "Invoice_name" , "filetype" , "file_link" , "Page_no"];
  editOrder : any;
  editOrderKeys: string[] = [];
  editOrderMetadata : any = {};
  disableVerify: boolean = false;
  isOrderVerified: boolean = false;
  lowConfidenceTooltip : string = "Low Confidence !!!"

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.orderIndex = +param["index"];
      
      //get exact order after fetching index from path
      this.orderService.fetchOrders().subscribe((orders: any) => {
        this.editOrder = orders[this.orderIndex];
        this.getEditOrderKeys(this.editOrder);
        this.generateEditOrderMetadata();
      })
    });
  }

  getEditOrderKeys(order: any) {
    Object.keys(order).forEach((field : string) => {
      if(!this.nonEditableFields.includes(field) && !field.includes("_confi")) {
        this.editOrderKeys.push(field);
      } 
    });
  }

  generateEditOrderMetadata () {
    this.editOrderKeys.forEach((key : string) => {
      this.editOrderMetadata[key] = { 
        isEditable : false, 
        highlight : +this.editOrder[key + "_confi"] < 0.5 ? true : false, 
      };
    })
  }

  editOrderField(field : string) {
   this.editOrderMetadata[field].isEditable = true;
   this.disableVerify = true;
  }

  closeInput(field: string) {
    this.editOrderMetadata[field].isEditable = false;
    this.disableVerify = false;
  }

  verifyOrder() {
    this.orderService.fetchOrders().subscribe((orders : any) => {
      console.log("Verified - ", orders[this.orderIndex]);
    });
    this.isOrderVerified = true;
  }
}
