import UserGreeting from "./components/UserGreeting";
import Student from "./components/Student";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Food from "./components/Food";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Header />
      <Card />
      {fruits.length > 0 && <List items={fruits} category={"Fruits"} />}
      {vegetables.length > 0 && (
        <List items={vegetables} category={"Vegetables"} />
      )}

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
      <Student name="Larry" /> 
<UserGreeting isLoggedIn={true} username="Business Monkey" />*/
}
