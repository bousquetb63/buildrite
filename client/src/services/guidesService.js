import api from '@/services/api'

export default {
  index () {
    return api().get('guides')
  },
  post (guide) {
    return api().post('guides', guide)
  }
}
