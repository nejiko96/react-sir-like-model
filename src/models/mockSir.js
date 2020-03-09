export const DEFAULT_PARAM = {
  population: 4,
  duration: 3,
  beta: 1
};

export const genData = (params = DEFAULT_PARAM) => {
  const N = Math.pow(10, params.population);
  const D = params.duration;
  const B = params.beta;
  let susceptable = N;
  let infected = 0;
  let recovered = 0;
  const data = [
    {
      day: 0,
      susceptable,
      infected,
      recovered
    }
  ];
  const acc = [0];
  let nxt = 1;
  for (let day = 1; day <= 1000; day++) {
    acc[day] = acc[day - 1] + nxt;
    recovered = acc[day - D] || 0;
    infected = acc[day] - recovered;
    susceptable = N - acc[day];
    data.push({
      day,
      susceptable,
      infected,
      recovered
    });
    if (infected < 0.5) break;
    nxt = Math.min(B * infected * susceptable / N, susceptable);
  }
  return data;
};
