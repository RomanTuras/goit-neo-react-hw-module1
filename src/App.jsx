import Container from "./components/container/Container";
import Profile from "./components/profile/Profile";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {

  return (
    <Container>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  )
}

export default App
