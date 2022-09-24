import styled from 'styled-components/native';

export const Container = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const CoverImage = styled.Image``;
