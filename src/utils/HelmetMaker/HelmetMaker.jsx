import {PropTypes} from 'prop-types';
import { Helmet } from 'react-helmet-async';
const HelmetMaker = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

HelmetMaker.propTypes = {
    title : PropTypes.string
}

export default HelmetMaker;
