'reach 0.1';

export const main = Reach.App(() => {
  const Pat = Participant('Pat', {
    // Pats interact interface
  });
  const Vanna = Participant('Vanna', {
    // Vannas interact interface
  });
  init();

  Pat.only(() => {
    // do something
    const challengePat = declassify(interact.getChallenge());
  });
  commit();

  Vanna.only(() => {
    // do something
    const challengeVanna = declassify(interact.getChallenge());
  });
  const outcome = (someOutcome);
  commit();
})