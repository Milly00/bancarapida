import axios from 'axios'
import { isRef, ref, unref, watchEffect } from 'vue'

export class API {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000/api',
    })
  }

  useGet(path, config) {
    const data = ref(null)
    const error = ref(null)

    const doFetch = async () => {
      data.value = null
      error.value = null

      const urlValue = unref(path)

      try {
        const res = await this.instance.get(urlValue, config)
        data.value = res
      } catch (e) {
        error.value = e
      }
    }

    if (isRef(path)) {
      watchEffect(doFetch)
    } else {
      doFetch()
    }

    return { data, error, retry: doFetch }
  }
}
