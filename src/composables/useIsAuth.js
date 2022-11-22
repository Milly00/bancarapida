import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export function useIsAuth() {
  const router = useRouter()
  onMounted(() => {
    if (localStorage.getItem('user')) {
      router.push('/customer')
    }
  })
}
