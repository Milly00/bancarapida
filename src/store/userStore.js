import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  username: 'flipper',
  fullName: 'Flipper Bula',
  balance: {
    credit: {
      amount: 6000,
    },
    general: {
      amount: 3.3 * 1e6,
    },
  },
  latestMovements: [
    ...Array(10)
      .fill({})
      .map((_, i) => ({
        id: i + 1,
        type: ['Retiro', 'Transferencia'][Math.round(Math.random())],
        bank: ['Bancolombia', 'Davivienda'][Math.round(Math.random())],
        amount: Math.round(Math.random() * 1e6),
        date: ((start, end) =>
          new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
          ))(new Date(2020, 0, 1), new Date()),
        status: ['Aprobada', 'Rechazada'][Math.round(Math.random())],
      })),
  ],
  /* Methods */
  getExtTransactions() {
    return axios.get('http://localhost:8000/api/externalTransAll').then(res => {
      this.latestMovements = res;
    })
  }
})
