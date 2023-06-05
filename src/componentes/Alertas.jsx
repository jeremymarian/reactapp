import Alert from 'react-bootstrap/Alert';

export default function Alertas ({variant,text,show}) {

    return <Alert show={show} style={{marginTop:"60px"}} key={variant} variant={variant}>
            {text}
    </Alert>

}