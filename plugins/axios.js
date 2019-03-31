export default function({ $axios }) {
  $axios.setHeader('Accept', 'application/json')

  $axios.onError(error => {
    // Add UX error message
    console.error(error)
  })
}
