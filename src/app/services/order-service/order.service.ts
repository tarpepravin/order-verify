import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  orderData: any[] = [
    {
      execution_date: '2023-08-27',
      sender: 'Narender Jammula <jammulanarender09@gmail.com>',
      email_date: '2023-07-24',
      subject: 'PSO',
      Invoice_name: 'Purchase-Order POS175816.pdf',
      filetype: 'application/pdf',
      file_link:
        'https://drive.google.com/drive/folders/1WNGshapl5ZoR5waNA3BeQcWXtIa8QLUi',
      line_item_description: 'Anti Blue Light Privacy Filter - 15.6" W (16:9)',
      line_item_description_confi: '0.895114064',
      line_item_product_code: 'OCUVDU15Z',
      line_item_product_code_confi: '0.4',
      line_item_unit_price: '22.90625',
      line_item_unit_price_confi: '0.998888135',
      line_item_amount: '229.125',
      line_item_amount_confi: '0.987523556',
      line_item_quantity: '10',
      line_item_quantity_confi: '1',
      Page_no: '1',
      currency: '£',
      currency_confi: '0.996489644',
      purchase_order_date: '27/03/2023',
      purchase_order_date_confi: '0.998672366',
      purchase_order_id: 'POS175816',
      purchase_order_id_confi: '0.714580953',
      ship_to_address:
        'Door 14 (060) -Posturite Goods In TVS SCS Rico 215 Park Lane Minworth B35 6LJ',
      ship_to_address_confi: '0.999834418',
      ship_to_name: 'Posturite Limited',
      ship_to_name_confi: '0.988132775',
      total_amount: '229.1',
      total_amount_confi: '0.980506957',
    },
    {
      execution_date: '2023-08-27',
      sender: 'Narender Jammula <jammulanarender09@gmail.com>',
      email_date: '2023-07-25',
      subject: 'PSO1',
      Invoice_name: 'Purchase-Order POS175818.pdf',
      filetype: 'application/pdf',
      file_link:
        'https://drive.google.com/drive/folders/1WNGshapl5ZoR5waNA3BeQcWXtIa8QLUi',
      line_item_description: 'Anti Blue Light Privacy Filter - 17" W (16:10)',
      line_item_description_confi: '0.88766104',
      line_item_product_code: 'OCUVDU17WZ',
      line_item_product_code_confi: '0.990892232',
      line_item_unit_price: '25.90625',
      line_item_unit_price_confi: '0.99907577',
      line_item_amount: '129.5',
      line_item_amount_confi: '0.986963868',
      line_item_quantity: '5',
      line_item_quantity_confi: '1',
      Page_no: '1',
      currency: '£',
      currency_confi: '0.996957302',
      purchase_order_date: '27/03/2023',
      purchase_order_date_confi: '0.998388529',
      purchase_order_id: 'POS175818',
      purchase_order_id_confi: '0.513413131',
      ship_to_address:
        'Door 14 (060) -Posturite Goods In TVS SCS Rico 215 Park Lane Minworth B35 6LJ',
      ship_to_address_confi: '0.999799669',
      ship_to_name: 'Posturite Limited',
      ship_to_name_confi: '0.988162339',
      total_amount: '129.5',
      total_amount_confi: '0.980786204',
    },
    {
      execution_date: '2023-08-27',
      sender: 'Narender Jammula <jammulanarender09@gmail.com>',
      email_date: '2023-07-25',
      subject: 'PSO2',
      Invoice_name: 'Purchase-Order POS175820.pdf',
      filetype: 'application/pdf',
      file_link:
        'https://drive.google.com/drive/folders/1WNGshapl5ZoR5waNA3BeQcWXtIa8QLUi',
      line_item_description: 'Anti Blue Light Privacy Filter - 19" (5:4)',
      line_item_description_confi: '0.892645717',
      line_item_product_code: 'OCUVDU19Z',
      line_item_product_code_confi: '0.991015434',
      line_item_unit_price: '29.5',
      line_item_unit_price_confi: '0.999034464',
      line_item_amount: '147.5',
      line_item_amount_confi: '0.987049818',
      line_item_quantity: '5',
      line_item_quantity_confi: '1',
      Page_no: '1',
      currency: '£',
      currency_confi: '0.996976554',
      purchase_order_date: '27/03/2023',
      purchase_order_date_confi: '0.998700559',
      purchase_order_id: 'POS175820',
      purchase_order_id_confi: '0.69395107',
      ship_to_address:
        'Door 14 (060) -Posturite Goods In TVS SCS Rico 215 Park Lane Minworth B35 6LJ',
      ship_to_address_confi: '0.999836505',
      ship_to_name: 'Posturite Limited',
      ship_to_name_confi: '0.988110662',
      total_amount: '147.5',
      total_amount_confi: '0.980758548',
    },
    {
      execution_date: '2023-08-27',
      sender: 'Narender Jammula <jammulanarender09@gmail.com>',
      email_date: '2023-07-24',
      subject: 'PSO',
      Invoice_name: 'Purchase-Order POS175816.pdf',
      filetype: 'application/pdf',
      file_link:
        'https://drive.google.com/drive/folders/1WNGshapl5ZoR5waNA3BeQcWXtIa8QLUi',
      line_item_description: 'Anti Blue Light Privacy Filter - 15.6" W (16:9)',
      line_item_description_confi: '0.895114064',
      line_item_product_code: 'OCUVDU15Z',
      line_item_product_code_confi: '0.990867734',
      line_item_unit_price: '22.90625',
      line_item_unit_price_confi: '0.998888135',
      line_item_amount: '229.125',
      line_item_amount_confi: '0.987523556',
      line_item_quantity: '10',
      line_item_quantity_confi: '1',
      Page_no: '1',
      currency: '£',
      currency_confi: '0.996489644',
      purchase_order_date: '27/03/2023',
      purchase_order_date_confi: '0.998672366',
      purchase_order_id: 'POS175816',
      purchase_order_id_confi: '0.714580953',
      ship_to_address:
        'Door 14 (060) -Posturite Goods In TVS SCS Rico 215 Park Lane Minworth B35 6LJ',
      ship_to_address_confi: '0.999834418',
      ship_to_name: 'Posturite Limited',
      ship_to_name_confi: '0.988132775',
      total_amount: '229.1',
      total_amount_confi: '0.980506957',
    },
  ];

  url : string = "https://script.google.com/macros/s/AKfycbyo42sISgdnnvAW-qukLkQ4wOoA0qHjCLdGfspb3E1LlEtaCCNbWoMBdL4BL_T7M7BqSA/exec";

  fetchOrders() {
    this.http.get(this.url).subscribe((data : any) => {
      console.log("Pravin - data from backend ", data);
    });
    return of(this.orderData);

  }

  fetchOrderById(id: number) {
    return of(this.orderData[id]);
  }
}
