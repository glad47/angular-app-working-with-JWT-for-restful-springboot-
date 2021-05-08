import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:String="";
  login={
    username:"Glad",
    password:"1234"
  }
  register={
    username:"",
    password:"",
    confirm:"",
    fullName:"",
    street:"",
    city:"",
    state:"",
    zip:"",
    phone:""
  }
  constructor(private http:HttpClient,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const url="http://localhost:8080/register";
    this.http.post(url,this.register,{headers :new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Accept','application/json'),}).subscribe((out) => {console.log(out);})
  }


  
  onLogin(){
    this.authService.login(this.login).subscribe((out) => {console.log(out);})
    // const url="http://localhost:8080/authenticate";
    // this.http.post(url,this.login,{headers :new HttpHeaders()
    //   .set('Content-Type','application/json')
    //   .set('Accept','application/json')}).subscribe((out) => {console.log(out);})
   
  }

}
