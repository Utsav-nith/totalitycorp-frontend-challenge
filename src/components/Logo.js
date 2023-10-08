import styled from 'styled-components';
const Logo = () => {
  return (
    <Wrapper>
      <span>IKEA_</span>STORE
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;