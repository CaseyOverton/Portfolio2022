import React from 'react';
import styled from 'styled-components';
import Forward from '@material-ui/icons/Forward';
import rightArrow from './noun-arrow-2335727.svg';
import leftArrow from './noun-arrow-2335785.svg';

const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;
function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      <Button src={leftArrow} style={{height: 30 }}  side="prev" onClick={handleClickPrev} />
      <Button src={rightArrow} style={{height: 30 }} side="next" onClick={handleClicknext} />
    </>
  );
}
export default Buttons;