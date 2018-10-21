import React from 'react';
import { Link } from 'react-router-dom';
// Link esta usando enlaces "client-side"
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Regresar al inicio</Link>
    </div>
);

export default NotFoundPage;