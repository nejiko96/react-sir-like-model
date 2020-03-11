
export const logarithmTickFormat = (val, mag) => {
  if (mag <= 4) return val;
  if (val === 0) return val;
  const mag2 = Math.floor(mag - 0.01);
  const val2 = val / 10 ** mag2;
  return `${val2}e${mag2}`;
};

// eslint:import/prefer-default-export
export default {};
