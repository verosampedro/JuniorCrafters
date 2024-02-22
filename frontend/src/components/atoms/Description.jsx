import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

import './Description.css';

const Description = ({ courseId }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/course`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        console.log(data)

    }, [courseId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='courseContainer'>
            <article className="description-container">
                <section className="header-section">
                    <h2 className='titleCourse'>Course: {data.name}</h2>
                    <figure className="image-container">
                        <img src={data.image} alt="Description" />
                    </figure>
                    <div className="star-icons">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src="/icons/grade.svg" alt="Star" />
                        ))}
                    </div>
                </section>
                <section className="text-container">
                    <div className='paragraph'>
                        <p>For developer: {data.developer}</p>
                        <p>{data.description}</p>
                    </div>
                    <button className="subscribe-button">SUBSCRIBE</button>
                    <div className="subscribe-icons">
                        <img src="/icons/favorite.svg" alt="Heart" />
                        <img src="/icons/add_shopping_cart.svg" alt="Shopping Cart" />
                    </div>
                </section>
            </article>
        </div>
    );
};

Description.propTypes = {
    courseId: PropTypes.string.isRequired, 
};

export default Description;
