import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  year : any
  month : any

  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
       this.year = param.get('year');
       this.month = param.get('month');
    })
  }

  ViewAll(){
    this.router.navigate(['/']);
  }

}