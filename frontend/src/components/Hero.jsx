import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Authentication</h1>
          <p className='text-center mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi corrupti officiis placeat minus, quia necessitatibus enim delectus earum ipsa cupiditate deleniti! Optio qui ratione adipisci obcaecati, iste maiores! Explicabo.
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
