import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';

import { DialogService } from '../../../services/dialog.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  name = 1;
  editName = 2;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    public dialogService: DialogService) { }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.name || this.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => { console.log(params.get('id')); return null; }
        // this.service.getHero(params.get('id')))
      ));
  }

}
