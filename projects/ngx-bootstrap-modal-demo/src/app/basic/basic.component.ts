import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxBootstrapModalService, INgxBootstrapModalInstance } from '@nowzoo/ngx-bootstrap-modal';

@Component({
  selector: 'demo-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @ViewChild('modal') modalTemplate: TemplateRef<any>;
  id: string;
  fg: FormGroup;
  name: string = null;
  submitted = false;
  message: string = null;
  events: any[] = [];
  modalInstance: INgxBootstrapModalInstance = null;
  constructor(
    private fb: FormBuilder,
    private modalService: NgxBootstrapModalService
  ) { }
  ngOnInit() {

    this.id = 'some-unique-id';
    this.fg = this.fb.group({
      name: ['', Validators.required]
    });

  }

  show() {
    this.name = null;
    this.submitted = false;
    this.message = null;
    this.events = [];
    this.fg.patchValue({name: ''});
    this.modalInstance = this.modalService.show(this.modalTemplate);
    this.modalInstance.events.subscribe(e => {
      this.events.push(e.type);
      console.log(e);
    });
    this.modalInstance.shown.then(() => {
      this.modalInstance.modalEl.querySelectorAll('input').item(0).focus();
    });
    this.modalInstance.hidden.then(() => {
      this.name = this.submitted ?  this.fg.value.name : '';
      this.message = this.submitted ?  'You submitted the form.' : 'You closed the modal without submitting the form.';
    });
  }

  submit() {
    this.submitted = true;
    this.modalInstance.hide();
  }
}
