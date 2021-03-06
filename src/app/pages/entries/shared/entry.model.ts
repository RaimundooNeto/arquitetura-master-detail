import { BaseResourceModel } from '../../../shared/models/base-resource.model'
import { Category } from './../../categories/shared/category.model';

export class Entry extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public type?: string,
    public categoryId?: number,
    public category?: Category
  ){
    super();
  }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  }

  static fromJson(jasonData: any): Entry{
    return Object.assign(new Entry(), jasonData);
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}
