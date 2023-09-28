import dynamic from 'next/dynamic';
import React from 'react';

const ContactPageContainer = dynamic(() => import('components/ContactPageContainer/ContactPageContainer'), {
  loading: () => <p>Loading...</p>,
})

const page = () => {
  return (<ContactPageContainer />)
}

export default page