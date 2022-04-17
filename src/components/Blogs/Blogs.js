import React from 'react';
import './Blogs.css';
import pin from '../../images/pin.png'

const Blogs = () => {
    return (
        <div classname='blogs-style'>
           <div className='blog'>
           <h3><img style={{width:'25px'}} src={pin} alt='pin' /> What are the difference between <u>authorization</u> and <u>authentication?</u></h3>
            <p>In the most simplistic terms, authentication is the process of ensuring the user is who they say they are, while authorization is the process of giving users access to the resources to which they are entitled.Authentication and authorization are dependent on each other. A user can’t be authorized if they aren’t authenticated first. </p>
           </div>

           <div className='blog'>
               <h3><img style={{width:'25px'}} src={pin} alt='pin' />  Why are you using firebase? What other options do you have to implement authentication?</h3>
               <p>Firebase is a Google initiative. It has supurb level of authentication options. Besides that, it has other analytics, hosting and intigration tools which make the developer's life easy.</p>
               <p>There are few alternatives regarding authentication services other than Firebase. Few of those are: AuthO, MongoDB, Okta, JSON Web Token, etc.</p>
           </div>

           <div className='blog'>
               <h3><img style={{width:'25px'}} src={pin} alt='pin' />  What other services does firebase provide other than authentication </h3>
               <p>Firebase provides a good number of valuable services other than authentications. Few mentionable ones would be: realtime database, remote config, web or app hosting, etc. Firebase also provides many cloud related services including cloud storage, cloud functions, cloud messaging, etc.</p>
           </div>
           
        </div>
    );
};

export default Blogs;