import React, { useState } from "react";
import Button from '@mui/material/Button';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

import initialData from '../mocks/initialData.mock.json';
import { Container, GamingWrapper, Box, ButtonWrapper, WinnerContainer, PlayersContainer } from './styles';

function TicTacToe({ setStartGame, players, setPlayers }) {
    const [data, setData] = useState([...initialData]);
    const [isXTurn, setIsXTurn] = useState(true);
    const [winners, setWinners] = useState([]);

    const fetchResults = (selectedData, _index) => {
        if (selectedData.id === _index && !winners.length) {
            const temp = {...data[_index]};
            temp.value = isXTurn ? 'X' : 'O';
            data[_index] = {...temp};
            setData([...data])
        }
        const winnerCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ];

        if (!winners.length) {
            for (let i = 0; i < winnerCombinations.length; i ++) {
                let pos = 0;
                let temp = winnerCombinations[i];
                let val = data[temp[pos]].value && (data[temp[pos]].value === data[temp[pos + 1]].value) &&
                (data[temp[pos + 1]].value === data[temp[pos + 2]].value);
    
                if (val) {
                    setWinners([...winnerCombinations[i]]);
                    if (data[winnerCombinations[i][0]].value === 'X') {
                        let data = {...players.firstPlayer};
                        data.score += 1;
                        players.firstPlayer = {...data};
                        setPlayers({...players});
                    } else {
                        let data = {...players.secondPlayer};
                        data.score += 1;
                        players.secondPlayer = {...data};
                        setPlayers({...players});
                    }

                    return;
                }
    
            }
        }
        
        setIsXTurn(!isXTurn);
    }

    const { width, height } = useWindowSize();

    const returnBoxes = () => data.map((val, index) => <Box
        isBorder={val.isBorder}
        isBottomBorderNone={val.isBottomBorderNone}
        isRightBorderNone={val.isRightBorderNone}
        isLeftBorderNone={val.isLeftBorderNone}
        isTopBorderNone={val.isTopBorderNone}
        key={index}
        value={val.value === 'X'}
        onClick={() => {
            fetchResults(val, index);
        }}
        > {val.value} </Box>);

        const resetGame = () => {
            setData([...initialData]);
            setWinners([]);
            setIsXTurn(true);
        }

    return (
        <>
            {winners.length > 0 && <Confetti
                width={width}
                height={height}
            />}
            <Container>
                <GamingWrapper>
                    {returnBoxes()}
                </GamingWrapper>
            </Container>
            {winners.length > 0 && <WinnerContainer>
                Winner is {data[winners[0]]?.value === 'X' ? players.firstPlayer.name : players.secondPlayer.name}
            </WinnerContainer>}
            <ButtonWrapper>
                <Button onClick={() => setStartGame(false)} variant="contained" color="error">Exit Game</Button>
                <Button onClick={() => resetGame() } variant="contained" color="success">Restart Game</Button>
            </ButtonWrapper>
            <h1>
                SCORE BOARD
            </h1>
            <PlayersContainer>{players.firstPlayer.name}: {players.firstPlayer.score}</PlayersContainer>
            <PlayersContainer>{players.secondPlayer.name}: {players.secondPlayer.score}</PlayersContainer>
        </>
    )
}

export default TicTacToe;
