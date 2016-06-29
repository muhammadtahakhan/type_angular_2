import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {Data} from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
    private items = [];
  constructor(private _navController: NavController, private dataService: Data) {
      
     this.dataService.getData().then((todos) => {
 
        if(todos){
            this.items = JSON.parse(todos); 
        }
 
    });
      
  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
  
  
   addItem(){
 
    let addModal = Modal.create(AddItemPage);
 
    addModal.onDismiss((item) => {
 
      if(item){
        this.saveItem(item);
      }
 
    });
 
    this._navController.present(addModal);
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
 viewItem(item){
    this._navController.push(ItemDetailPage, {
      item: item
    });
  }
  
}
