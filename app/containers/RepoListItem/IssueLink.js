import NormalA from 'components/A';

const IssueLink = NormalA.extend`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.main};

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export default IssueLink;
