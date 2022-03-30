'reach 0.1';

Reach.App(() => {
  const details = {
    seePrice: Fun([], UInt),
    seeDescription: Fun([], Bytes),
  }
  const Creator = Participant('Creator', {
    // creators interact intefrace
  });
  const Bidder= Participant('Bidder', {
    // Bidders interact interface
  });
  const Buyer = Participant('Buyer', {
    // Buyers interact interface
  })
  init();

  Creator.only(() => {
    // do something
  });
  commit();

  Bidder.only(() => {
    // do something
    const price = declassify(interact.seePrice());
  });
  Bidder.publish(price);
  commit();

  Buyer.only(() => {
    // do something
    const price = declassify(interact.seePrice());
    const description = declassify(interact.seeDescription());
  })
  Buyer.publis(price);
  Buyer.publish(description);
  const outcome = (someOutcome);
  commit();
})