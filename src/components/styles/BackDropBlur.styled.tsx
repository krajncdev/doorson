import styled from 'styled-components';

export const BackDropBlur = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(8px); /* Modern browsers */
  -webkit-backdrop-filter: blur(8px); /* Older versions of Safari */
`;
