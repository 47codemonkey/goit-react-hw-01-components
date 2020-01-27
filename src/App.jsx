import React from 'react';
import Profile from './сomponents/Profile/Profile';
import Statistics from './сomponents/Statistics/Statistics';
import FriendList from './сomponents/FriendList/FriendList';
import TransactionHistory from './сomponents/Transaction/TransactionHistory';

import user from './сomponents/Profile/user.json';
import statisticalData from './сomponents/Statistics/statistical-data.json';
import friends from './сomponents/FriendList/friends.json';
import transactions from './сomponents/Transaction/transactions.json';

const App = () => (
  <>
    <Profile user={user} />;
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />
  </>
);

export default App;
