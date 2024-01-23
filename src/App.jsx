import './App.css'

function App() {

  return (
    <>
    <div className='h-screen'>
      <h1>This is a title</h1>
      <p>This is a paragprah</p>
      <a href='https://www.google.com/'>This is an anchor</a>
      <div>
        <button className='btn btn-primary'>This is a button </button>
      </div>
      <div>
        <input type="text" placeholder='Email'></input>
      </div>
      <div>
        <input type="date"></input>
      </div>
      <div className='checkbox'>
        <input type="checkbox" id='checkbox'></input>
        <label htmlFor='checkbox' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident cupiditate aut, tempore minus explicabo temporibus architecto cum, accusantium voluptas amet adipisci similique ipsa reprehenderit voluptates saepe voluptatibus nihil illum.</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default App
