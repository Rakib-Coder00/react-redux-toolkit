import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decNumber, incNumber } from './actions/index';


function App() {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <a onClick={()=> dispatch(decNumber())} className="quantity__minus" title="Decrement" ><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState}/>
            <a onClick={()=> dispatch(incNumber())} className="quantity__plus" title="Increment"><span>+</span></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
