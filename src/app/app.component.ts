import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form;
  
  constructor(private formBuilder: FormBuilder) {}

  resultado = 0;
  ngOnInit(): void {    
    this.form = this.formBuilder.group({
      altura:[],
      peso: []
     })
  }

  calcular(){
    let peso = this.form.get('peso').value;    
    let altura = this.form.get('altura').value / 100;

    this.resultado =  peso / (altura * altura)
  }
}
