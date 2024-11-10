import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectDetails: any = [
    {
      id: 1,
      "projectName": "Temple Ticketing System",
      "projectCompany": "IIT-BHU-Codefest-2024",
      "linkText": "https://github.com/roysoumendu765/iitbhu_codefest_2024_haxplore",
      "projectDate": "Mar 2024 – Apr 2024",
      "projectDescription": "Ticketing system using MERN stack, tested for over 100 users and generated over 1000 tickets in real-time."
    },
    {
      id : 2,
      "projectName": "FeedBack Management System",
      "projectCompany": "",
      "linkText": "https://github.com/roysoumendu765/BlockChain_Project",
      "projectDate": "May 2024 – Jul 2024",
      "projectDescription": "Feedback system using React.js, web3.js and Solidity, collecting 200+ feedback records and 100+ users."
    }
  ];
  
}
