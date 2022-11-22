import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import decode from 'jwt-decode'

export function useAuth() {
  const user = ref({})
  const router = useRouter()

  onMounted(() => {
    let userToken = localStorage.getItem('user')

    if (!userToken) {
      router.push('/auth/login')
      return
    }

    let decodedValue = decode(userToken)
    user.value = decodedValue.data
  })

  return user
}
