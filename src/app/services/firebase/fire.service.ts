import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Type } from '../type';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  allProductsRef: AngularFireList<any>;
  selectType: Type = new Type(); 

  constructor(private db: AngularFireDatabase) { }

  

  getData(){
    return this.db.list('messages');
  }

  
  addproduct(product: Type){
    this.db.list('products').push({
      productname: product.productname,
      productcategory: product.productcategory,
      productrate: product.productrate,
      productquantity: product.productquantity
    })
  }

  delete(id){
    this.db.list('messages/'+id).remove();
  }

}
