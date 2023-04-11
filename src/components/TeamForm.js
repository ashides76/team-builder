import React from "react";

export default function Form(props) {
    const {values, update, submit} = props

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);
    }    

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    value={values.name}
                    name="name"
                    placeholder="Enter a name"
                    onChange={onChange}
                />
                <label>Email</label>
                <input 
                    type="email"
                    value={values.email}
                    name="email"
                    placeholder="Enter an email"
                    onChange={onChange}
                />
                <label>Role</label>
                <select value={values.role} name="role" onChange={onChange}>
                    <option value={''}>Select a role</option>
                    <option value={'backedengineer'}>Backed Engineer</option>
                    <option value={'frontendengineer'}>FrontEnd Engineer</option>
                    <option value={'frontendeveloper'}>FrontEnd Developer</option>
                    <option value={'frontendeveloper'}>FrontEnd Developer</option>
                    <option value={'productowner'}>Product Owner</option>
                    <option value={'scrummaster'}>Scrum Master</option>
                </select>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}