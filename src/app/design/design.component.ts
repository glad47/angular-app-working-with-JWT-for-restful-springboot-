
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  model={
    name:'',
    ingredients: Array<{id: string, type: string,name:String}>()
  }
  allIngredients:any;
  wraps=Array<{id: string, type: string,name:String}>();
  proteins=Array<{id: string, type: string,name:String}>();
  veggies=Array<{id: string, type: string,name:String}>();
  cheeses=Array<{id: string, type: string,name:String}>();
  sauces=Array<{id: string, type: string,name:String}>();


  constructor(private http:HttpClient,private router:Router,private cart:CartServiceService) { }

  ngOnInit(): void {
    const url="http://localhost:8080/ingredients";
    this.http.get(url).subscribe(data =>{
      console.log(data);
       this.allIngredients=data;
       this.wraps=this.allIngredients.filter( (w: any ) => w.type === 'WRAP');
       this.proteins=this.allIngredients.filter((p:any) => p.type === 'PROTEIN');
       this.veggies=this.allIngredients.filter( (v:any) =>v.type === 'VEGGIES');
       this.cheeses=this.allIngredients.filter( (c:any)  => c.type === 'CHEESE');
       this.sauces=this.allIngredients.filter( (s:any) => s.type === 'SAUCE');
    });
  }

  updateIngredients(ingredient:any ,event:any){
    if(event.target.checked){
      this.model.ingredients.push(ingredient);
    }else{
      this.model.ingredients.splice(this.model
        .ingredients.findIndex((i:any)=> i === ingredient),1);
    }


  }

  onSubmit(){
    const url="http://localhost:8080/design1";
    this.http.post(url,this.model,{headers:new HttpHeaders()
    .set('Content-type','application/json')}).subscribe(
      (taco:any) =>{ 
        console.log(taco);
        this.cart.addToCart(taco);
      }
    );
    // this.router.navigate(['/cart']);
  }

}
