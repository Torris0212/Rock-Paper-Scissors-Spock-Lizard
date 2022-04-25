export function getGesture() {
  return new Promise((resolve, reject) => {
    fetch('https://codechallenge.boohma.com/choice')
      .then(res => {
        resolve(res.json())
    });
  });
}