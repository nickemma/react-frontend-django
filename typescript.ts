// typescript variables
// any
// tuple
// unknown
// enum
// never

let dame = 'me';

const cool = (income: number, taxYear: number) => {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.5;
};

cool(1000, 2022);
