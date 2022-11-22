import Categories from './Categories.svg';
import { Badge, Card } from 'react-bootstrap';

function CardCategories(props) {
  const tittle = (tittle = 'not found') => {
    if (props.tittle !== undefined) {
      return props.tittle;
    }
    return tittle;
  };

  return (
    <Card style={{ maxWidth: '202px', maxHeight: '274px' }}>
      <Card.Img src={Categories} alt="Card image" style={{ width: '100%', height: '100%' }} />
      <Card.ImgOverlay style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        <h4 style={{ textAlign: 'center' }}>
          <Badge bg="light" className="text-black">
            {tittle()}
          </Badge>
        </h4>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardCategories;
