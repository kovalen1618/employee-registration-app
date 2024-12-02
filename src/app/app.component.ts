import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  stepList: any[] = [
    { stepName: 'Basic Details', isComplete: false },
    { stepName: 'Skills', isComplete: false },
    { stepName: 'Experience', isComplete: false },
  ];

  // Initalize first step to activeStep
  activeStep: any = this.stepList[0];

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }

  employeeObj: any = {
    "roleId": 0,
    "userName": "",
    "empCode": "",
    "empId": 0,
    "empName": "",
    "empEmailId": "",
    "empDesignationId": 0,
    "empContactNo": "",
    "empAltContactNo": "",
    "empPersonalEmailId": "",
    "empExpTotalYear": 0,
    "empExpTotalMonth": 0,
    "empCity": "",
    "empState": "",
    "empPinCode": "",
    "empAddress": "",
    "empPerCity": "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password": "",
    erpEmployeeSkills: [],
    ermEmpExperiences: []
  }

  empSkillObj: any = {
    "empSkillId": 0,
    "empId": 0,
    "skill": "",
    "totalYearExp": 0,
    "lastVersionUsed": ""
  }

  empExpObj: any = {
    "empExpId": 0,
    "empId": 0,
    "companyName": "",
    "startDate": "2024-12-02T22:47:31.480Z",
    "endDate": "2024-12-02T22:47:31.480Z",
    "designation": "",
    "projectsWorkedOn": ""
  }
}
