import UserGreeting from "./components/UserGreeting";
import Student from "./components/Student";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Food from "./components/Food";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Business Monkey" />
      <Card />
      <Footer />
    </>
  );
}

export default App;

{
  /* <Food />
<Button />
<Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" /> */
}
