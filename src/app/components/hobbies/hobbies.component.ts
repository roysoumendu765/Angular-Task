import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

  hobbiesDetails: any = [
    {
      "id": 1,
      "hobbiesheading": "Coding Challenges and Hackathons",
      "hobbiesdesc": "Regularly participate in coding platforms like Hackerrank, Leetcode, and Codeforces. Enjoy solving algorithmic problems and participating in online hackathons, such as the IIT-BHU Codefest."
    },
    {
      "id": 2,
      "hobbiesheading": "Blockchain Development",
      "hobbiesdesc": " Actively explore blockchain technology, working on projects like Feedback Management System using web3.js and Solidity."
    },
    {
      "id": 3,
      "hobbiesheading": "Cybersecurity Enthusiast",
      "hobbiesdesc": "Pursue cybersecurity techniques and solutions through virtual internships and personal projects, including securing networks with tools like Snort."
    }
  ]
}
