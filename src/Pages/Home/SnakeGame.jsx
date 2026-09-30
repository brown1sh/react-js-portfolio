import React, {useState, useEffect, useCallback, useRef} from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [[10, 10], [10, 11], [10, 12]];
const INITIAL_DIRECTION = 'UP';
const SPEED = 150; // Milliseconds per tick

const generateFood = (snake) => 
    {
        while(true)
        {
            const x = Math.floor(Math.random() * GRID_SIZE);
            const y = Math.floor(Math.random() * GRID_SIZE);

            if (!snake.some(segment => segment && segment[0] === x && segment[1] === y))
            {
                return [x, y];
            }
        }
};

export default function SnakeGame()
{
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState(() => generateFood(INITIAL_SNAKE));
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    // Track direction changes during a tick to prevent self-collision via double clicking
    const lastDirection = useRef(INITIAL_DIRECTION);
    lastDirection.current = direction;

    const resetGame = () =>
    {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setFood(generateFood(INITIAL_SNAKE));
        setScore(0);
        setGameOver(false);
    };

    const handleKeyDown = useCallback((e) =>
    {
        switch(e.key)
        {
            case 'w':
                if (lastDirection.current !== 'DOWN') 
                    setDirection('UP');
                break;
            case 's':
                if (lastDirection.current !== 'UP')
                    setDirection('DOWN');
                break;
            case 'a':
                if (lastDirection.current !== 'RIGHT')
                    setDirection('LEFT');
                break;
            case 'd':
                if (lastDirection.current !== 'LEFT')
                    setDirection('RIGHT');
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => 
    {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => 
    {
       if (gameOver)
        return;

       const gameTick = setInterval(() =>
        {
            setSnake((prevSnake) =>
            {
                const head = [...prevSnake[0]];

                switch (direction)
                {
                    case 'UP':
                        head[1] -= 1;
                        break;
                    case 'DOWN':
                        head[1] += 1;
                        break;
                    case 'LEFT':
                        head[0] -= 1;
                        break;
                    case 'RIGHT':
                        head[0] += 1;
                        break;
                    default: 
                    break;
                }

                // Wall Collisions
                if (head[0] < 0 || head[0] > GRID_SIZE || head[1] < 0 || head[1] >= GRID_SIZE)
                {
                    setGameOver(true);
                    return prevSnake;
                }

                // Self Collisions
                if (prevSnake.some(segment => segment[0] === head[0] && segment[1] === head[1]))
                {
                    setGameOver(true);
                    return prevSnake;
                }

                const newSnake = [head, ...prevSnake];

                // Food Collisions
                if (head[0] === food[0] && head[1] === food[1])
                {
                    setScore(prev => prev + 1);
                    setFood(generateFood(newSnake))
                }
                else
                {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, SPEED);

        return () => clearInterval(gameTick);
    }, [direction, food, gameOver]);

    return (
        <div className="game--container">
            <h1>Classic Snake</h1>
            <div className="score--board">Score: {score}</div>

            <div className="game--grid">
                {Array.from({ length: GRID_SIZE }).map((_, y) =>
                (<div key ={y} className="game--grid--row">
                    {Array.from({ length : GRID_SIZE }).map((_, x) =>
                    {
                        const isSnake = snake.some(s => s[0] === x && s[1] === y);
                        const isFood = food[0] === x && food[1] === y;
                        return(
                            <div key= {x} className={`game--grid--cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`} />
                        );
                    })}
                </div>
                ))}
            </div>
            <div className="game--instructions">Use WASD to control the snake!</div>

            {gameOver && (
                <div className="game--modal">
                    <h2>Game Over!</h2>
                    <button className=" btn btn-primary" onClick={resetGame}>Quit Game</button>
                </div>
            )}
        </div>
    );
}