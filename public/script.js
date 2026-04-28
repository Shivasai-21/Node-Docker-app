function fetchInfo() {
  fetch('/api/info')
    .then(response => response.json())
    .then(data => {
      document.getElementById('info').innerText =
        `App: ${data.app}, Version: ${data.version}, Status: ${data.status}`;
    })
    .catch(err => {
      document.getElementById('info').innerText = 'Error fetching info';
      console.error(err);
    });
}
