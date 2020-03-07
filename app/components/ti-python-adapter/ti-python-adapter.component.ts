import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectMetadataComponent } from '../project-metadata/project-metadata.component';
import { SidenavService } from 'src/app/services/sidenav.service';
import { KimisProject } from 'src/app/models/kimisproject';

@Component({
  selector: 'ti-python-adapter',
  templateUrl: './ti-python-adapter.component.html'
})
export class TIPythonAdapterComponent implements OnInit, AfterViewInit {  
  selProject: KimisProject;
  constructor(private navSer: SidenavService) {
    let availableWorks = [
      new KimisProject('June, 2018','/work/tiinspire', 'TI-nspire CA II UI/UX Refresh',
        'Text Editor',
        true, '../../assets/Thumbnail-portfolio_TInspire CAII.png',
        true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.',
        [
          'Design for an embedded project with a low-resolution screen and limited spacing.',
          'Bring value to the product with the lowest possible effort.',
          'Make a big design impact with simple and small design purposes.'],
        'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
      new KimisProject('March, 2019','/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true,
        'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
        "Short time to execute the task.",
        "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
      new KimisProject('December, 2016','/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
        "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
      new KimisProject('January, 2017','/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true,
        'Motion design, UX information architecture, visual design, and 3D design.',
        ["Find a friendly way to display a big amount of numbers and system status.",
          , "Explore new interactive ways to compare data.",
          , "Make the system’s animations more visible and evident."], 'Professional project',
        ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
      new KimisProject('October, 2018','/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.',
        ["Understand the energy metrics in the industry.",
          "Collaborate with electrical engineers to implement circuits designing IoT devices.",
          "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
      new KimisProject('August, 2017','/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
      new KimisProject('March, 2014','/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
      new KimisProject('June, 2017','/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
      new KimisProject('Sep, 2015','/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
    ];
    this.selProject = availableWorks[1];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {  

  }

}
