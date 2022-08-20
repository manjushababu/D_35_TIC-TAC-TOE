import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const GamingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 23%;
    @media (max-width: 768px) {
        width: 70%;
    }
`;

export const Box = styled.div`
    width: 32.39%;
    height: 90px;
    border: ${(props) => (props.isBorder && '1px solid white')};
    border-right: ${(props) => props.isRightBorderNone && '0px'};
    border-left: ${(props) => props.isLeftBorderNone && '0px'};
    border-top: ${(props) => props.isTopBorderNone && '0px'};
    border-bottom: ${(props) => props.isBottomBorderNone && '0px'};
    text-align: center;
    font-size: 35px;
    color: ${props => props.value ? 'green' : 'red'} ;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 35px 0;
`;

export const WinnerContainer = styled.h1`
    color: white;
`;

export const PlayersContainer = styled.div`
    margin: 10px 0;
`;