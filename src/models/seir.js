export const DEFAULT_PARAM = {
  population: 4,
  beta: 0.8,
  latentPeriod: 7,
  infectiousPeriod: 3,
  tau: 0.001,
};

export const genData = (params = DEFAULT_PARAM) => {
  const N = 10 ** params.population;
  const B = params.beta;
  const K = 1 / params.latentPeriod;
  let G = 1 / params.infectiousPeriod;
  const T = params.tau;
  if (G + T > 1) {
    G = 1 - T;
  }
  let susceptable = N;
  let exposed = 0;
  let infected = 0;
  let recovered = 0;
  let died = 0;
  const data = [
    {
      day: 0,
      susceptable,
      exposed,
      infected,
      recovered,
      died,
    },
  ];
  let ds = -1;
  let de = 0;
  let di = 1;
  let dr = 0;
  let dd = 0;
  for (let day = 1; day <= 1000; day += 1) {
    susceptable += ds;
    exposed += de;
    infected += di;
    recovered += dr;
    died += dd;
    data.push({
      day,
      susceptable,
      exposed,
      infected,
      recovered,
      died,
    });
    if ((exposed + infected) < 0.5) break;
    const tb = (B * infected * susceptable) / N;
    const tk = K * exposed;
    const tg = G * infected;
    const tt = T * infected;
    ds = -tb;
    de = tb - tk;
    di = tk - tg - tt;
    dr = tg;
    dd = tt;
  }
  return data;
};
