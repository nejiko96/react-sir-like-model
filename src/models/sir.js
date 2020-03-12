export const DEFAULT_PARAM = {
  population: 4,
  beta: 0.5,
  infectiousPeriod: 3,
};

export const genData = (params = DEFAULT_PARAM) => {
  const N = 10 ** params.population;
  const B = params.beta;
  const G = 1 / params.infectiousPeriod;

  let susceptable = N;
  let infected = 0;
  let recovered = 0;
  const data = [
    {
      day: 0,
      susceptable,
      infected,
      recovered,
    },
  ];
  let ds = -1;
  let di = 1;
  let dr = 0;
  for (let day = 1; day <= 1000; day += 1) {
    susceptable += ds;
    infected += di;
    recovered += dr;
    data.push({
      day,
      susceptable,
      infected,
      recovered,
    });
    if (infected < 0.5) break;
    const tb = Math.min((B * infected * susceptable) / N, susceptable);
    const tg = G * infected;
    ds = -tb;
    di = tb - tg;
    dr = tg;
  }
  return data;
};
