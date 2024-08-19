import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-thankyoucomp',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,CommonModule],
  templateUrl: './thankyoucomp.component.html',
  styleUrl: './thankyoucomp.component.css'
})
export class ThankyoucompComponent {
  constructor() {

  }



  
}

