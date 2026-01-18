import Title from '@/components/Title';
import React from 'react';

const TutorialPage = async ({params}) => {
    // const {technology, topic, page_no, subject} = await params;
    // console.log(result)
    const {slug} = await params
    const [technology, topic, page_no, subject] = slug || []
    // console.log(result)
    return (
        <div>
            <Title>{technology} Tutorials</Title>
            <h2>{topic}</h2>
            <hr />
            <div className="flex justify-between">
                <h3 className='font-bold'>{subject}</h3>
                <p>Page No: {page_no}</p>
            </div>
            This is Tutorials Page
        </div>
    );
};

export default TutorialPage;