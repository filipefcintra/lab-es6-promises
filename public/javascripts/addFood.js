function addFood(step, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector(id).innerHTML += `<li>${step}</li`;
      document.querySelector(id).innerHTML += `<li>${step}</li>`;
      resolve(step);
      callback ? callback() : ''; // For iteration one
    }, Math.floor(Math.random() * 1000));
function addFood(step, id, callback)
