export function delay(t: number, v: [] | {}) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
