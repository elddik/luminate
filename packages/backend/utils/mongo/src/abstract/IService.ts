import {Document, QueryFindOneAndUpdateOptions} from 'mongoose'
import {IListDocumentsArgs} from './types'
import {IConnectionResults} from './IConnectionResults'

export interface IService<T extends Document> {
  getConnectionResults(args: IListDocumentsArgs): Promise<IConnectionResults<T>>
  create(input: any): Promise<T>
  updateOne(conditions: any, input: any, options?: QueryFindOneAndUpdateOptions): Promise<T | null>
  updateById(id: string, input: any, options?: QueryFindOneAndUpdateOptions): Promise<T | null>
  deleteById(id: string): Promise<T | null>
}
