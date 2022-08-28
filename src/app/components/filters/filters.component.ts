import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductCategory } from 'src/app/utilities/Product';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() filters!: string[];
  @Output() showProduct = new EventEmitter<string>();

  categories = ProductCategory;

  constructor() {}

  onShowProduct(key: string) {
    this.showProduct.emit(key);
  }
}
