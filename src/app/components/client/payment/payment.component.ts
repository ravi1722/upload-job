import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  is_edit : boolean = true;
  constructor(private router: Router,private http: HttpClient,
    private apiService: SqlDbserviceService,) { }
  width: number = 40;
  amount:number;
  whole_id: String;
  handler:any = null;
  ngOnInit(): void {
    this.whole_id = window.localStorage.getItem('whole_id');
    if(this.whole_id){
      this.loadStripe();
    }
  }

  pay() { 
    alert('Please wait for 5 Seconds');
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: (token: any) => {
        var add_job = {'user_id': token.id,'user_email': token.email,'user_ip': token.client_ip,'card_id': token.card.id,'created_at': token.created,'whole_id': this.whole_id };
        var add = JSON.stringify(add_job);

        this.apiService.payment(add).subscribe(i => {
          alert('Payment Successed!!');
          this.is_edit = false;
        })
      }
    });

    handler.open({
      name: 'Pay using Debit Card',
      description: '2 widgets',
      amount: 1000
    });
    
  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

next(){
  this.router.navigate(['/addfile']);
}

logout(){
  this.router.navigate(['/login']);
}

}