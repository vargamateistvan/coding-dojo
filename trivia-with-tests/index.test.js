const Game = require('./index.js');

describe("The test environment", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should access game", () => {
    expect(Game).toBeDefined();
  });
});

let game;

describe("Playing a game #1", () => {
  beforeAll(() => {
    game = new window.Game();
  });

  beforeEach(() => {
    console.log = jest.fn();
  });

  it("First player has been added", () => {
    game.add('Chet');

    expect(console.log.mock.calls).toEqual([
      ['Chet was added'],
      ['They are player number 1']
    ]);
  });

  it("Second player has been added", () => {
    game.add('Pat');

    expect(console.log.mock.calls).toEqual([
      ['Pat was added'],
      ['They are player number 2']
    ]);
  });

  it("First roll by Chet", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 6'],
      ['Chet\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 0']
    ]);
  });

  it("Chet correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Chet now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Second roll by Pat", () => {
    game.roll(4);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 4'],
      ['Pat\'s new location is 4'],
      ['The category is Pop'],
      ['Pop Question 0']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Pat now has 1 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Third roll by Chet", () => {
    game.roll(3);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 3'],
      ['Chet\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 1']
    ]);
  });

  it("Chet correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Chet now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Fourth roll by Pat", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 1'],
      ['Pat\'s new location is 5'],
      ['The category is Science'],
      ['Science Question 0']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Pat now has 2 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Fifth roll by Chet", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 6'],
      ['Chet\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 2']
    ]);
  });

  it("Chet incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['Chet was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Sixth roll by Pat", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 1'],
      ['Pat\'s new location is 6'],
      ['The category is Sports'],
      ['Sports Question 0']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Pat now has 3 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Seventh roll by Chet", () => {
    game.roll(2);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 2'],
      ['Chet is not getting out of the penalty box'],
    ]);
  });

  it("Chet correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Eight roll by Pat", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 1'],
      ['Pat\'s new location is 7'],
      ['The category is Rock'],
      ['Rock Question 3']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Pat now has 4 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Ninth roll by Chet", () => {
    game.roll(4);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 4'],
      ['Chet is not getting out of the penalty box'],
    ]);
  });

  it("Chet incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['Chet was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Tenth roll by Pat", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 1'],
      ['Pat\'s new location is 8'],
      ['The category is Pop'],
      ['Pop Question 1']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Pat now has 5 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Eleventh roll by Chet", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 6'],
      ['Chet is not getting out of the penalty box'],
    ]);
  });

  it("Chet correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Tenth roll by Pat", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 1'],
      ['Pat\'s new location is 9'],
      ['The category is Science'],
      ['Science Question 1']
    ]);
  });

  it("Pat incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['Pat was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });


  it("Twelfth roll by Chet", () => {
    game.roll(3);

    expect(console.log.mock.calls).toEqual([
      ['Chet is the current player'],
      ['They have rolled a 3'],
      ['Chet is getting out of the penalty box'],
      ['Chet\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 4']
    ]);
  });

  it("Chet correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was correct!!!!'],
      ['Chet now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Thirteenth roll by Pat", () => {
    game.roll(5);

    expect(console.log.mock.calls).toEqual([
      ['Pat is the current player'],
      ['They have rolled a 5'],
      ['Pat is getting out of the penalty box'],
      ['Pat\'s new location is 2'],
      ['The category is Sports'],
      ['Sports Question 1']
    ]);
  });

  it("Pat correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was correct!!!!'],
      ['Pat now has 6 Gold Coins.']
    ]);
    expect(notAWinner).toBe(false);
  });
});

describe("Playing a game #2", () => {
  beforeAll(() => {
    game = new window.Game();
  });

  beforeEach(() => {
    console.log = jest.fn();
  });

  it("First player has been added", () => {
    game.add('Bob');

    expect(console.log.mock.calls).toEqual([
      ['Bob was added'],
      ['They are player number 1']
    ]);
  });

  it("Second player has been added", () => {
    game.add('James');

    expect(console.log.mock.calls).toEqual([
      ['James was added'],
      ['They are player number 2']
    ]);
  });

  it("First roll by Bob", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 6'],
      ['Bob\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 0']
    ]);
  });

  it("Bob correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Bob now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Second roll by James", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 1'],
      ['James\'s new location is 1'],
      ['The category is Science'],
      ['Science Question 0']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['James now has 1 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Third roll by Bob", () => {
    game.roll(3);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 3'],
      ['Bob\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 1']
    ]);
  });

  it("Bob correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['Bob now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Fourth roll by James", () => {
    game.roll(2);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 2'],
      ['James\'s new location is 3'],
      ['The category is Rock'],
      ['Rock Question 2']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['James now has 2 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Fifth roll by Bob", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 6'],
      ['Bob\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 3']
    ]);
  });

  it("Bob incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['Bob was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Sixth roll by James", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 6'],
      ['James\'s new location is 9'],
      ['The category is Science'],
      ['Science Question 1']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['James now has 3 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Seventh roll by Bob", () => {
    game.roll(2);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 2'],
      ['Bob is not getting out of the penalty box'],
    ]);
  });

  it("Bob correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Eight roll by James", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 1'],
      ['James\'s new location is 10'],
      ['The category is Sports'],
      ['Sports Question 0']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['James now has 4 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Ninth roll by Bob", () => {
    game.roll(4);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 4'],
      ['Bob is not getting out of the penalty box'],
    ]);
  });

  it("Bob incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['Bob was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Tenth roll by James", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 1'],
      ['James\'s new location is 11'],
      ['The category is Rock'],
      ['Rock Question 4']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was corrent!!!!'],
      ['James now has 5 Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Eleventh roll by Bob", () => {
    game.roll(6);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 6'],
      ['Bob is not getting out of the penalty box'],
    ]);
  });

  it("Bob correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Tenth roll by James", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 1'],
      ['James\'s new location is 0'],
      ['The category is Pop'],
      ['Pop Question 0']
    ]);
  });

  it("James incorrectly answered", () => {
    const notAWinner = game.wrongAnswer();

    expect(console.log.mock.calls).toEqual([
      ['Question was incorrectly answered'],
      ['James was sent to the penalty box']
    ]);
    expect(notAWinner).toBe(true);
  });


  it("Twelfth roll by Bob", () => {
    game.roll(3);

    expect(console.log.mock.calls).toEqual([
      ['Bob is the current player'],
      ['They have rolled a 3'],
      ['Bob is getting out of the penalty box'],
      ['Bob\'s new location is NaN'],
      ['The category is Rock'],
      ['Rock Question 5']
    ]);
  });

  it("Bob correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was correct!!!!'],
      ['Bob now has NaN Gold Coins.']
    ]);
    expect(notAWinner).toBe(true);
  });

  it("Thirteenth roll by James", () => {
    game.roll(1);

    expect(console.log.mock.calls).toEqual([
      ['James is the current player'],
      ['They have rolled a 1'],
      ['James is getting out of the penalty box'],
      ['James\'s new location is 1'],
      ['The category is Science'],
      ['Science Question 2']
    ]);
  });

  it("James correctly answered", () => {
    const notAWinner = game.wasCorrectlyAnswered();

    expect(console.log.mock.calls).toEqual([
      ['Answer was correct!!!!'],
      ['James now has 6 Gold Coins.']
    ]);
    expect(notAWinner).toBe(false);
  });
});