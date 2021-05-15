import React, {FC} from 'react';
import styled from 'styled-components/native';

interface Props {
  text: string;
}

const TextItem: FC<Props> = ({text}) => {
  return <StyledText>{text}</StyledText>;
};

const StyledText = styled.Text`
  font-size: 20px;
`;

export default TextItem;
