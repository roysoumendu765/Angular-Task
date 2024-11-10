import { Component } from '@angular/core';

@Component({
  selector: 'app-interships',
  templateUrl: './interships.component.html',
  styleUrl: './interships.component.scss'
})
export class IntershipsComponent {

  internDetails: any = [
    {
      id: 1,
      "internshipName": "CDAC Virtual Internship on Cybersecurity",
      "internshipCompany": "CDAC, Noida",
      "linkText": "https://drive.google.com/file/d/15x2mJpeOqFIhxfV5xM_nFbAwNz2_re0Q/view",
      "internshipLoc": "Remote",
      "internshipDate": "Jun 2024 – Jul 2024",
      "description": [
        "Gained hands-on experience with 5+ cybersecurity techniques and tools to protect systems from attacks.",
        "Completed a project securing Windows networks, Snort for intrusion detection with 95% accuracy."
      ]
    },
    {
      id: 2,
      "internshipName": "J.P MORGAN CHASE VIRTUAL INTERNSHIP",
      "internshipCompany": "JP Morgan Chase & Forage",
      "linkText": "https://drive.google.com/file/d/1KkuANDeZjI2EutG3Btk-2olQFft0Y2Sx/view",
      "internshipLoc": "Remote",
      "internshipDate": "Jul 2020 – Sep 2020",
      "description": []
    }
  ];
  
}
