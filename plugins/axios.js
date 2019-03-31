export default function({ $axios }) {
  $axios.onError(error => {
    // Add UX error message
    alert(error)
  })
}
