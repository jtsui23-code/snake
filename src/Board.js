import React from 'react';
import './Board.css';
import {useState} from 'react';

function Board() {
    const rows = 20;
    const cols = 20;
    const cells = [];

    const [snake, setSnake] = useState([{row:3, col: 3}]);

    for (let r = 0; r < rows; r++) {
        for(let c = 0; c< cols; c++) {
            if (r === snake.rows[0] &&  c === snake.cols[0]) {

                cells.push(<div key={`${r}-${c}`} className="cell snake-cell"></div>);
            }
            else {
                
                cells.push(<div key={`${r}-${c}`} className="cell"></div>);


            }
        }

    }

    return(
        <div className="game-board">
            {cells}
        </div>
    );
}

export default Board;