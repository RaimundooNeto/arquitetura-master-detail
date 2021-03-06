import { Injectable, Injector } from '@angular/core';
import { Category } from './category.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {

  constructor(protected Injector: Injector) {
    super("api/categories", Injector, Category.fromJson);
  }

}
