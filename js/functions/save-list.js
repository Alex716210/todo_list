export default function saveList(arr, kayName) {
  localStorage.setItem(kayName, JSON.stringify(arr))
}
