import React from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import { Wrapper, ButtonWrapper, InputWrapper } from './styles';

function Players({ players, setPlayers, setStartGame }) {

    return (
        <div>
            <Wrapper>
            <InputWrapper>
                <TextField onChange={(e) => {
                    let data = {...players.firstPlayer};
                    data.name = e.target.value;
                    players.firstPlayer = {...data};
                    setPlayers({
                        ...players,
                    });
                }}
                label="Player 1"
                color="success"
                InputLabelProps={{
                    style: {
                        input: {
                            "&::value": {
                              color: "gray"
                            },
                      color: 'red',
                        }
                    } }}
                fullWidth
                focused
                sx={{ input: { color: 'green' } }}
                 />
            </InputWrapper>
            <InputWrapper>
                <TextField onChange={(e) => {
                    let data = {...players.secondPlayer};
                    data.name = e.target.value;
                    players.secondPlayer = {...data};
                    setPlayers({
                        ...players,
                    });
                }}
                label="Player 2" sx={{ input: { color: 'green' } }} fullWidth color="success" focused />
            </InputWrapper>
            </Wrapper>
            <ButtonWrapper>
                <Button onClick={() => setStartGame(true)} variant="contained">Start Game</Button>
            </ButtonWrapper>
        </div>
    )
}

export default Players;
