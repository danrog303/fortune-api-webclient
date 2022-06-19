import loadingSpinner from "../../assets/images/loading-spinner.svg";
import Image from 'react-bootstrap/Image'

function LoadingIndicator() {
    return <Image src={loadingSpinner} alt="loading" fluid={true} />;
}

export default LoadingIndicator;
