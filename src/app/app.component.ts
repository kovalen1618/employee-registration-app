import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  stepList: any[] = [
    { stepName: 'Basic Details', isComplete: false },
    { stepName: 'Skills', isComplete: false },
    { stepName: 'Experience', isComplete: false },
  ]
}
