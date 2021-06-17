function App() {
  const name = 'Taposh'
  const x = false 
  return (
    <div className="container">
      <h1>Yay Learning React</h1>
      <h2>Hello {x?'Yes':'No '}</h2>
    </div>
  );
}

export default App;
