import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationDetails : any = [
    {
      id: 1,
      "College": "Banaras Hindu University",
      "Course": "Masters in Computer Applications",
      "Marks": "8.58",
      "Dates": "Oct 2023 – Jul 2025 (expected)",
      "Place": "Varanasi, India",
      "Curriculum": [
        "DSA",
        "OOPs in Java",
        "Software Eng." , 
        "Networking",
        "DBMS" ,
        "AI",
        "ML",
        "Blockchain Tech."
      ]
    },
    {
      id: 2,
      "College": "Kolhan University",
      "Course": "Bachelors in Computer Applications",
      "Marks": "85.77",
      "Dates": "Sep 2018 – Sep 2021",
      "Place": "Jamshedpur, India",
      "Curriculum": [
        "C",
        "DSA",
        "RDBMS",
        "OS",
        "Linux",
        "Web Tech.", "OOPs in Java", 
        "Logic Design"
      ]
    }
  ];

}
