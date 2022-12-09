import React from 'react';

const Admin = () => {
  return (
    <div>
      <h1 className="my-5">Page form</h1>
      <div>
        <form>
          <select
            name="page"
            id="page"
            className="form-select mb-3 w-75 mx-auto"
            required
          >
            <option value="" disabled>Select category</option>
            <option value="star-wars">About</option>
            <option value="famous-people">Contacts</option>
            <option value="saying">JavaScript</option>
            <option value="humour">Java</option>
            <option value="motivational">Python</option>
          </select>

          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control w-75 mx-auto"
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="form-group my-3">
           <textarea
             id="content"
             name="content"
             className="form-control w-75 mx-auto"
             placeholder="Enter quote"
             required
           />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >Edit page</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;