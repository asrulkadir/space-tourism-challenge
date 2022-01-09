export default function DataService(setData: any) {
  return fetch('data.json', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setData(json);
    })
    .catch(Error);
}
