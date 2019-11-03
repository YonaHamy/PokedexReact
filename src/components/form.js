import React from 'react';

const Form = ({ handleSubmit, value}) => (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="filter"></label>
        <input
        id="filter"
        type="text"
        name="filter"
        />
        <input class="test" type="submit" value="Rechercher" />

    </form>
    <p>{value}</p>
    </>
);

export default Form;