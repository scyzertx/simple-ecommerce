import React from 'react';
import {Link} from 'react-router-dom';
export default function Error(){
    return <section className='error-page section'>
    <div>
        <h1>This page isn't available</h1>
        <h2>The link you followed may be broken, or the page may have been removed.</h2>
        <Link to='/' className='btn btn-primary'>Back Home</Link>
    </div>
    </section>
}