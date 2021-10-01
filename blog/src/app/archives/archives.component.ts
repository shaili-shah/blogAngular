import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  year! : string ;
  month! : string ;

  constructor(private route : ActivatedRoute , private router : Router) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      console.log(param.get('year'));

      this.year = param.get('year') ?? '' ;
      this.month = param.get('month') ?? '';
    })
   
  }

  ViewAll(){
    this.router.navigate(['/']);
  }

}