import { Component, Input } from '@angular/core';
import { IField, INestedRelatedField } from '../../api.interfaces';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {
  @Input() modelName: string;
  @Input() fields: IField[];
  @Input() relatedFields: INestedRelatedField[];

  constructor() { }
}