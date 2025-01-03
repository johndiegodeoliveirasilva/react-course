import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 400px;
  height: 200px;
  padding: 20px;
  color: green;
`;

export const Title = styled.span<{ $color: string, $background?: string }>`
  font-size: 19px;
  font-weight: 800;
  color: ${props => props.$color};
  background-color: ${props => props.$background};
`