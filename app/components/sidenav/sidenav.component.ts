import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  visible: boolean;
  home: boolean;
  breadcrumbVisible: boolean;
  currentTitle: string;

  constructor(private route: ActivatedRoute, private router: Router, sideNavService: SidenavService) {
    this.home = window.location.pathname == '/';
    this.breadcrumbVisible = false;
    this.currentTitle = '';
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.setBreadcrumb(val.url);
      }
    });
    sideNavService.change.subscribe(x => {

      this.currentTitle = x;
    });
  }
  setBreadcrumb(url: string) {
    this.breadcrumbVisible = url.indexOf('work/') >= 0 && url.indexOf('work/') + 6 <= url.length;
  }

  ngOnInit(): void {
  }

}
