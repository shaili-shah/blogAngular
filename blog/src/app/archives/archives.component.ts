import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  year! : number ;
  month! : number ;

  constructor(private route : ActivatedRoute , private router : Router) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let year = param.get('year') ?? '';
      this.year= parseInt(year);
      
      let month = param.get('month') ?? '';
      this.month = parseInt(month);
    })
  }

  ViewAll(){
    this.router.navigate(['/']);
  }

}