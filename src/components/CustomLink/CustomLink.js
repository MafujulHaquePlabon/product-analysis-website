import React from 'react';
import { useMatch, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match? 'red':"black" , textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  

export default CustomLink;