import React from 'react';
import './Board.css';
import {useState, useEffect} from 'react';

function Board() {
    const rows = 20;
    const cols = 20;
    const cells = [];

    
    const [snake, setSnake] = useState([{row:3, col: 3}]);

    const [direction, setDirection] = useState('RIGHT');

    const handleKeyDown = (e) => {
        if (e.key === "w" || e.key === "ArrowUp") {

            setDirection('UP');

        } else if ( e.key === "d" || e.key === "ArrowRight" ) {

            setDirection('RIGHT');

        } else if (e.key === "a" || e.key === "ArrowLeft") {

            setDirection('LEFT');

        } else if (e.key === "s" || e.key === "ArrowDown") {
            
            setDirection('DOWN');
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);


        // Cleanup function: remove the listener when the component is no longer used
        return () => {
            
            window.removeEventListener('keydown', handleKeyDown)

        };

    }, []);

    useEffect(() => {

        const moveSnake = () => {

            setSnake(oldSnake => {
                const currentHead = oldSnake[0];
                let newHead;

                if( direction === 'UP'){
                    newHead = {... currentHead, row: currentHead.row-1}

                } else if ( direction === 'DOWN') {

                    newHead = {... currentHead, row: currentHead.row +1}

                } else if (direction === 'RIGHT') {

                    newHead = {... currentHead, col:currentHead.col+1}
                
                } else if (direction === 'LEFT'){

                    newHead = {... currentHead, col: currentHead.col -1}
                }

                if (newHead){
                    return [newHead];
                } else {
                    return oldSnake;
                }

            });
        };

        const gameInterval = setInterval(moveSnake, 200); // Move snake every 200ms
        return () => clearInterval(gameInterval);


    },[direction]);

    for (let r = 0; r < rows; r++) {
        for(let c = 0; c< cols; c++) {
            if (r === snake[0].row &&  c === snake[0].col) {

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