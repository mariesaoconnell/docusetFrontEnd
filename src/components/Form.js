import React from 'react';


function Form({ submitHandler, input, changeHandler }) {
    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="Title"
                    value={input}
                />
                <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="Subject"
                    value={input}
                />
                <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="Content"
                    value={input}
                />
                <button>Submit</button>
            </form>
        </>
    );
}
export default Form;