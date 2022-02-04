import styled from 'styled-components';

export const StyledPlaceHolderLoader = styled.div`
grid-template-columns: repeat(4, minmax(100px, 1fr));
display: grid;

`;

export const StyledPlaceHolderLoaderItem = styled.div`

    margin: 5px;

`;
export const StyledPlaceHolderLoaderItemAnimation = styled.div`
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 250px;
    position: relative;

    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }
    
`;
