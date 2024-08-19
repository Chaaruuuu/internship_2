import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 1000)

  }
}
