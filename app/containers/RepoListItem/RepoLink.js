import NormalA from 'components/A';

const RepoLink = NormalA.extend`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;

  color: ${(props) => props.theme.main};

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export default RepoLink;
