// src/data/memberData.js
const memberData = [
    {
      id: 0,
      name: 'JOHN SMITH',
      joined: 'DEC 12,2024',
      time: '10:45 AM',
      transactionsCount: 234,
      status: 'ACTIVE',
      transactions: [
        { time: '09:15 AM', amount: 100, type: 'Deposit' },
        { time: '10:00 AM', amount: 30, type: 'Withdrawal' },
      ],
      bets: [
        { amount: 20, game: 'Poker', side: 'Player', result: 'Win' },
        { amount: 25, game: 'Roulette', side: 'Black', result: 'Lost' },
      ],
    },
    {
      id: 1,
      name: 'JOAN SMITH',
      joined: 'JAN 12,2024',
      time: '11:15 AM',
      transactionsCount: 90,
      status: 'INACTIVE',
      transactions: [
        { time: '08:45 AM', amount: 50, type: 'Deposit' },
        { time: '09:10 AM', amount: 20, type: 'Withdrawal' },
      ],
      bets: [
        { amount: 15, game: 'Slots', side: '-', result: 'Lost' },
        { amount: 10, game: 'Blackjack', side: 'Player', result: 'Win' },
      ],
    },
    {
      id: 2,
      name: 'JOHN DOE',
      joined: 'DEC 13,2024',
      time: '09:30 AM',
      transactionsCount: 148,
      status: 'ACTIVE',
      transactions: [
        { time: '07:50 AM', amount: 200, type: 'Deposit' },
        { time: '08:15 AM', amount: 70, type: 'Withdrawal' },
      ],
      bets: [
        { amount: 50, game: 'Poker', side: 'Player', result: 'Lost' },
        { amount: 20, game: 'Roulette', side: 'Red', result: 'Win' },
      ],
    },
    {
      id: 3,
      name: 'RON SMITH',
      joined: 'JUL 12,2024',
      time: '02:20 PM',
      transactionsCount: 310,
      status: 'ACTIVE',
      transactions: [
        { time: '11:00 AM', amount: 300, type: 'Deposit' },
        { time: '11:45 AM', amount: 100, type: 'Withdrawal' },
      ],
      bets: [
        { amount: 60, game: 'Roulette', side: 'Black', result: 'Win' },
        { amount: 25, game: 'Blackjack', side: 'Dealer', result: 'Lost' },
      ],
    }
  ];
  
  export default memberData;
  