import Container from './components/container/Container';
import Profile from './components/profile/Profile';
import userData from "./userData.json";

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
    </Container>
  )
}

export default App
