export default function ({ store, redirect }) {
  // If the vendor is not authenticated
  const user = JSON.stringify(localStorage.getItem('nasims-vendor'))
  if (user === 'null') {
    return redirect('/login')
  }
}
