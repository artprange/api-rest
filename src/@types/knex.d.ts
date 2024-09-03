// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/type/tables' {
  export interface Table {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      sessions_id?: string
    }
  }
}
