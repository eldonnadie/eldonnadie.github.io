import { EventEmitter, Injectable, Output } from '@angular/core'
import { KimisProject } from '../models/kimisproject';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {
    selectedMenuOption: string;
    selProject: KimisProject;
    @Output() change: EventEmitter<string> = new EventEmitter();
    @Output() selectedProjectChange: EventEmitter<KimisProject> = new EventEmitter();

    setMenuOption(option: string) {
        this.selectedMenuOption = option;
        this.change.emit(this.selectedMenuOption);
    }

    setProject(project: KimisProject) { 
        this.selProject = project;     
        this.selectedProjectChange.emit(this.selProject);
    }
}