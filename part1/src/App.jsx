
const Hello = ({name,age=15}) =>{
  console.log(name,age)
  return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
      </div>
  )
}

const App = () => {
  const friends = ['alice', ' bob', ' carol', ' dave']
  return (
      <div>
        <h1>Greetings</h1>
        <Hello name="alice" age={25} />
        <Hello name="bob" age={30} />
        <Hello name="carol" age={35} />
        <Hello name="dave" />
        <h2>{friends}</h2>
      </div>
  )
}

export default App
