import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PageType} from "../../types";

const Admin = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<PageType>({
    title: '',
    content: ''
  });
  const [value, setValue] = useState('about');

  const fetchPages = useCallback( async () => {
    try {
      const response = await axiosApi.get(`/pages.json`);
      setPage(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPage(prev => ({...prev, [name]: value}));
  };

  const isSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.put(`/pages/${value}.json`, page);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(`/pages/${value}`);
    }
  };

  return (
    <>
      <h1 className="my-5">Page form</h1>
      <div>
        <form onSubmit={onSubmit}>
          <select
            name="page"
            id="page"
            className="form-select mb-3 w-75 mx-auto"
            required
            onChange={isSelectValue}
          >
            <option value="" disabled>Select category</option>
            <option value="about">About</option>
            <option value="contacts">Contacts</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>

          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control w-75 mx-auto"
              placeholder="Enter title"
              required
              value={page.title}
              onChange={onChange}
            />
          </div>

          <div className="form-group my-3">
           <textarea
             id="content"
             name="content"
             className="form-control w-75 mx-auto"
             placeholder="Enter content"
             required
             value={page.content}
             onChange={onChange}
           />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >Edit page</button>
        </form>
      </div>
    </>
  );
};

export default Admin;