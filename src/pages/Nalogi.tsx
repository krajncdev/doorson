import HeaderComponent from '../components/HeaderComponent';
import NalogiTable from '../components/NalogiTable';
import Container from '../components/Container';
import { Button } from '../components/styles/Button.styled';
import { Link } from 'react-router-dom';

const Nalogi = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <Button style={{ marginBottom: '1rem' }}>
          <Link to='/nov-nalog'>Dodaj nalog</Link>
        </Button>
        <NalogiTable />
      </Container>
    </>
  );
};

export default Nalogi;
