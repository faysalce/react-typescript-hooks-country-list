import React from 'react';
import {
  StyledInfoRow,
  StyledName
} from './StyledInfoRow';

export type InfoRowProps = {
  name: string,
  value: string | number
}

function InfoRow(props: InfoRowProps) {
  const {
    name, value
  } = props;
  return (
    <StyledInfoRow>
      <StyledName>{name}:</StyledName> {value}
    </StyledInfoRow>
  )
}

export default InfoRow;
