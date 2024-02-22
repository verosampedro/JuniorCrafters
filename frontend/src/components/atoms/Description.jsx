import './Description.css';


const Description = () => {
    return (
        <div className='courseContainer'>
            <article className="description-container">

                <section className="header-section">
                    <h2 className='titleCourse'>Course: in React</h2>
                    <figure className="image-container">
                        <img src="/image/istockphoto.svg" alt="Descripción" />
                    </figure>
                    <div className="star-icons">
                        <img src="/icons/grade.svg" alt="Star" />
                        <img src="/icons/grade.svg" alt="Star" />
                        <img src="/icons/grade.svg" alt="Star" />
                        <img src="/icons/grade.svg" alt="Star" />
                        <img src="/icons/grade (2).svg" alt="Star" />

                    </div>
                </section>
                <section className="text-container">
                    <div className='paragraph'>
                        <p>For developer: Viviana Sánchez</p>
                        <p>
                            The objective of a programming course in React is to equip participants with the skills and knowledge needed to build efficient and modern web applications using the React library. React is a JavaScript library that enables the development of interactive and reactive user interfaces.
                        </p>
                    </div>
                    <button className="subscribe-button">SUSCRIBE</button>
                    <div className="subscribe-icons">
                        <img src="/icons/favorite.svg" alt="Heart" />
                        <img src="/icons/add_shopping_cart.svg" alt="Shopping Cart" />
                    </div>
                </section>
            </article>
        </div>
    );
};

export default Description;
