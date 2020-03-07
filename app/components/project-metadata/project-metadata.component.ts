import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { KimisProject } from 'src/app/models/kimisproject';
import { Router } from '@angular/router';

@Component({
  selector: 'project-metadata',
  templateUrl: './project-metadata.component.html',
  styleUrls: ['./project-metadata.component.scss']
})
export class ProjectMetadataComponent implements OnInit, AfterViewChecked {
  selProject: KimisProject;
  constructor(private router: Router, private navServ: SidenavService) {
    
  }


  ngOnInit(): void {
    console.log('a');
  }
  ngAfterViewInit(): void {
    console.log('b');
  }

  init() {
  }

  ngAfterViewChecked(): void {  
  }

}
