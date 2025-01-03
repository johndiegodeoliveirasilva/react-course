import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components'

/*
export const Card = styled.div`
  background-color: white;
  width: 400px;
  height: 200px;
  padding: 20px;
  color: green;
`;
*/

export const Card = styled.div(() => ({
  backgroundColor: 'white',
  width: '400px',
  height: '200px',
  padding: '20px',
  color: 'green',
}));

/*
export const Title = styled.span<{ $color: string, $background?: string }>`
  font-size: 19px;
  font-weight: 800;
  color: ${props => props.$color};
  background-color: ${props => props.$background};
`
*/

interface TitleProps {
  $color: string;
  $background?: string;
  children: ReactNode;
}

export const Title: FunctionComponent<TitleProps> = styled.span(props => ({
  fontSize: 19,
  fontWeight: 800,
  color: props.$color,
  backgroundColor: props.$background,
}))