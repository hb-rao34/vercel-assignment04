import Link from 'next/link';
import React from 'react';

const header = ()=> {
    return(
        <div className="second">
            <Link href='\'> Home page</Link>
            <Link href='\about'> About Us</Link>
            <Link href='\address'> Address </Link>
            <Link href='\contact'> Contact Us </Link>
        </div>
    )
}

export default header;