import logo from './logo.svg';
import './App.css';
// import ScriptTag from 'react-script-tag';


function App() {
  return (
    <div className="p-3 mb-2 bg-dark text-white">
    <header>
        <h1 align="center">Sorting Visualizer</h1>
        <nav>
            <div className="row">
                <div class="col gap-2 d-sm-flex" id="newArray">
                    <button type="button" className="btn btn-outline-success btn-dark newArray">New Array</button>
                </div>
                <div className="col" id="input">
                    <span id="size">Size
                        <input id="arr_sz" type="range" min="5" max="100" step={1} value={60} />
                    </span>
                    <span id="speed">Speed
                        <input id="speed_input" type="range" min="20" max="300" stepDown={10} value={60} />
                    </span>
                </div>
                <div className="col gap-2 d-sm-flex justify-content-end">
                    <button type="button" className="btn btn-outline-primary btn-dark bubbleSort">Bubble Sort</button>
                    <button type="button" className="btn btn-outline-primary btn-dark selectionSort">Selection Sort</button>
                    <button type="button" className="btn btn-outline-primary btn-dark insertionSort">Insertion Sort</button>
                    <button type="button" className="btn btn-outline-primary btn-dark quickSort">Quick Sort</button>
                    <button type="button" className="btn btn-outline-primary btn-dark mergeSort">Merge Sort</button>
                </div>
            </div>
        </nav>
    </header>
    <div id="bars" className="flex-container"></div>
    </div>
  );
}

export default App;

