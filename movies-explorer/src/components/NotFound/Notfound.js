import './Notfound.css';
import '../Section/Section.css';
import '../Link/Link.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  let navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <main className='notfound section'>
        <h1 className='notfound__title'>404</h1>
        <p className='notfound__text'>Страница не найдена</p>
        <p className='notfound__link link' onClick={goBack}>Назад</p>
      </main >
    </>
  )
}

export default NotFound;