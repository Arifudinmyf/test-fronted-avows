import { Component, Input, OnInit } from '@angular/core';
import { SharedInput } from './shared-input';

@Component({
  selector: 'shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent implements OnInit {

  @Input() config!: SharedInput;
  @Input() typeInput: string = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
